addEventListener("DOMContentLoaded", ()=>{

    // Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
    // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
    // sobran $91000. ¿cuánto dinero tenía?
    let llaves = Number(prompt(`precio de la llave por unidad`,11500));
    let bomba = Number(prompt(`precio de la bomba`,1168000));
    let pernos = Number(prompt(`precio del perno por unidad`,87000));
    alert(`dinero sobrante 91000`)
    let total = (llaves * 5) + bomba + (pernos * 3) + 91000
    
    console.log(`el dueño de la obra tenia $${total}`);

})