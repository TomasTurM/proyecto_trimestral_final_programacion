// Initialize Firebase
var config = {
	apiKey: "AIzaSyA9cESe5z4TmApVXTSV3uBNLQFGzSo1c48",
	authDomain: "proyecto-paginaitsv.firebaseapp.com",
	databaseURL: "https://proyecto-paginaitsv.firebaseio.com",
	projectId: "proyecto-paginaitsv",
	storageBucket: "proyecto-paginaitsv.appspot.com",
	messagingSenderId: "542503277396"
};
firebase.initializeApp(config);

function publicar_anuncio() {
	var get_titulo = document.querySelector("#titulo").value;
	var get_usuario = document.querySelector("#usuario").value;
	var get_contenido = document.querySelector("#contenido").value;

	console.log(get_titulo);
	console.log(get_usuario);
	console.log(get_contenido);

	var data_anuncio = {
		titulo: get_titulo,
		usuario: get_usuario,
		contenido: get_contenido
	};

	var key_anuncio = firebase.database().ref().child("anuncios").push().key;

	var updates = {};
	updates["/anuncios/" + key_anuncio] = data_anuncio;

	return firebase.database().ref().update(updates);
};

function construir_anuncio(titulo, usuario, contenido) {
	for(var val in anuncio.anuncios) {
		$("#anuncios").append(inicio_anuncios.replace("%id%", val.toString()));
		var id = "#" + val.toString();
		var a = anuncio.anuncios[val];
		var fechaYhora = fecha_anuncio.replace("%fecha%", a.fecha) + hora_anuncio.replace("%hora%", a.hora);
		var header = titulo_anuncio.replace("%titulo%", a.titulo) + fechaYhora_anuncio.replace("%fechaYhora%", fechaYhora); 
		$(id).append(header_anuncio.replace("%cont_header%", header));
		$(id).append(publicador_anuncio.replace("%publicador%", a.publicador));
		$(id).append(contenido_anuncio.replace("%contenido%", a.contenido));
		displayArchAdj(a, id);
		$(id).append(botones_anuncio);
		var cant_comentarios = a["comentarios"].length;
		$(id).append(header_comentarios.replace("%cant_comentarios%", cant_comentarios));
		displayComentarios(a, val);
		$(id).append(input_comentario);
	}
}

function get_datos() {
	var lector = firebase.database().ref("anuncios").orderByKey();
	lector.once("value", function(snapshot) {
  		snapshot.forEach(function(childSnapshot) {
    		var key = childSnapshot.key;
    		var data_titulo = childSnapshot.child("titulo").val();

    		var objeto = key + data_titulo;
    		console.log(objeto);
  		});
  	});
}
