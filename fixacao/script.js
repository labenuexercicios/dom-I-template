const para = document.getElementById('paragrafo');
para.innerHTML = 'Olá humanos!';

const texto = document.getElementById('texto');

function digitar(){
    console.log(texto.value);
}

function trocar(){
    para.innerHTML = texto.value;    
}