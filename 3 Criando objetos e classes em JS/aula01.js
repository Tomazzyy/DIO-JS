const  pessoa = {
    nome: "vinicius Tomaz",
    idade: 18,

    descrever: function (){
        //o this assume o objeto
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    } 
}; //objeto é uma coleção dinâmica de chave e valor
//vinicius é uma coleção de dados

//vinicius.altura = 1.70; //vinicius recebe altura 170
//delete vinicius.nome //deleto o dado 
//console.log(vinicius);
//pessoa.idade = 30;
//pessoa.descrever();
//dentro desses valores podemos utilizar funções, pois no final das contas acaba virando um objeto
pessoa ['nome'] = 'teste';
console.log(pessoa)