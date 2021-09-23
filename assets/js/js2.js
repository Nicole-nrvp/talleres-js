/**Realice un programa que simule una alcancía:

❑ El programa debe solicitar al usuario una cantidad de dinero a ingresar.
❑ El usuario podrá decidir si desea ingresar más dinero o no
❑ Cada vez que ingrese dinero, debe mostrarle cuanto dinero ingresó y qué valor lleva ahorrado.
❑ En caso de que no desee ingresar más dinero, deberá mostrarle la
cantidad de veces que ingresó dinero y el valor total ahorrado. */

/**
let res = true;
let cumDinero = 0;

while (res) {
    let dinero = prompt("Dijite el dinero que desea guardar");
    cumDinero = cumDinero + parseInt(dinero);
    res = confirm("¿Quiere seguir ahorrando?");

}
console.log(`El dinero ahorrado que usted tiene es ${cumDinero}`);

*/
let res = true;
let cumDinero = 0;

//RETO 2 ----
document.getElementById("btn").addEventListener("click", function () {

    if (res) {
        din = document.getElementById("dinero").value;
        cumDinero = cumDinero + parseInt(din);
        confirm("Quiere seguir ahorrando");
        
    } 
    else{
        alert("Ingrese la cantidad a ahorrar");
    }

    const cl1= document.querySelector(".miclase");
    let text=
    `<h6>El dinero ahorrado que usted tiene es  ${cumDinero} </h6>`
    //uso de inner html 
    cl1.innerHTML=text;

    console.log(`El dinero ahorrado que usted tiene es ${cumDinero}`);
   
})

//ACCEDER A PROPIEDADES DE TEXTO