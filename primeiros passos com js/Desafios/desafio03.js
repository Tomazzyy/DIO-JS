const  nota1 = 1
const  nota2 = 1
const  nota3 = 1

let media = nota1 + nota2 + nota3 / 3

if (media < 5) {
    console.log("Reprovado")
}

else if ( media >= 5 && media < 7) {
    console.log("Recuperação")
}

else {
    console.log("Aprovado")
}