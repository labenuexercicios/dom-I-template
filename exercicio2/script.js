const nome = document.getElementById("nome")
nome.value = 'LucasDev'

console.log(nome.valeu)

const endereco = document.getElementById("endereco")
endereco.value = 'Curitiba, Rua dos Antonios, N°0'

console.log(endereco.value)


const email = document.getElementById("email")
email.value = 'lucasdev.@hotmail.com'

console.log(email.value)

const cadastro = {Nome: nome.value, Endereço: endereco.value, Email: email.value}
console.log(cadastro)


const limpainputs = () => {
    nome.value = ""
    endereco.value = ""
    email.value = ""
}
