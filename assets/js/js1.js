/**Usando estructuras algorítmicas en JavaScript, desarrolle los siguientes
programas en consola.

Realice un programa que reciba un usuario y password:
❑ Si los datos coinciden con usuario=admin y password=qwerty,
muestra una alerta que dice Bienvenido admin.
❑ Si el usuario es correcto pero el password no, debe mostrar una
alerta que diga Su password es incorrecto
❑ Si el password es correcto pero el usuario no, debe mostrar una
alerta que diga Su usuario es incorrecto.
❑ Si el usuario y la contraseña son incorrectos debe mostrar una alerta
que diga Credenciales de acceso incorrectas. */


//RETO 1
document.getElementById("btn").addEventListener("click",function(){
    usu=document.getElementById("usuario").value;
    cla=document.getElementById("clave").value;
    
    if(usu=="admin" && cla=="qwerty"){
    alert("Bienvenido admin");
    }
    else if(usu=="admin" && cla!="qwerty"){
    alert("su clave es incorrecta");
    }
    else if(usu!="admin" && cla=="qwerty"){
    alert("Su usuario es incorrecto");
    }
    else{
    alert("credenciales de acceso incorrectas");
    }
})