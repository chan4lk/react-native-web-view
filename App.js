/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { WebView, Text } from 'react-native';

import AzureAdal from 'react-native-azure-adal';

const authority = "https://login.windows.net/common";
const clientId = '0802f8e5-a03c-4538-a08e-727efcd71e6b';
const redirectUri = 'msauth://com.webviewsample/Ah%2BzH6OcLZbqil1Gnl5rpShxRFk%3D';
const validateAuthority = false;
const useBroker = true;

const webClientId = '50f89ecf-358c-4575-9290-d93e15cf7632'

//const webId = '50f89ecf-358c-4575-9290-d93e15cf7632'
const resourceUri = 'https://chandimavirtusa.onmicrosoft.com/my-spring-api'
const webUrl = 'http://192.168.8.102:3000'

export default class App extends Component {

  constructor(props) {
    super(props);


  }

  state = {
    isLoggedin: false,
    givenName: '',
    authDetails: {
      userInfo: {

      }
    },
    token: ''
  }

  getToken() {
    AzureAdal
      .configure(authority, validateAuthority, clientId, redirectUri, useBroker)
      .then(isConfigured => {
        AzureAdal.login(resourceUri, '')
          .then((authDetails) => {
            
            
            this.setState({
              isLoggedin: true,
              givenName: authDetails.userInfo.givenName,
              authDetails,
              token: authDetails.accessToken
            })
          }).catch((err) => {
            alert(JSON.stringify(err));
            console.error(err)
          })
        
        
      })
  }

  componentDidMount() {
    try {
      this.getToken();
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  render() {

    const injectJS = `
    localStorage.setItem('shouldLogin', false);
    localStorage.setItem("adal.access.token.key${webClientId}","${this.state.token}");
    localStorage.setItem("adal.error","");
    localStorage.setItem("adal.error.description","");
    localStorage.setItem("adal.expiration.key${webClientId}",${new Date(this.state.authDetails.expiresOn).getTime()});
    localStorage.setItem("adal.idtoken","${this.state.token}");
    localStorage.setItem("adal.login.error","");
    localStorage.setItem("adal.login.request","${webUrl}");
    localStorage.setItem("adal.nonce.idtoken","${this.state.authDetails.idToken}||");
    localStorage.setItem("adal.session.state","${this.state.authDetails.userInfo.uniqueId}");
    localStorage.setItem("adal.state.login","${this.state.authDetails.userInfo.userId}||");
    localStorage.setItem("adal.token.keys","${webClientId}|");
    localStorage.setItem("adal.token.renew.status${webClientId}","Completed");
      `;

    if (this.state.token !== '') {
      console.log(this.state.authDetails);
      console.log(injectJS);
      return (
        <WebView
          source={{ uri: webUrl }}
          style={{ marginTop: 20 }}
          useWebKit={true} // This is for iOS
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          injectedJavaScript={injectJS}
        />
      );

    } else {

      return (<Text>{"Loading..."}</Text>)
    }
  }
}
