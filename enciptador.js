// Elementos del DOM
const textArea = document.querySelector(".seccion__formulario_input");
const imagenMuneco = document.querySelector(".texto__resultado__img");
const mensajeResultado = document.querySelector(".texto__resultado_titulo");
const parrafoResultado = document.querySelector(".texto__resultado__parrafo");
const botonEncriptar = document.querySelector(".container__input[value='Encriptar']");
const botonDesencriptar = document.querySelector(".container__input[value='Desencriptar']");
const botonCopiar = document.querySelector(".texto__boton");

// Clave de encriptación
const llave = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

// Función de encriptación
function encriptar(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        for (let j = 0; j < llave.length; j++) {
            if (letra === llave[j][0]) {
                letra = llave[j][1];
                break;
            }
        }
        mensajeEncriptado += letra;
    }
    return mensajeEncriptado;
}

// Función de desencriptación
function desencriptar(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llave.length; i++) {
        while (mensajeDesencriptado.includes(llave[i][1])) {
            mensajeDesencriptado = mensajeDesencriptado.replace(llave[i][1], llave[i][0]);
        }
    }
    return mensajeDesencriptado;
}

// Evento al escribir en el textArea
textArea.addEventListener("input", () => {
    imagenMuneco.style.display = "none";
    mensajeResultado.textContent = "Ingresando mensaje a Encriptar";
    parrafoResultado.textContent = "";
});

// Evento para encriptar mensaje
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const mensaje = textArea.value.toLowerCase();
    const mensajeEncriptado = encriptar(mensaje);
    parrafoResultado.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    mensajeResultado.textContent = "La Incriptación del texto es:";
});

// Evento para desencriptar mensaje
botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const mensaje = textArea.value.toLowerCase();
    const mensajeDesencriptado = desencriptar(mensaje);
    parrafoResultado.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    mensajeResultado.textContent = "La Desincriptación del texto es:";
});

// Evento para copiar mensaje
botonCopiar.addEventListener("click", (e) => {
    e.preventDefault();
    const texto = parrafoResultado.textContent;
    const tempInput = document.createElement("input");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Texto copiado al portapapeles");
});

