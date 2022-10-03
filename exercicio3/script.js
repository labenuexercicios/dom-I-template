let i = 0;

const contar = document.getElementById("contador")


function contador(){
    i++;
    contar.innerHTML = `\nVocê clicou ${i} vezes!`
    console.log(`Você clicou ${i} vezes!`)
}