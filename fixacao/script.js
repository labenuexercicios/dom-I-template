// 1. A partir do template, crie um código que leia o valor innerHTML 
// do elemento P que está na página.

let texto = document.getElementById("paragrafo")
console.log(texto.innerHTML)

// 2.Depois disso, Utilize o input que está na página para digitar um novo valor, e a cada vez que uma tecla for pressionada, imprima no console o valor atual do input.

function imprimirTextoDigitado(){
    let textoDoInput = document.getElementById("texto")
    console.log(textoDoInput.value)
}

// 3. Crie um botão, e neste botão adicione um evento que, ao ser clicado, substitua o valor do elemento P pelo valor que está no input.

function mudarElementoP() {
    //valor do elemento p = valor que está no input
    texto.innerHTML = document.getElementById("texto").value
}