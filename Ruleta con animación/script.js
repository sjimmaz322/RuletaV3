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



    sound.play();


    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";


    sound.onended = () => {
        sound.remove();
        document.querySelector('#prueba').value = result;
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
    // Añadir el nombre a la lista
    const nombre = input.value;
    participantes.push(nombre);
    const itemLista = document.createElement('li');
    itemLista.style.fontSize = "25px";
    itemLista.textContent = nombre;
    lista.appendChild(itemLista);

    // Vaciar el campo de texto
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


