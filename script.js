const inputTexto = document.querySelector(".input-texto"); //Obtenemos la entrada de nuestro texto 
const mensaje = document.querySelector(".textArea2"); 


//llamar a la funcion encriptar con el boton
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value); //Variable para recibir el resultado de esta funcion (texto de entrada)
    mensaje.value = textoEncriptado; // Mandar esto a nuestra otra caja del mensaje
   // mensaje.style.backgroundImage = "none"; Manejar un estilo css. Cuando se oprime el boton, no se muestre lo que este aqui.
    inputTexto.value = ""; // se limpia la caja de texto 
}



// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

//funcion encriptar
function encriptar(stringEncriptado){  //va a recibir el texto que el usuario puso en el input
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //Solo aceptar letras minusculas
    stringEncriptado = stringEncriptado.toLowerCase();
    //verificar las letras dentro de la palabra
    for(let i=0; i < matrizCodigo.length ; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){ //verificamos por posicion 0
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0] ,matrizCodigo[i][1]); //lo que esta en ña posicion 0 lo cambiamos por la  1
        }
    }
    return stringEncriptado;
}


// Ahora hacemos lo contrario para Desencriptar


//llamar a la funcion desencriptar con el boton
function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  //limpiar
}

//funcion deencriptar
function desencriptar(stringdesEncriptado){  //va a recibir el texto que el usuario puso en el input
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //Solo aceptar letras minusculas
    stringdesEncriptado = stringdesEncriptado.toLowerCase();
    //verificar las letras dentro de la palabra
    for(let i=0; i < matrizCodigo.length ; i++){
        if(stringdesEncriptado.includes(matrizCodigo[i][1])){ //verificamos por posicion 1
            stringdesEncriptado = stringdesEncriptado.replaceAll(matrizCodigo[i][1] ,matrizCodigo[i][0]); //lo que esta en ña posicion 1 lo cambiamos por la  0
        }
    }
    return stringdesEncriptado;
}


//botón copiar

function btnCopiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    // alert("Texto Copiado")
    swal("Buen trabajo!", "Texto copiado", "success");
}