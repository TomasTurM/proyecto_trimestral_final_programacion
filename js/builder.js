// Esqueleto Anuncio
var anuncio = {
	"anuncios": [
		{
			"titulo": "Titulo",
			"fecha": "20/11/17",
			"hora": "18:53",
			"publicador": "Tomas Monier",
			"contenido": "Contenido Contenido Contenido Contenido Contenido",
			"arch_adj": [{
				"peso": "2.5 Mb"	
			},
			{
				"peso": "2.7 Mb"	
			},
			{
				"peso": "3.5 Mb"	
			}],
			"me_gusta": null,
			"marcado": null,
			"comentarios": [
				{
					"publicador": "Mateo Cetti",
					"comentario": "Hola",
					"arch_adj": [{
						"peso": "2.5 Mb"
					},
					{
						"peso": "2.7 Mb"
					}]
				},
				{
					"publicador": "Joaquin Garcia",
					"comentario": "Chau",
					"arch_adj": [],
				},
				],
		},
		{
			"titulo": "Otro Titulo",
			"fecha": "23/11/17",
			"hora": "10:53",
			"publicador": "Javier Redolfi",
			"contenido": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
			"arch_adj": [],
			"me_gusta": null,
			"marcado": null,
			"comentarios": [
				{
					"publicador": "Otro Tipo",
					"comentario": "Buenos Dias",
					"arch_adj": []
				},
				],
		},
	]
};

/* Por Clase */
/*function displayArchAdj(anun) {
	if(anun["arch_adj"] != undefined) {
		if(anun["arch_adj"].length != 0) {
			$(".style_anuncios:last").append(inicioArchAdj_anuncio);
			for(var x in anun["arch_adj"]) {
				$("#row_file").append(archAdj_anuncio.replace("%peso_arch%", anun["arch_adj"][x].peso));
			}
		}
	}
}*/

/* Por ID */
function displayArchAdj(anun, id) {
	if(anun["arch_adj"] != undefined) {
		if(anun["arch_adj"].length != 0) {
			$(id).append(inicioArchAdj_anuncio);
			for(var x in anun["arch_adj"]) {
				$("#row_file").append(archAdj_anuncio.replace("%peso_arch%", anun["arch_adj"][x].peso));
			}
		}
	}
};

/*function displayArchAdjComentario(anun) {
	if(anun != undefined) {
		if(anun.length != 0) {
			for(var x in anun) {
				$("#row_comment_file").append(archAdj_comentario.replace("%peso_arch%", anun["arch_adj"][x]));
			}
		}
	}
}*/

/* Por ID */
function displayArchAdjComentario(anun, id) {
	if(anun != undefined) {
		if(anun.length != 0) {
			for(var x in anun) {
				$(id).append(archAdj_comentario.replace("%peso_arch%", anun[x].peso));
			}
		}
	}
};

/* Por Clase */
/*function displayComentarios(anun) {
	if(anun["comentarios"] != undefined) {
		if(anun["comentarios"].length != 0) {
			$(".style_anuncios:last").append(tabla_comentarios);
			for(var x in anun["comentarios"]) {
				var _comentario = cont_comentario.replace("%cont%", anun["comentarios"][x].comentario) + inicioArchAdj_comentario + publicador_comentario.replace("%publicador%", anun["comentarios"][x].publicador);
				displayArchAdjComentario(anun["comentarios"][x]);
				$("#comentarios").append(inicio_comentario.replace("%inicio_comentario%", _comentario));
			}
		}
	}
}*/

/* Por ID */
function displayComentarios(anun, id) {
	if(anun["comentarios"] != undefined) {
		if(anun["comentarios"].length != 0) {
			$(id).append(tabla_comentarios.replace("%id%", id));
			var usar_id = "#" + id.toString();
			var id_2 = id + 1;
			var usar_id_2 = "#" + id_2;
			for(var x in anun["comentarios"]) {
				var _comentario = cont_comentario.replace("%cont%", anun["comentarios"][x].comentario) + inicioArchAdj_comentario.replace("%id_arch_adj%", id_2) + publicador_comentario.replace("%publicador%", anun["comentarios"][x].publicador);
				displayArchAdjComentario(anun["comentarios"][x]["arch_adj"], usar_id_2);
				$(usar_id).append(inicio_comentario.replace("%inicio_comentario%", _comentario));
			}
		}
	}
};

function displayAnuncios() {
	/* Por Clase */
	/*for(var val in anuncio.anuncios) {
		$("#anuncios").append(inicio_anuncios.replace("%id%", val.toString()));
		var id = "#" + val.toString();
		var a = anuncio.anuncios[val];
		var fechaYhora = fecha_anuncio.replace("%fecha%", a.fecha) + hora_anuncio.replace("%hora%", a.hora);
		var header = titulo_anuncio.replace("%titulo%", a.titulo) + fechaYhora_anuncio.replace("%fechaYhora%", fechaYhora); 
		$(".style_anuncios:last").append(header_anuncio.replace("%cont_header%", header));
		$(".style_anuncios:last").append(publicador_anuncio.replace("%publicador%", a.publicador));
		$(".style_anuncios:last").append(contenido_anuncio.replace("%contenido%", a.contenido));
		displayArchAdj(a);
		$(".style_anuncios:last").append(botones_anuncio);
		var cant_comentarios = Object.keys(anuncio["anuncios"].length);
		$(".style_anuncios:last").append(header_comentarios.replace("%cant_comentarios%", cant_comentarios));
		displayComentarios(a);
		$(".style_anuncios:last").append(input_comentario);
	}*/

	/* Por ID */
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
};
