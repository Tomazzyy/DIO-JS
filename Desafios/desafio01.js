const precoCombustivel = 5.40;
const kmPorLitros = 13;
const distanciaEmKm = 100;
 
const litrosConsumidos = (distanciaEmKm / kmPorLitros);
const valorGasto = (litrosConsumidos * precoCombustivel);
console.log('O valor gasto na viagem é de R$ ');
console.log(valorGasto.toFixed(2)); //arredonda um valor para duas casas decimais.