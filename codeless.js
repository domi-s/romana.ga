document.getElementsByTagName('script')[0].remove();
document.body.innerHTML = document.body.innerHTML.replace("style\n", 'style\n<div id="top"><titlu><a href="index.html">roma2na.ga</a></titlu><asubc><a href="morfologia-parti-de-vorbire.html"><subc class="subd">Morfologia</subc></a><a href="sintaxa-parti-de-propozitie.html"><subc class="subc">Sintaxa</subc></a><a href="sintaxa-frazei-alcatuirea-frazei.html"><subc class="subc">Sintaxa frazei</subc></a><a href="fonetica-fonetica.html"><subc class="subc">Fonetica</subc></a></asubc><bsubc>&#9776;</bsubc></div>');
var c = document.body;
c = c.innerHTML.split("\n");
document.body.innerHTML = "";
document.body.style.padding = "0 20px";

var hasstyle = 0;
var hasalert = 0;
var hasbasic = 0;
var hasimage = 0;

var alertstyle = "anote, aalert, adef { border-left: 2px solid rgba(0, 0, 0, .2); width: 75%; } acode { width: calc(100% - 2 * 10px); } anote, aalert, acode, adef { padding: 5px; display: inline-block; margin: 3px 0; } anote { background: lightyellow; } anote::before { content: 'Nota: '; display: initial; font-family: Consolas; font-weight: bold; } adef { background: lightblue; } adef::before { content: 'Definitie: '; display: initial; font-family: Consolas; font-weight: bold; } aalert { background: salmon; } aalert::before { content: 'ALERTA: '; display: initial; font-family: Consolas; font-weight: bold; } acode { background: #eee; border-radius: 5px; font-family: Consolas; }";
var basicstyle = "body { max-width: 500px; display: table; table-layout: fixed; margin: auto; padding: 15px; }";
var imagestyle = "img { width: 100%; max-width: 490px; margin: 5px 0; }";

function setV(w, s, x = "_cljsv_") {
	eval(x + w + " = '" + s + "';");
}

function getV(w, x = "_cljsv_") {
	return eval(x + w + ";");
}

function styleModif(w) {
	if (hasstyle == 0) {
		var newe = document.createElement("style");
		newe.setAttribute("id", "cljss");
		document.head.appendChild(newe);
		hasstyle = 1;
	}

	if (getV(w, "has") == 0) {
		document.getElementById('cljss').innerHTML += getV("style", w);
		setV(w, 1, "has");
	}
}

for(i = 0; i < c.length; i++) {
	if(c[i] == "" || c[i][0] == "?") continue;
	var c_ = c[i], type = c[i].split(" ");
	type = [type.shift(), type.join(" ")];
	if(type[0] == "title") {
		document.title = type[1];
	} else if(type[0] == "style") {
		document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0">';
		styleModif("basic");
	} else if(type[0] == "font") {
		document.head.innerHTML += '<style>* { font-family: "' + type[1] + '", serif; }</style><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">';
	} else if(type[0] == "header") {
		var newe = document.createElement("h1");
		var newt = type[1];
		document.body.appendChild(newe);
		newe.innerHTML = newt;
	} else if(type[0] == "note") {
		var newe = document.createElement("anote");
		var newt = type[1] + "<br>";
		document.body.appendChild(newe);
		newe.innerHTML = newt;

		styleModif("alert");
	} else if(type[0] == "def") {
		var newe = document.createElement("adef");
		var newt = type[1] + "<br>";
		document.body.appendChild(newe);
		newe.innerHTML = newt;

		styleModif("alert");
	} else if(type[0] == "alert") {
		var newe = document.createElement("aalert");
		var newt = type[1] + "<br>";
		document.body.appendChild(newe);
		newe.innerHTML = newt;

		styleModif("alert");
	} else if(type[0] == "code") {
		var newe = document.createElement("acode");
		var newt = type[1] + "<br>";
		document.body.appendChild(newe);
		newe.innerHTML = newt;

		styleModif("alert");
	} else if(type[0] == "sub") {
		var newe = document.createElement("h2");
		var newt = type[1];
		document.body.appendChild(newe);
		newe.innerHTML = newt;
	} else if(type[0] == "image") {
		var newe = document.createElement("img");
		newe.src = type[1];
		document.body.appendChild(newe);

		styleModif("image");
	} else {
		var newt = c_ + "<br>";
		document.body.innerHTML += newt;
	}

	document.body.innerHTML += "<br>";
}