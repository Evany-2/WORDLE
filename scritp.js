let intentos = 6;
let diccionario = [
    "APPLE", 
    "HURLS", 
    "WINGS", 
    "YOUTH" ,
    "MAUSE",
    "SMILE",
    "HAUSE",
];
let palabra = obtenerPalabra(diccionario);  
let button = document.getElementById("guess-button");

console.log("random", Math.floor(Math.random()+ lista.length))
let indice = Math.floor(Math.random() + lista.length)

let Verde ="#79b851";
let Amarillo = "#f3c237";
let Gris = "#a4aec4";

button.addEventListener("Click",intentar);


function obtenerPalabra(diccionario){
    let max = diccionario.length-1
    let min = 0;
    let i = Math.random() * (6 - 0 + 1) + min;
    palabraAleatoria= (diccionario[3]);
    return  palabraAleatoria;
}

function intentar(){
    const INTENTO = leerIntento();

    if (INTENTO[i] === palabra[i]){
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'green';
        terminar("<h1>GANASTE!😀</h1>");
        return;
    }
const GRID = document.getElementById("grid")
const ROW = document.createElement("div");
ROW.className = "row";
console.log(GRID);
 for (let i in INTENTO){
    const SPAN = document.createElement("span");
        SPAN.className = "letter";
    let color;
    let letra = INTENTO[i];
    if(letra == palabra[i]){
        color = "Verde";
    } else if (palabra.includes(INTENTO[i])){
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = "yellow";
        color = "Amarillo";
    } else {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = "grey";  
        color ="Gris";
    }
      console.log(palabra[i], letra , color);
    }
    ROW.appendChild(SPAN)

intentos--;
if (intentos==0){
    terminar("<h1>PERDISTE!😖</h1>");
}
 }

 function terminar(mensaje){
    const input = document.getElementById("guess-input");
    input.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
    console.log(input);
 }

 function leerIntento(){
    const INPUT = document.getElementById("guess-input");
    let intento = INPUT.value;
    return intento.toUpperCase();
 }

 window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
