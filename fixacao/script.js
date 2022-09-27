let frase = document.getElementById('paragrafo')

let input = document.getElementById('texto')

function nomeUsuario() {
    frase.innerHTML = frase.innerHTML+" "+input.value // Concatenação de espaço na frase
    // console.log(`Olá, ${frase}!`)
}