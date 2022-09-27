let paragrafo = document.getElementById('paragrafo');
console.log(paragrafo.innerHTML);

let texto = document.getElementById('texto');

// Muda o texto do parágrafo ao clicar no botão;
// Precisa adicionar a função ao "onclick" da tag do botão no HTML;
function changeP() {
    paragrafo.innerHTML = texto.value;
    texto.value = ''
}

// Imprime no console toda tecla que é pressionada;
// É preciso adicionar a função ao "onkeydown" da tag HTML;
function lidarInput() {
    console.log(texto.value);
}