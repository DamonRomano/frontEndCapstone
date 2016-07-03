// define modules
var app = angular.module('app', ['ngRoute', 'ngSanitize']);
// constants

// initialize firebase
var config = {
    apiKey: "AIzaSyARPxKX7nyjnNE3_Gx_MnbRp5mw9oYOnrw",
    authDomain: "nss-front-end-capstone.firebaseapp.com",
    databaseURL: "https://nss-front-end-capstone.firebaseio.com",
    storageBucket: "nss-front-end-capstone.appspot.com",
  };
  firebase.initializeApp(config);
