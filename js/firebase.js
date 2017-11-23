// Inicializo Firebase
var config = {
	apiKey: "AIzaSyA9cESe5z4TmApVXTSV3uBNLQFGzSo1c48",
	authDomain: "proyecto-paginaitsv.firebaseapp.com",
	databaseURL: "https://proyecto-paginaitsv.firebaseio.com",
	projectId: "proyecto-paginaitsv",
	storageBucket: "proyecto-paginaitsv.appspot.com",
	messagingSenderId: "542503277396"
};
firebase.initializeApp(config);

var database = firebase.database();
