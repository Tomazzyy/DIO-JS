function escrevaMeuNome(nome){
   return "Meu nome é " + nome;

}


function definirIdade(idade){
    if (idade >= 18){
        console.log( escrevaMeuNome("Tomazz") + " e eu sou maior de idade. \n Tenho: " + idade + " anos");
    }
    else {
        console.log ( escrevaMeuNome("Tomazz") + " e eu sou menor de idade! \n Tenho: " + idade +" anos");
    }
    
}
definirIdade(10);


