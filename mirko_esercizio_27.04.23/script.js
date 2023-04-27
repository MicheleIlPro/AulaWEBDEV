// trovato su internet ed adattato al codice
function cambiaColore(el) {
    el.style.color = generaColore();
    setTimeout(function() {
        el.style.color = 'black';
    }, 1000); /* dopo 1 secondo torna al colore originale */
}

function generaColore() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


