const precoCombustivel = 5.40;
const gastoPorKm = 10;
const distancia = 100;
 
const litrosConsumidos = (distancia / gastoPorKm);
const valorGasto = (litrosConsumidos * precoCombustivel);
console.log('O valor gasto na viagem é de R$ ');
console.log(valorGasto);