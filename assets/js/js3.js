
/*
Crear definir un arreglo tema libre
Rellenarlo dinámicamente
Buscar métodos para eliminar elementos en mitad del arreglo



let series=["CasaPapel","Sabrina","Elite","Atypical","Orange"];
let res= true;
let lista=[];

if(res){
    let serie=prompt("Digite una serie");
    lista.push(serie);
    res=confirm("Desea ingresar otra serie");
}{
    let serie=prompt("Elija que valor quiere eliminar");
    series.splice(index, 1);
}

console.log(lista);
*/

let series = ["CasaPapel", "Sabrina", "Elite", "Atypical"];
let res = true;

console.log(series);


if (res) {
    let serie = prompt("Digite una serie");
    series.push(serie);
    res = confirm("Desea ingresar otra serie");

    let index = prompt("Elija que valor quiere eliminar");
    series.splice(index, 1);
    console.log(series);

}