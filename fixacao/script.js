const ler = document.getElementById("paragrafo")
console.log(ler.innerHTML)

function imprimir(texto){
    ler.innerHTML = texto;
}

function imprimeLog(texto){
    console.log(texto)
}