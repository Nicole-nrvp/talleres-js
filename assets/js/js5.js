console.log("Trabajo de NICOLE ROMERO");
/*
let nombre = prompt("Digite su nombre");
let apellido = prompt("Digite su apellido");

console.log("Bienvenid@ " + nombre + " " + apellido );
*/
function longitud() {
    //Traer el id a js 
    let palabra=document.getElementById("palabra").value;
    //Determinar la cantidad de caracteres en String es propiedad LENGTH
    alert(`La logitud de la palabra ingresada es ${palabra.length}`);
    console.log("Palabra es " + palabra );
}

function minuscula(){
    let palabra=document.getElementById("palabra").value;
    alert(`La palabra minuscula es ${palabra.toLowerCase()}`);
    console.log("Palabra es " + palabra );
}

function mayuscula(){
    let palabra=document.getElementById("palabra").value;
    alert(`La palabra mayuscula es ${palabra.toUpperCase()}`);
    console.log("Palabra es " + palabra );
}

const cl1= document.querySelector(".miclase");
    let text=
    `<h6>
    Gracias por participar
    </h6>`
    //uso de inner html 
    cl1.innerHTML=text;

/**var textoMayusculas="ALFABETO"
document.write(textoMayusculas.toLowerCase())

var cadena = new String("Sin León no hubiera España");
cadena = cadena.toLowerCase();
// Imprime: "sin león no hubiera españa"


toLowerCase() para convertir a «minúsculas», y 
toUpperCase() para convertir a «mayúsculas»

var texto = prompt("Introduce el texto");
document.write(texto.toLowerCase());*/
