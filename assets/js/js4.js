//////////////////////////////////////////////////////////////
/*Simular una caja registradura
Función anónima que calcule el iva %19 de la compra
Función flecha que calcule el subtotal restando el total de la compra y el iva
2 posiciones decimales en el resultado
*/


///////////////////////////////////////////////////////////////////

let iva = ($num1) => {
    let total1 = $num1 * 0.19;
    let total = $num1 - total1;
    return total;
}

function Total($num1, $num2) {

    return $num1 + $num2;
}

/*
let res = true;
let cumDinero = 0;
let cumIba = 0;

while (res) {
    let dinero = parseInt(prompt("Dijite el dinero que desea guardar"));
    cumDinero = Total(cumDinero, dinero);
    cumIba = iva(cumDinero);

    console.log(("Su dinero sin iva es: " + cumDinero + " " + "Su dinero con iva es: " + cumIba));
    res = confirm("Desea ingresar mas dinero?")
    if (res === true) {
        continue;
    } else {
        break;
    }

}*/

/*/////////////////////////////////////////////////////////////////*/
let res = true;
let cumDinero = 0;
let cumIva = 0;

document.getElementById("btn").addEventListener("click", function () {

    if (res) {
        din = document.getElementById("dinero").value;
        cumDinero = Total(cumDinero, parseInt(din));
        cumIva = iva(cumDinero);
        confirm("Desea ingresar mas dinero?");
        
    } 
    else{
        alert("Ingrese el valor de la compra");
    }

    const cl1= document.querySelector(".miclase");
    let text=
    `<h6>Su dinero sin iva es ${cumDinero} su dinero con iva es ${cumIva} </h6>`
    //uso de inner html 
    cl1.innerHTML=text;

    console.log(("Su dinero sin iva es: " + cumDinero + " " + "Su dinero con iva es: " + cumIva));
   
})
/*/////////////////////////////////////////////////////////////////*/
