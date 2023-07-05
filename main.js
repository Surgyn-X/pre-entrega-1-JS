/*leemos las entradas de las opciones */
const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");


/*Resultado */

const resultadoJuego = document.getElementById("resultado");

//inicia el juego
piedraOpcion.addEventListener("click", () =>{
    iniciarJuego('piedra');
});

papelOpcion.addEventListener("click", () =>{
    iniciarJuego('papel');
});

tijeraOpcion.addEventListener("click", () =>{
    iniciarJuego('tijera');
});

function iniciarJuego(opcion){
    //movimiento pc
    const movPC = movimientoPc();
    //movimiento usuario
    const movUsuario = opcion;
    //comparacion de movimiento
    const comp = compracion(movPC, movUsuario);
    //resultado
    if (comp ==1) {
        resultadoJuego.innerHTML = " Elegiste "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='ganador'>Ganaste  </span>";
    }
    if (comp ==2) {
        resultadoJuego.innerHTML = " Elegiste "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='perdedor'>Perdiste  </span>";
    }
    if (comp ==3) {
        resultadoJuego.innerHTML = " Elegiste "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='empate'>Empate </span>";
    }
}

function movimientoPc(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random()*3);
    const mov = opciones[random];
    return (mov);
}

function compracion(pc, usuario){
    switch (usuario+pc){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //pierde
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; //empata
    }
}