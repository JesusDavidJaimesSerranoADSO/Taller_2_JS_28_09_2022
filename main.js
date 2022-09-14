addEventListener("DOMContentLoaded", ()=>{

    // En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial
    // de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
    // nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para
    // hacer el bizcocho es
    let cacao = Number(prompt(`ingrese la cantidad de cacao para la receta`,20));
    let total = 100 * (cacao / 10)
    
    console.log(`la cantidad de harina que necesitas es ${total} gramos`);

})