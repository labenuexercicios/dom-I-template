const valordop = document.getElementById("paragrafo")

console.log(valordop.innerHTML)

const imprimivalortexto = () => {
    console.log(document.getElementById("texto").value)
}

//O innerhtml faz com que le só o conteudo.

const alteravalor = () => {
    valordop.innerHTML = document.getElementById("texto").value
}