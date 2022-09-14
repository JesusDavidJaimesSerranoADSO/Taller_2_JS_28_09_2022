addEventListener("DOMContentLoaded", ()=>{

    //Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos.
    let caudal = Number(prompt(`caudal en litros por segundos`,53));
    let radio = Number(prompt(`ingrese el radio de la mngera`,8));
    let altura = Number(prompt(`ingrese la altura del tanque`,300));
    let vmen = Math.PI * (radio ** 2) * altura
    let res = vmen / caudal
    console.log(`el tiempo estimado para el llenado de un depósito es de ${res}`);

})