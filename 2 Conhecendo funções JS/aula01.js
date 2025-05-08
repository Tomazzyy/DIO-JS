
//() => parametro da função.
function incrementar(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo; 
}
console.log(incrementar(90, 10));
