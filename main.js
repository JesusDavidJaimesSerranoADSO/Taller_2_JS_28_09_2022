addEventListener("DOMContentLoaded", ()=>{

    // Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿ Cuántos Kg
    // transporta ?
    let caja = Number(prompt(`ingrese la cantidad de cajas`,25));
    let peso = Number(prompt(`ingrese el peso de cada caja`,748));
    let total = caja * peso
    
    console.log(`el peso total que transporta es ${total} Kg`);

})