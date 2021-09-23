document.addEventListener('DOMContentLoaded', () =>{

    const alert = document.getElementById('alert');
     const btn = document.getElementById('btn');
     
     console.log(unidadT);
     console.log(unidadC);
 
     function convertirCelsiusFarenheite(celcius){
          return  ((celcius * 1.8) + 32); 
     }
   
     function convertirCelsiusKelvin(celcius){
         return  celcius + 273.15;
     }
 
     // farenheite
 
     function convertirFarenheiteCelsius(farenheite){
         return  (farenheite-32) * 1.8;
     }
 
     function convertirFarenheiteKelvin(farenheite){
         return ((farenheite-32) * 1.8) + 273.15;
     }
 
     //kelvin 
 
     function convertirKelvinCelsius(kelvin){
         return kelvin - 273.15;
     }
 
     function convertirKelvinFarenheite(kelvin){
         return ((kelvin -273.15) * 1.8) +32;
     }
     
 
     //evento 
     btn.addEventListener('click', () =>{
         const  temperature = document.getElementById('temperature').value;
         const unidadT = document.getElementById('unidadT').value;
         const unidadC = document.getElementById('unidadC').value;
 
        //condicional 
         if(unidadT === '1' && unidadC === '2'){
             
             alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-dark"> 
                      La conversión de celsius a farenheite es de ${convertirCelsiusFarenheite(temperature)}
             </span>
            `;
     
         }else if(unidadT === '1' && unidadC === '3'){
             
             alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-dark "> 
                      La conversión de celsius a Kelvin es de ${convertirCelsiusKelvin(temperature)}
             </span>
            `;
     
         }else if(unidadT === '2' && unidadC === '1'){
             
             alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-dark"> 
                      La conversión de Farenheite a celsius es de ${convertirFarenheiteCelsius(temperature)}
             </span>
            `;
     
         }else if(unidadT === '2' && unidadC === '3'){
             
             alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-dark"> 
                      La conversión de Farenheite a Kelvin  es de ${convertirFarenheiteKelvin(temperature)}
             </span>
             `;
     
         }else if(unidadT === '3' && unidadC === '1'){
             
             alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-dark "> 
                      La conversión de Kelvin a celsuis es de ${convertirKelvinCelsius(temperature)}
             </span>
            `;
     
         }
         else if(unidadT === '3' && unidadC === '2'){
             
             alert.classList.remove('hidden');
             alert.innerHTML = `
             <br>
             <span class="text-dark "> 
                      La conversión de kelvin a farenheite es de ${convertirKelvinFarenheite(temperature)}
             </span>
            `;
     
         }else{
             
             
                 alert.classList.remove('hidden');
                 alert.innerHTML = `
                 <br>
                 <span class="text-dark "> 
                         Error en la conversion 
                 </span>
                `;
         }
         
     });    
 
 });