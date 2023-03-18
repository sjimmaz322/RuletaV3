const roulette = document.querySelector("#roulette");
const spinButton = document.querySelector("#spin")
const resetButton = document.querySelector("#reset")

const maxSpins = 10;
const minSpins = 1;

const maxDegrees = 360;
const minDegrees = 15;

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}


const sound = new Audio("buttonSound.wav");

spinButton.addEventListener("click", () => {

    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;

    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;


    sound.play();


    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";


    sound.onended = () => {
        sound.remove();
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