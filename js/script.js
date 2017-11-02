// Inicializo Firebase
var config = {
    apiKey: "AIzaSyA9cESe5z4TmApVXTSV3uBNLQFGzSo1c48",
    authDomain: "proyecto-paginaitsv.firebaseapp.com",
    databaseURL: "https://proyecto-paginaitsv.firebaseio.com",
    projectId: "proyecto-paginaitsv",
    storageBucket: "",
    messagingSenderId: "542503277396"
};

$(document).ready(firebase.initializeApp(config));


// Calendario
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
