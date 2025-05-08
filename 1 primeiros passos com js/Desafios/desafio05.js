const preco = 100;
let forma = 4;

if (forma === 1 )
    {
   let precoFinal =  preco * 0.9;
    console.log(precoFinal.toFixed(2));
}
else if (forma === 2 )
    {
    let precoFinal = preco * 0.85;
    console.log(precoFinal.toFixed(2));
   
}

else if (forma === 3 )
    {
    let precoFinal = preco
    console.log(precoFinal.toFixed(2))
}

else if(forma === 4 ){
    let precoFinal = preco * 1.10
    console.log(precoFinal.toFixed(2))
}