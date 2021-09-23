const alert = document.getElementById('alert');
    const btn = document.getElementById('btn');
     
     
     
 
     //evento 
     btn.addEventListener('click', () =>{
         const  nombre = document.getElementById('nombre').value;
         const apellido = document.getElementById('apellido').value;
       
 
        //condicional

        if(nombre === '1' && apellido === '2'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, la profesora Sandra Rodriguez dicta inglés
            </span>
           `;
        }else if(nombre === '1' && apellido === '1'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, la profesora Sandra Rueda dicta BBDD
            </span>
           `;

        }else if(nombre === '2' && apellido === '6'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, el profesor Cristian Buitrago dicta Php
            </span>
           `;

        }
        else if(nombre === '3' && apellido === '7'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, el profesor Adriana Duarte dicta Diseño 
            </span>
           `;

        }else if(nombre === '4' && apellido === '5'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, el profesor Julian Urrea dicta Métricas de Calidad
            </span>
           `;

        }else if(nombre === '5' && apellido === '4'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, la profesora Jennifer Fajardo dicta JavaScript
            </span>
           `;

        }else if(nombre === '3' && apellido === '3'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, la profesora Adriana Ramos dicta Comunicación
            </span>
           `;

        }else if(nombre === '6' && apellido === '8'){
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Correcto, la profesora Carolina Forero dicta Seguimiento de proyectos
            </span>
           `;

        }else{
            alert.classList.remove('hidden');
            alert.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     Incorrecto
            </span>
           `;
        }
     });