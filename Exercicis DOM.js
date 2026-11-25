/****** Exercici 5.1 ******/
// a.	Número d'enllaços que hi ha a la pàgina
function e51a(){
	var enllacos = document.getElementsByTagName("a");
	alert("Nombre d'enllaços a la pàgina: " + enllacos.length);
}

// b.	Adreça (URL) del penúltim enllaç
function e51b(){
	var enllacos = document.getElementsByTagName("a");
	var penultim = enllacos[enllacos.length - 2];
	alert("URL del penúltim enllaç: " + penultim.getAttribute("href"));
}

//c.	Numero d'enllaços que ho fan a http://www.uab.cat
function e51c(){
	var enllacos = document.getElementsByTagName("a");
	var comptador = 0;
	for (var i = 0; i < enllacos.length; i++) {
		// getAttribute devuelve el href tal cual está escrito en el HTML
		if (enllacos[i].getAttribute("href") == "http://www.uab.cat") {
			comptador++;
		}
	}
	alert("Enllaços a http://www.uab.cat: " + comptador);
}

//d.	Número d'enllaços al tercer paràgraf.
function e51d(){
	var tercer = document.getElementById("aquest");   // el tercer paràgraf té id="aquest"
	var enllacos = tercer.getElementsByTagName("a");
	alert("Enllaços al tercer paràgraf: " + enllacos.length);
}


/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a(){
	var paragrafs = document.getElementsByTagName("p");
	// Último párrafo de texto = el último <p> que NO contiene botones
	var ultim = null;
	for (var i = 0; i < paragrafs.length; i++) {
		if (paragrafs[i].getElementsByTagName("button").length == 0) {
			ultim = paragrafs[i];
		}
	}

	var nou = document.createElement("p");
	nou.appendChild(document.createTextNode("Hola món!"));

	// Insertar justo después del último párrafo de texto
	ultim.parentNode.insertBefore(nou, ultim.nextSibling);
}

// b. Entre el segon i el tercer paràgraf.
function e52b(){
	var tercer = document.getElementById("aquest");   // el tercer paràgraf original

	var nou = document.createElement("p");
	nou.appendChild(document.createTextNode("Hola món!"));

	// Insertar justo antes del tercer párrafo
	tercer.parentNode.insertBefore(nou, tercer);
}


/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició.
function e53a(){
	var llista = document.getElementById("llista");

	var nou = document.createElement("li");
	nou.appendChild(document.createTextNode("Salve Mundi!"));

	// Antes del último <li> => queda en penúltima posición
	llista.insertBefore(nou, llista.lastElementChild);
}

// Canviar l'estil de la llista
function e53b(){
	var llista = document.getElementById("llista");
	llista.style.listStyleType = "none";   // sin puntitos
}

// Llistar elements (muestra el texto de cada <li> en un alert)
function e53c(){
	var elements = document.getElementById("llista").getElementsByTagName("li");
	var text = "";
	for (var i = 0; i < elements.length; i++) {
		text += (i + 1) + ". " + elements[i].textContent + "\n";
	}
	alert(text);
}


/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54(){
	var paragrafs = document.getElementsByTagName("p");
	var segon = paragrafs[1];
	var boto = document.getElementById("mostraAmaga");

	if (segon.style.display == "none") {
		// Deshacer: volver a mostrar y restaurar el texto del botón
		segon.style.display = "";
		boto.textContent = "Amagar paràgraf";
	} else {
		// Ocultar y cambiar el texto del botón
		segon.style.display = "none";
		boto.textContent = "Mostrar paràgraf";
	}
}