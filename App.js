/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { WebView } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {

    const injectJS = `
    localStorage.setItem('shouldLogin', false);
    localStorage.setItem("adal.access.token.key50f89ecf-358c-4575-9290-d93e15cf7632","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyIsImtpZCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyJ9.eyJhdWQiOiI1MGY4OWVjZi0zNThjLTQ1NzUtOTI5MC1kOTNlMTVjZjc2MzIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmIwZmYwNi0yNTJiLTQyMTgtYjA0ZC1iOGNlYWY4NTFjYzkvIiwiaWF0IjoxNTUyNDY4MDMwLCJuYmYiOjE1NTI0NjgwMzAsImV4cCI6MTU1MjQ3MTkzMCwiYWlvIjoiNDJKZ1lDZ0trRHArcU83RDI5cFNsWnFEWWt0UHE3OFQzWEROYThYZEMwdjdORFF6WmV3QiIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJSYW5hd2VlcmEiLCJnaXZlbl9uYW1lIjoiQ2hhbmRpbWEiLCJpcGFkZHIiOiIxMjMuMjMxLjEyNy4xNjMiLCJuYW1lIjoiQ2hyaXMgR3JlZW4iLCJub25jZSI6ImVhOWNjNjkyLWJlMmYtNGUyZS1iMzRjLThhNDI0MmE2ZmU3MyIsIm9pZCI6IjBmYTE1MGE5LTQ3YjMtNGU3OC1hZmIwLWVmNjgxYjk2ZGY0MCIsInN1YiI6IkhrUm5MNm9yY2NxVzFEVFF5SmFyT2dPalFWRUlUT3hXSXVUUTJVUVNuUWsiLCJ0aWQiOiJkYmIwZmYwNi0yNTJiLTQyMTgtYjA0ZC1iOGNlYWY4NTFjYzkiLCJ1bmlxdWVfbmFtZSI6InVzZXIxQGNoYW5kaW1hdmlydHVzYS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJ1c2VyMUBjaGFuZGltYXZpcnR1c2Eub25taWNyb3NvZnQuY29tIiwidXRpIjoiM2RiOXFBRXNCMDJEQzZMS1B3c0dBUSIsInZlciI6IjEuMCJ9.e6xuQ0YeYYsAHp_dnFO2Phl8WJ9ZXkthHlJjraaocGP1G4S05PZHqXke8ZComSHP4ETwBacv61n9VTeYkxzEhyS5SdoBbKfOd58VNh7rULoPZtLTk_3ldVd3qRrHmdK9fu7vKrQO4XszCDQ_EkG59Iy1aUxz29vpozmRrFnAho0na4zXI1b3w6EQekHAzjWLntUmb9OkZg_YBM1Z8J1BDRBG8IZGgydRtGYcwA9PklpgcBQ2U4ko3ZPY585ZPvi8aIvDxyWYMNhqC1Ol864BaGqLD4-vQXdD2dpg2M5bOiwu2Dt3s3zChK_OQ5pbt_uhHfKFVMMcpjJAgqe6JcN-DQ");
    localStorage.setItem("adal.error","");
    localStorage.setItem("adal.error.description","");
    localStorage.setItem("adal.expiration.key50f89ecf-358c-4575-9290-d93e15cf7632","1552471930");
    localStorage.setItem("adal.idtoken","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyIsImtpZCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyJ9.eyJhdWQiOiI1MGY4OWVjZi0zNThjLTQ1NzUtOTI5MC1kOTNlMTVjZjc2MzIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmIwZmYwNi0yNTJiLTQyMTgtYjA0ZC1iOGNlYWY4NTFjYzkvIiwiaWF0IjoxNTUyNDY4MDMwLCJuYmYiOjE1NTI0NjgwMzAsImV4cCI6MTU1MjQ3MTkzMCwiYWlvIjoiNDJKZ1lDZ0trRHArcU83RDI5cFNsWnFEWWt0UHE3OFQzWEROYThYZEMwdjdORFF6WmV3QiIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJSYW5hd2VlcmEiLCJnaXZlbl9uYW1lIjoiQ2hhbmRpbWEiLCJpcGFkZHIiOiIxMjMuMjMxLjEyNy4xNjMiLCJuYW1lIjoiQ2hyaXMgR3JlZW4iLCJub25jZSI6ImVhOWNjNjkyLWJlMmYtNGUyZS1iMzRjLThhNDI0MmE2ZmU3MyIsIm9pZCI6IjBmYTE1MGE5LTQ3YjMtNGU3OC1hZmIwLWVmNjgxYjk2ZGY0MCIsInN1YiI6IkhrUm5MNm9yY2NxVzFEVFF5SmFyT2dPalFWRUlUT3hXSXVUUTJVUVNuUWsiLCJ0aWQiOiJkYmIwZmYwNi0yNTJiLTQyMTgtYjA0ZC1iOGNlYWY4NTFjYzkiLCJ1bmlxdWVfbmFtZSI6InVzZXIxQGNoYW5kaW1hdmlydHVzYS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJ1c2VyMUBjaGFuZGltYXZpcnR1c2Eub25taWNyb3NvZnQuY29tIiwidXRpIjoiM2RiOXFBRXNCMDJEQzZMS1B3c0dBUSIsInZlciI6IjEuMCJ9.e6xuQ0YeYYsAHp_dnFO2Phl8WJ9ZXkthHlJjraaocGP1G4S05PZHqXke8ZComSHP4ETwBacv61n9VTeYkxzEhyS5SdoBbKfOd58VNh7rULoPZtLTk_3ldVd3qRrHmdK9fu7vKrQO4XszCDQ_EkG59Iy1aUxz29vpozmRrFnAho0na4zXI1b3w6EQekHAzjWLntUmb9OkZg_YBM1Z8J1BDRBG8IZGgydRtGYcwA9PklpgcBQ2U4ko3ZPY585ZPvi8aIvDxyWYMNhqC1Ol864BaGqLD4-vQXdD2dpg2M5bOiwu2Dt3s3zChK_OQ5pbt_uhHfKFVMMcpjJAgqe6JcN-DQ");
    localStorage.setItem("adal.login.error","");
    localStorage.setItem("adal.login.request","http://192.168.1.40:3000/");
    localStorage.setItem("adal.nonce.idtoken","ea9cc692-be2f-4e2e-b34c-8a4242a6fe73||");
    localStorage.setItem("adal.session.state","dd1649e6-b3df-4a0a-893d-5eba79649259");
    localStorage.setItem("adal.state.login","2142384f-1a18-4225-90b2-06967f658290||");
    localStorage.setItem("adal.token.keys","50f89ecf-358c-4575-9290-d93e15cf7632|");
    localStorage.setItem("adal.token.renew.status50f89ecf-358c-4575-9290-d93e15cf7632","Completed");
      `;

    return (
      <WebView
        source={{ uri: 'http://192.168.1.40:3000' }}
        style={{ marginTop: 20 }}
        useWebKit={true} // This is for iOS
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={injectJS}
      />
    );
  }
}
