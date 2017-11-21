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
				/*"src": "",*/
				"peso": "2.5 Mb"	
			}],
			"me_gusta": null,
			"marcado": null,
			"comentarios": [
				{
					"publicador": "Mateo Cetti",
					"comentario": "Hola",
					"arch_adj": [{
						/*"src": "",*/
						"peso": "2.5 Mb"
					}]
				},
				{
					"publicador": "Joaquin Garcia",
					"comentario": "Chau",
					"arch_adj": [],
				},
				],
		},
	]
};

function displayArchAdj(anun) {
	if(anun["arch_adj"] != undefined) {
		if(anun["arch_adj"].length != 0) {
			$(".style_anuncios:last").append(inicioArchAdj_anuncio);
			for(var x in anun["arch_adj"]) {
				$("#row_file").append(archAdj_anuncio.replace("%peso_arch%", anun["arch_adj"][x].peso));
			}
		}
	}
}

function displayArchAdjComentario(anun) {
	if(anun["arch_adj"] != undefined) {
		if(anun["arch_adj"].length != 0) {
			for(var x in anun["arch_adj"]) {
				$("#row_comment_file").append(archAdj_comentario.replace("%peso_arch%", anun["arch_adj"][x]));
			}
		}
	}
}

function displayComentarios(anun) {
	if(anun["comentarios"] != undefined) {
		if(anun["comentarios"].length != 0) {
			$(".style_anuncios:last").append(tabla_comentarios);
			for(var x in anun["comentarios"]) {
				var _comentario = cont_comentario.replace("%cont%", anun["comentarios"][x].comentario) + inicioArchAdj_comentario + publicador_comentario.replace("%publicador%", anun["comentarios"][x].publicador);
				displayArchAdjComentario(anun["comentarios"][x])
				$("#comentarios").append(inicio_comentario.replace("%inicio_comentario%", _comentario));
			}
		}
	}
}

function displayAnuncios() {
	for(var val in anuncio.anuncios) {
		$("#anuncios").append(inicio_anuncios);
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
	}
}
