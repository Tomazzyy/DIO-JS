let peso = 90
let altura = 1.75

let imc = peso /(altura * altura)

if (imc < 18.5){
    console.log("Abaixo do peso ")
}

else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal")

}

else if (imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso")
}

else if (imc >= 30 && imc <= 39.9){
    console.log("Obesidade")
}

else if (imc >= 40 ){
    console.log("Obesidade Grave")
}