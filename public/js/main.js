"use strict";
//Variables y constantes
var config = {
    apiKey: "AIzaSyCXerQijsAAzhODjK2uZMPbLCx3Uo--87o",
    authDomain: "fotoinfracciones-8f8c9.firebaseapp.com",
    databaseURL: "https://fotoinfracciones-8f8c9.firebaseio.com",
    projectId: "fotoinfracciones-8f8c9",
    storageBucket: "fotoinfracciones-8f8c9.appspot.com",
    messagingSenderId: "920562622428"
}, app, serverKey;
app = firebase.initializeApp(config);

//Funciones
function getTitle(){
    var $title;
    $title = $("#titulo");
    if($title.val()){
        return $title.val();
    }
    alert_message("Escriba un titulo");
    return false;
}

function getMessage(){
    var $message;
    $message = $("#mensaje");
    if($message.val()){
        return $message.val();
    }
    alert_message("Escriba un mensaje");
    return false;
}

function getNotification(){
    var message, title, notification;
    message = getMessage();
    title = getTitle();
    if(message && title) {
        //return notification = { "notification": { "title": title, "body": message, "icon":"/../img/logo_jalisco.svg"}, "to": "c47SMKC8hHk:APA91bFZ2ITD3stYfZyt40dMxU-W1AM3HVdQVeToL6K5S6UCDrqrbdj7k3-tGdDpeiwXCO_UzsI3Ru0lIZ8BmMdAceYsNi2chY8Hm47FCGUg9LBLI6YVE48JlMMHlEi4w0brmKaushxu"};
        return notification = { "notification": { "title": title, "body": message, "icon":"/../img/logo_jalisco.svg"}, "to": "/topics/Fotoinfracciones"};
    }
    return false;
}

function alert_message(message) {
    //$("#alert-modal .modal-card-title").html(title);
    $("#alert-modal .modal-card-body").html(message);
    $("#alert-modal").addClass("is-active");
}

function sendToServert(url, data, type, dataType) {
    $.ajax({
        "url": url,
        "data": JSON.stringify(data),
        "type": type,
        "dataType": dataType,
        "contentType": "application/json",
        "headers": {
            "Authorization": "KEY=AAAA1lXO39w:APA91bGJtz04Fp6PKkfDblmDzf2ILjcKOxN4FkUqQzopd4dCLjxtMgyn0rdOfXdszq1m9l2i6pkxbHyQ25KIHePRdVI_j41U7RLNvl_HzNBoEhQ6NPxjQdTBI85r6eTUhnkLIcOesCCZ",
        },
        "success": function(json) {
            alert_message("Mensaje enviado");
        },
        "error": function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function main() {
    var notification;
    const messaging = app.messaging();

    notification = getNotification();

    messaging.requestPermission()
    .then(function() {
        messaging.getToken()
        .then(function(currentToken) {
            if (currentToken && notification) {
                sendToServert("https://fcm.googleapis.com/fcm/send", notification, "POST", "json");
            } else {
                console.log('No Instance ID token available. Request permission to generate one.');
            }
        })
        .catch(function(err) {
            console.log('An error occurred while retrieving token. ', err);
        });
    })
    .catch(function(err) {
        console.log('Unable to get permission to notify. ', err);
    });
}

function start() {
    //Varibles
    var $btn_send = $("#btn_send");

    //Eventos
    $btn_send.click(function(){
        main();
    });

    $("#alert-modal").click(function() {
        $("#alert-modal").addClass("is-active");  
    });
      
    $("#alert-modal").click(function() {
        $("#alert-modal").removeClass("is-active");
    });
}

$(function(){
    start();
})