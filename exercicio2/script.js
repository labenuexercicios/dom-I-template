const valordoinputnome = document.getElementById("nome")

const valordoinputendereco = document.getElementById("endereco")

const valordoinputemail = document.getElementById("email")

console.log(valordoinputnome.value)
console.log(valordoinputendereco.value)
console.log(valordoinputemail.value)

//Outra forma é usando objeto

const cadastro = {nome: nome.value, endereco: endereco.value, email: email.value}

console.log(cadastro)

// Limpa os elementos(value)

const limpainput = () =>{
    nome.value = ""
    endereco.value = ""
    email.value = ""
}
