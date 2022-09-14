addEventListener("DOMContentLoaded", ()=>{

    // Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    // por favor utilizar funciones matemáticas de Python para ello
    let valorx = Number(prompt(`ingrese el valor del punto x1`,5));
    let valory = Number(prompt(`ingrese el valor del punto y1`,8));
    let valorx2 = Number(prompt(`ingrese el valor del punto x2`,3));
    let valory2 = Number(prompt(`ingrese el valor del punto y2`,9));
    let sbase = ((valorx2-valorx)**2 + (valory2-valory)**2)
    

    console.log(`la distancia entre dos puntos es de ${sbase}`);

})