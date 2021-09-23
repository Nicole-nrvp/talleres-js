document.addEventListener('DOMContentLoaded', () =>{

    
    const alert = document.getElementById('alert');
    const btn = document.getElementById('btn');
 
    function llamadaFijo(minutos){
        return minutos * 150;
    }
 
    function llamadaCelular(minutos){
        return minutos * 250;
    }
 
    btn.addEventListener('click', () =>{
     const  minutos = document.getElementById('minutos').value;
     const opcion = document.getElementById('opcion').value;
 
     if(opcion === '1'){
         alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-green-800 "> 
                      El valor de la llamada es de ${llamadaFijo(minutos)} pesos
             </span>
            `;
     }else if(opcion === '2'){
         alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-green-800 "> 
                      El valor de  la llamada es de ${llamadaCelular(minutos)} pesos
             </span>
            `;
     }else{
         alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-green-800 "> 
                      Error en la operación
             </span>
            `;
     }
  
    });
 });