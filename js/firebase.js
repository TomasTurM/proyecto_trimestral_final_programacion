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
	const get_titulo = document.querySelector("#titulo").value;
	const get_usuario = document.querySelector("#usuario").value;
	const get_contenido = document.querySelector("#contenido").value;
	const get_date = new Date();
	const get_fecha = {
		hora: get_date.getHours(),
		minutos: get_date.getMinutes(),
		dia: get_date.getDate(),
		mes: get_date.getMonth() + 1,
		año: get_date.getFullYear()
	}

	var key_anuncio = firebase.database().ref().child("anuncios").push().key;

	var data_anuncio = {
		id: key_anuncio,
		fecha: get_fecha,
		titulo: get_titulo,
		usuario: get_usuario,
		contenido: get_contenido,
	};

	var updates = {};
	updates["/anuncios/" + key_anuncio] = data_anuncio;

	firebase.database().ref().update(updates);

	Materialize.toast("Anuncio Publicado", 4000);
};

/*function construir_input_comentario (id_input) {
	const id_anuncio = "#" + id_input;
	const key_inicio = "input_comentario" + id_input;
	const id_inicio = "#input_comentario" + id_input;

	const input_boton_comentario = input_comentar.replace("%id_text%", id_input) + boton_comentar.replace("%id_boton%", id_input);

	$(id_anuncio).append(inicio_input_comentario.replace("%id_init_com%", key_inicio));
	$(id_inicio).append(input_boton_comentario);

	console.log(input_boton_comentario);
	console.log("");
	console.log(inicio_input_comentario);
	console.log("");
	console.log(id_anuncio);
	console.log(key_inicio);
	console.log(id_inicio);
}

function subir_comentario(id) {

	const get_contenido_comentario = document.querySelector("#text_comment-" + id);

	var key_comentario = firebase.database().ref("anuncios/" + id + "/comentarios").push().key;

	var data_comentario = {
		id: key_comentario,
		contendio: get_contenido_comentario
	}

	var updates = {};
	updates["/anuncios/" + id + "/comentarios/" + key_comentario] = data_comentario;

	firebase.database().ref().update(updates);

}*/

function construir_anuncios(key, fecha, titulo, usuario, contenido) {
	
	$("#anuncios").append(inicio_anuncios.replace("%id%", key));
	const id = "#" + key;
	const hora_form = fecha.hora + ":" + fecha.minutos;
	const fecha_form = fecha.dia + "/" + fecha.mes + "/" + fecha.año;
	const fechaYhora = fecha_anuncio.replace("%fecha%", fecha_form) + hora_anuncio.replace("%hora%", hora_form);
	const header = titulo_anuncio.replace("%titulo%", titulo) + fechaYhora_anuncio.replace("%fechaYhora%", fechaYhora); 
	$(id).append(header_anuncio.replace("%cont_header%", header));
	$(id).append(publicador_anuncio.replace("%publicador%", usuario));
	$(id).append(contenido_anuncio.replace("%contenido%", contenido));
	$(id).append(botones_anuncio);

	/*construir_input_comentario(key);*/

	//$(id).append(comment);
	//const ref = firebase.database().ref("anuncios/" + key + "/comentarios");
	/*ref.on("value", function(snapshot) {
		var _comentario = cont_comentario.replace("%cont%", ref.) + inicioArchAdj_comentario.replace("%id_arch_adj%", id_2) + publicador_comentario.replace("%publicador%", anun["comentarios"][x].publicador);
	});*/
	
};

function get_datos() {
	const lector = firebase.database().ref("anuncios/");
	lector.on("value", function(snapshot) {
		$("#anuncios").empty();
  		snapshot.forEach(function(childSnapshot) {
    		var key = childSnapshot.key;
    		var data_fecha = childSnapshot.child("fecha").val();
    		var data_titulo = childSnapshot.child("titulo").val();
    		var data_usuario = childSnapshot.child("usuario").val();
    		var data_contenido = childSnapshot.child("contenido").val();

    		construir_anuncios(key, data_fecha, data_titulo, data_usuario, data_contenido);
  		});
  	});
}
