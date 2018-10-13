var hamburgerMenu = document.getElementsByTagName('bsubc')[0];
var hamburgerContent = document.getElementsByTagName('asubc')[0];
var hamburgerMenu_active = 0;
hamburgerMenu.addEventListener("click", function () {
	if (hamburgerMenu_active == 0) {
		hamburgerContent.style.display = "initial";
	} else {
		hamburgerContent.style.display = "none";
	}

	hamburgerMenu_active = (++hamburgerMenu_active) % 2;
});

var materie = document.getElementById('materie');
var page_layout = ["morfologia", "morfologia-parti de vorbire", "morfologia-substantiv", "morfologia-articol", "morfologia-adjectiv", "morfologia-pronume", "morfologia-numeral", "morfologia-verb", "morfologia-adverb", "morfologia-prepozitie", "morfologia-conjunctie", "morfologia-interjectie", "sintaxa", "sintaxa-parti de propozitie", "sintaxa-subiect", "sintaxa-predicat", "sintaxa-atribut", "sintaxa-complement", "sintaxa frazei", "sintaxa frazei-alcatuirea frazei", "fonetica", "fonetica-fonetica", ""];

var mem = "morfologia";
for(i = 0; i < page_layout.length; i++) {
	var t = page_layout[i].split("-"), link = page_layout[i].replace(/ /g, "-") + ".html";
	if(t.length == 1) {
		mem = t[0];

		materie.innerHTML += "<br><subtitlu>" + capF(mem) + "</subtitlu><br>";
	} else {
		materie.innerHTML += "<li><a href='" + link + "'>" + capF(t[1]) + "</a></li>";
	}
}

document.body.innerHTML = document.body.innerHTML.replace(/a1/g, "&#259;");
document.body.innerHTML = document.body.innerHTML.replace(/a2/g, "&#226;");
document.body.innerHTML = document.body.innerHTML.replace(/i1/g, "&#238;");
document.body.innerHTML = document.body.innerHTML.replace(/s1/g, "&#351;");
document.body.innerHTML = document.body.innerHTML.replace(/t1/g, "&#355;");
document.body.innerHTML = document.body.innerHTML.replace(/A1/g, "&#258;");
document.body.innerHTML = document.body.innerHTML.replace(/A2/g, "&#194;");
document.body.innerHTML = document.body.innerHTML.replace(/I1/g, "&#206;");
document.body.innerHTML = document.body.innerHTML.replace(/S1/g, "&#350;");
document.body.innerHTML = document.body.innerHTML.replace(/T1/g, "&#354;");

function capF(x) {
	return x.charAt(0).toUpperCase() + x.substr(1)
}

function offsetAnchor() {
	if(location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 100);
	}
}

window.addEventListener("hashchange", offsetAnchor);
window.setTimeout(offsetAnchor, 1);