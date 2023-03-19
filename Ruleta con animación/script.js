const roulette = document.querySelector("#roulette");
const spinButton = document.querySelector("#spin")
const resetButton = document.querySelector("#reset")

const maxSpins = 7;
const minSpins = 3;

const maxDegrees = 360;
const minDegrees = 15;



const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}


const sound = new Audio("buttonSound.wav");

spinButton.addEventListener("click", () => {
    let result;
    let prueba;

    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;

    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;

    if (degrees >= 0 && degrees < 30) {
        result = 12;
    } else if (degrees >= 30 && degrees < 60) {
        result = 11;
    } else if (degrees >= 60 && degrees < 90) {
        result = 10;
    } else if (degrees >= 90 && degrees < 120) {
        result = 9;
    } else if (degrees >= 120 && degrees < 150) {
        result = 8;
    } else if (degrees >= 150 && degrees < 180) {
        result = 7;
    } else if (degrees >= 180 && degrees < 210) {
        result = 6;
    } else if (degrees >= 210 && degrees < 240) {
        result = 5;
    } else if (degrees >= 240 && degrees < 270) {
        result = 4;
    } else if (degrees >= 270 && degrees < 300) {
        result = 3;
    } else if (degrees >= 300 && degrees < 330) {
        result = 2;
    } else {
        result = 1;
    }

    const numPrueba = getRandomNumber(1, 10);

    // ROJO - BESAR
    if (result == 1 && numPrueba == 1) {
        prueba = "Dar un beso en la mejilla.";
    } else if (result == 1 && numPrueba == 2) {
        prueba = "Dar un beso en la mano."
    } else if (result == 1 && numPrueba == 3) {
        prueba = "Dar un beso en la frente."
    } else if (result == 1 && numPrueba == 4) {
        prueba = "Dar un beso en la barriga."
    } else if (result == 1 && numPrueba == 5) {
        prueba = "Dar un beso en el cuello."
    } else if (result == 1 && numPrueba == 6) {
        prueba = "Dar un beso donde el jugador quiera."
    } else if (result == 1 && numPrueba == 7) {
        prueba = "Dar un beso en los labios."
    } else if (result == 1 && numPrueba == 8) {
        prueba = "Dar un beso en las nalgas."
    } else if (result == 1 && numPrueba == 9) {
        prueba = "Dar un beso en el pecho."
    } else if (result == 1 && numPrueba == 10) {
        prueba = "Dar un beso en el interior del muslo."
        // VERDE - MASAJEAR
    } else if (result == 2 && numPrueba == 1) {
        prueba = "Masajea sensualmente el pelo.";
    } else if (result == 2 && numPrueba == 2) {
        prueba = "Masajea sensualmente la cara."
    } else if (result == 2 && numPrueba == 3) {
        prueba = "Masajea sensualmente el cuello."
    } else if (result == 2 && numPrueba == 4) {
        prueba = "Masajea sensualmente la espalda."
    } else if (result == 2 && numPrueba == 5) {
        prueba = "Masajea sensualmente el pecho."
    } else if (result == 2 && numPrueba == 6) {
        prueba = "Masajea sensualmente las piernas."
    } else if (result == 2 && numPrueba == 7) {
        prueba = "Masajea sensualmente los brazos."
    } else if (result == 2 && numPrueba == 8) {
        prueba = "Masajea sensualmente las nalgas."
    } else if (result == 2 && numPrueba == 9) {
        prueba = "Masajea sensualmente lo que quieras."
    } else if (result == 2 && numPrueba == 10) {
        prueba = "Masaje sensualmente la entrepierna."
        // AZUL - POSTURA SEXUAL
    } else if (result == 3 && numPrueba == 1) {
        prueba = "Postura sexual: El 69.";
    } else if (result == 3 && numPrueba == 2) {
        prueba = "Postura sexual: El misionero."
    } else if (result == 3 && numPrueba == 3) {
        prueba = "Postura sexual: Doggy Style. (El perrito)"
    } else if (result == 3 && numPrueba == 4) {
        prueba = "Postura sexual: La amazona."
    } else if (result == 3 && numPrueba == 5) {
        prueba = "Postura sexual: La cucharita."
    } else if (result == 3 && numPrueba == 6) {
        prueba = "Postura sexual: Duro contra el muro."
    } else if (result == 3 && numPrueba == 7) {
        prueba = "Postura sexual: La carretilla."
    } else if (result == 3 && numPrueba == 8) {
        prueba = "Postura sexual: Sexo Oral (A elección del jugador)"
    } else if (result == 3 && numPrueba == 9) {
        prueba = "Postura sexual: El cabecero. (Alguien se va a sentar en la cara de otro alguien)"
    } else if (result == 3 && numPrueba == 10) {
        prueba = "Postura sexual: A elección del jugador."
        // AMARILLO - MOSTRAR
    } else if (result == 4 && numPrueba == 1) {
        prueba = "Hora de enseñar: La barriga.";
    } else if (result == 4 && numPrueba == 2) {
        prueba = "Hora de enseñar: El pecho."
    } else if (result == 4 && numPrueba == 3) {
        prueba = "Hora de enseñar: Las nalgas"
    } else if (result == 4 && numPrueba == 4) {
        prueba = "Hora de enseñar: Los pies"
    } else if (result == 4 && numPrueba == 5) {
        prueba = "Hora de enseñar: Las piernas."
    } else if (result == 4 && numPrueba == 6) {
        prueba = "Hora de enseñar: Enséñalo todo"
    } else if (result == 4 && numPrueba == 7) {
        prueba = "Hora de enseñar: No tienes que enseñar nada. (Te libraste)"
    } else if (result == 4 && numPrueba == 8) {
        prueba = "Hora de enseñar: El pubis (solo el pubis)"
    } else if (result == 4 && numPrueba == 9) {
        prueba = "Hora de enseñar: Los pezones"
    } else if (result == 4 && numPrueba == 10) {
        prueba = "Hora de enseñar: Lo que quiera enseñar el jugador."
        // MARRÓN - CAMBIO DE ROPA
    } else if (result == 5 && numPrueba == 1) {
        prueba = "Intercambia tu sudadera/chaqueta.";
    } else if (result == 5 && numPrueba == 2) {
        prueba = "Intercambia tu camisa/camiseta."
    } else if (result == 5 && numPrueba == 3) {
        prueba = "Intercambia tu pantalón/falda."
    } else if (result == 5 && numPrueba == 4) {
        prueba = "Intercambia tus calcetines/medias."
    } else if (result == 5 && numPrueba == 5) {
        prueba = "Intercambia tu conjunto entero."
    } else if (result == 5 && numPrueba == 6) {
        prueba = "Intercambia... nada, te queda bien tu modelito."
    } else if (result == 5 && numPrueba == 7) {
        prueba = "Intercambia la prenda que tú quieras."
    } else if (result == 5 && numPrueba == 8) {
        prueba = "Intercambia tu camiseta/camisa."
    } else if (result == 5 && numPrueba == 9) {
        prueba = "Intercambia tu falda/pantalón."
    } else if (result == 5 && numPrueba == 10) {
        prueba = "Intercambia la prenda que tú quieras."
        // ROSA - MORDER
    } else if (result == 6 && numPrueba == 1) {
        prueba = "Muerde una mejilla.";
    } else if (result == 6 && numPrueba == 2) {
        prueba = "Muerde los labios."
    } else if (result == 6 && numPrueba == 3) {
        prueba = "Muerde en el cuello."
    } else if (result == 6 && numPrueba == 4) {
        prueba = "Muerde un brazo."
    } else if (result == 6 && numPrueba == 5) {
        prueba = "Muerde un muslo."
    } else if (result == 6 && numPrueba == 6) {
        prueba = "Muerde el pecho."
    } else if (result == 6 && numPrueba == 7) {
        prueba = "Muerde la barriga."
    } else if (result == 6 && numPrueba == 8) {
        prueba = "Muerde lo que quieras."
    } else if (result == 6 && numPrueba == 9) {
        prueba = "Muerde una nalga... o las dos."
    } else if (result == 6 && numPrueba == 10) {
        prueba = "Muerde el pubis."
        // NEGRO - QUITARSE
    } else if (result == 7 && numPrueba == 1) {
        prueba = "Se va: Tu sudadera/chaqueta.";
    } else if (result == 7 && numPrueba == 2) {
        prueba = "Se va: Tu camiseta/camisa."
    } else if (result == 7 && numPrueba == 3) {
        prueba = "Se va: Tu pantalón/falda."
    } else if (result == 7 && numPrueba == 4) {
        prueba = "Se va: Tus zapatillas."
    } else if (result == 7 && numPrueba == 5) {
        prueba = "Se va: Tus calcetines."
    } else if (result == 7 && numPrueba == 6) {
        prueba = "Se va: Todo de cintura para arriba."
    } else if (result == 7 && numPrueba == 7) {
        prueba = "Se va: Todo"
    } else if (result == 7 && numPrueba == 8) {
        prueba = "Se va: Nada, todo se queda."
    } else if (result == 7 && numPrueba == 9) {
        prueba = "Se va: Lo que quieras quitarte."
    } else if (result == 7 && numPrueba == 10) {
        prueba = "Se va: Todo de cintura para abajo."
        // NARANJA - AZOTAR
    } else if (result == 8 && numPrueba == 1) {
        prueba = "Da un azote en la cara.";
    } else if (result == 8 && numPrueba == 2) {
        prueba = "Da un azote en la espalda."
    } else if (result == 8 && numPrueba == 3) {
        prueba = "Da un azote en las nalgas."
    } else if (result == 8 && numPrueba == 4) {
        prueba = "Da un azote en el pecho."
    } else if (result == 8 && numPrueba == 5) {
        prueba = "Da un azote en muslo."
    } else if (result == 8 && numPrueba == 6) {
        prueba = "Da un azote donde quieras darlo."
    } else if (result == 8 && numPrueba == 7) {
        prueba = "Da un azote en ningún lado, se haga la paz."
    } else if (result == 8 && numPrueba == 8) {
        prueba = "Da un azote en la barriga."
    } else if (result == 8 && numPrueba == 9) {
        prueba = "Da un azote en el cuello."
    } else if (result == 8 && numPrueba == 10) {
        prueba = "Da un azote en las manos."
        // BLANCO - LAMER
    } else if (result == 9 && numPrueba == 1) {
        prueba = "Hay que lamer: El cuello.";
    } else if (result == 9 && numPrueba == 2) {
        prueba = "Hay que lamer: La axila."
    } else if (result == 9 && numPrueba == 3) {
        prueba = "Hay que lamer: Un pie."
    } else if (result == 9 && numPrueba == 4) {
        prueba = "Hay que lamer: La barriga."
    } else if (result == 9 && numPrueba == 5) {
        prueba = "Hay que lamer: El pecho."
    } else if (result == 9 && numPrueba == 6) {
        prueba = "Hay que lamer: Un pezón."
    } else if (result == 9 && numPrueba == 7) {
        prueba = "Hay que lamer lo que más apetezca."
    } else if (result == 9 && numPrueba == 8) {
        prueba = "No hay nada que lamer."
    } else if (result == 9 && numPrueba == 9) {
        prueba = "Hay que lamer: Una nalga."
    } else if (result == 9 && numPrueba == 10) {
        prueba = "Hay que lamer: La carita."
        // LIMA -

        // MORADO - 

        // GRIS -
        
    } else {
        prueba = "Undefined at the moment"
    }


    sound.play();


    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";


    sound.onended = () => {
        sound.remove();
        document.querySelector('#prueba').value = prueba.toUpperCase();
    };

});



resetButton.addEventListener("click", () => {
    roulette.style.transform = "rotate(0deg)";
    roulette.style.transitionDuration = "1.5s";
    spinButton.style.display = "inline-block";
    resetButton.style.display = "none";
});

const participantes = [];

const form = document.querySelector('form');
const input = document.querySelector('#nombre');
const lista = document.querySelector('#lista-participantes');
const botonAgregar = document.querySelector('#agregar');

botonAgregar.addEventListener('click', () => {

    const nombre = input.value;
    participantes.push(nombre);
    const itemLista = document.createElement('li');
    itemLista.style.fontSize = "25px";
    itemLista.textContent = nombre;
    lista.appendChild(itemLista);

    input.value = '';
});

const participantes2 = [];

const jugadores = participantes;
let index = 0;

function mostrarNombres() {
    if (index >= jugadores.length) {
        index = 0;
    }
    const nombre = jugadores[index];
    document.querySelector('#recorrer').value = nombre;
    const indiceAleatorio = Math.floor(Math.random() * jugadores.length);
    const nombreAleatorio = jugadores[indiceAleatorio];
    document.querySelector('#aleatorio').value = nombreAleatorio;
    index++;
}


