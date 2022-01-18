
var textoAEncriptar = document.querySelector("#texto-encriptar");
var textoYaProcesado = document.querySelector("#text-encriptado");
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopiar = document.querySelector("#btnCopiar");


window.textoProcesado = "";

textoYaProcesado.placeholder = "Ningún mensaje fue encontrado.";

var textoPrueba = "la pata del murciélago hace pum y se retuerce como loca.";
var textoPrueba2 = "lai paitai denterl mufatrcimesenterlaigober haicenter pufatm y senter rentertufatenterrcenter cobermober lobercai."

function procesarMensaje(texto){
	var textoProcesar = quitarAcentos(texto.value);
	var mensajeARetornar = "";
	regex = /[A-Z0-9]/
	if (regex.test(textoProcesar)){
		texto.classList.add("error");
	} else {
		texto.classList.remove("error");
		mensajeARetornar = textoProcesar
	};
	return mensajeARetornar;
}

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

function encriptar(texto){
	const encriptacion = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
	return texto.split('').map( letra => encriptacion[letra] || letra).join('').toString();
}

function desencriptar(texto){
	const desencriptacion = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"};
	var textoDE = texto;
	Object.entries(desencriptacion).forEach(([key, value]) => {
  		textoDE = textoDE.replaceAll(key, value);;
	});
	return textoDE;
}

textoAEncriptar.addEventListener("input", function(){
	textoProcesado = procesarMensaje(textoAEncriptar);
});

btnEncriptar.addEventListener("click", function(){
	if (textoProcesado == ""){
		textoYaProcesado.value= "";
		textoYaProcesado.placeholder = "Ningún mensaje fue encontrado.";
	} else {
		textoYaProcesado.value = encriptar(textoProcesado);
	}
});

btnDesencriptar.addEventListener("click", function(){
	if (textoProcesado == ""){
		textoYaProcesado.value= "";
		textoYaProcesado.placeholder = "Ningún mensaje fue encontrado.";
	} else {
		textoYaProcesado.value = desencriptar(textoProcesado);
	}
});

btnCopiar.addEventListener("click", function(){
	textoYaProcesado.select();
	document.execCommand("copy");
});
