function calcularImc(peso, altura) {
    return peso / (altura * altura);
  }
  

  function classificarImc(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso ';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'Obesidade';
    } else if (imc >= 40) {
      return 'Obesidade Grave';
    }
  }


  function main( ){
    let peso = 90;
    let altura = 1.68;
    let imc = (calcularImc = peso / (altura * altura));
    console.log(classificarImc(imc));
    
  }
  main ();
 
