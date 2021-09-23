const btn = document.getElementById('btn');
    const alerta = document.getElementById('alert');

    function calcularDosis(edad,peso){
        var resultado = (((peso+10)/ (edad * 10))*8);
        return resultado;
    }

    btn.addEventListener('click',() =>{
        const peso  = document.getElementById('peso').value;
        const edad  = document.getElementById('edad').value;
        if(edad <= 12 && edad >=1){
            alerta.classList.remove('hidden');
            alerta.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                     La Dosis necesaria es de ${calcularDosis(peso,edad)}
            </span>
           `;
        }else{
            alerta.classList.remove('hidden');
         
            alerta.innerHTML = `
            <br>
            <span class="text-green-800 "> 
                    Error al calcular la dosis
            </span>
           `;
        }
        
    });