addEventListener("DOMContentLoaded", ()=>{

//     Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
// descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
// de la compra.
    let valor1 = Number(prompt(`ingrese el valor del punto 1`,5000));
    let valor2 = Number(prompt(`ingrese el valor del punto 2`,8000));
    let valor3 = Number(prompt(`ingrese el valor del punto 3`,3000));
    let valor4 = Number(prompt(`ingrese el valor del punto 4`,9000))
    let valor5 = Number(prompt(`ingrese el valor del punto 5`,3000));
    let total = (valor1 - (valor1 * 0,05)) + (valor2 - (valor2 * 0,05)) + (valor3) + (valor4 - (valor4 * 0,02)) + (valor5 - (valor5 * 0,02))
    
    console.log(`el valor del 1 producto es de ${valor1 - (valor1 * 0,05)}`);
    console.log(`el valor del 2 producto es de ${valor2 - (valor2 * 0,05)}`);
    console.log(`el valor del 3 producto es de ${valor3}`);
    console.log(`el valor del 4 producto es de ${valor4 - (valor4 * 0,02)}`);
    console.log(`el valor del 5 producto es de ${valor5 - (valor5 * 0,02)}`);
    console.log(`el valor total de la compra es de ${total}`);

})