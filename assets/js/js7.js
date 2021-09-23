//console.log("Conexion Okey");

//**acceder a los elementos  */
const frm=document.getElementById('frm-pedidos');
const detalle=document.getElementById('detallePedido');
const totalp=document.getElementById('totalPedido');


let productos=[];

/**--------------------------------------------------------------------- */
//**FUNCIONES */
const agregarProducto =(producto, precio, cantidad, subtotal)=>{
    //definir un objeto de json 
    let item={
        //elemento: valor
        nombrep:producto,
        preciop:precio,
        nombrec:cantidad,
        subtotalp:subtotal
    }

    productos.push(item);
    console.log(productos);
}


/**--------------------------------------------------------------------- */
const mostrarPedido=()=>{

    detalle.innerHTML='';

    productos= JSON.parse(localStorage.getItem('pedido'));
    console.log(productos);

    /**validar que exitan productos */
    if(productos===null){
        productos=[];
        //alert("No hay productos en pedido")
    }else{
        let total=0;
        productos.forEach(element => {
            detalle.innerHTML+=
            `
            <td>${element.nombrep}</td>
            <td>${element.preciop}</td>
            <td>${element.nombrec}</td>
            <td>${element.subtotalp}</td>
            <td><button class="btn-enviar">Borrar</button></td>
            `;
            let subtotal=element.subtotalp;
            total=total+subtotal;
        });

        totalp.innerHTML= `
        <b>Total Pedido: ${total}</b>`;
    }
}

/**--------------------------------------------------------------------- */
//**AGREGAR AL LOCAL STORAGE */
const guardarProducto= () =>{
    localStorage.setItem('pedido', JSON.stringify (productos));
    //**al guardar productos se muesten  */
    mostrarPedido();
}


/**--------------------------------------------------------------------- */
const borrarProducto=(producto)=>{
    /**nombre locaizar laposicion del arreglo */
    let indexP;
    productos.forEach((element,index)=>{
        if (element.nombrep===producto) {
            indexP=index;
        }
    });
    /**Borrar elementos delarray con el inidice  */
    productos.splice(indexP, 1);
    console.log(productos);
    guardarProducto();
}
/**--------------------------------------------------------------------- */
/**identificar los eventos principales */
frm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let prod=document.getElementById('producto').value;
    let pre=document.getElementById('precio').value;
    let cant=document.getElementById('cantidad').value;

    let sub=pre*cant;

    agregarProducto(prod, pre,cant, sub);
    guardarProducto();

    frm.reset();

});

/**--------------------------------------------------------------------- */
/**Evento para dar prioridad (tabla no se reinice los datos) */

document.addEventListener('DOMContentLoaded', mostrarPedido);

/**---------------------------------
 * pop elimina elultimo
shift elimina al principio ------------------------------------ */
detalle.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e);

    let producto=e.path[2].childNodes[0].innerText;

    if (e.target.innerText=="Borrar") {

        borrarProducto(producto);
    }



})