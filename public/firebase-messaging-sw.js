"use strict";
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5sZk2aN1-uWRG2SQb3eoPaHzpqQmAG1M",
    authDomain: "foto-infraccion-87f9c.firebaseapp.com",
    databaseURL: "https://foto-infraccion-87f9c.firebaseio.com",
    projectId: "foto-infraccion-87f9c",
    storageBucket: "foto-infraccion-87f9c.appspot.com",
    messagingSenderId: "252513988836"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const title = "Hello World";
    const options = {
        body: payload.data.status()
    };
    return self.registrtion.showNotification(title, options);
});