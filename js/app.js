import { valida } from "./validacion.js";

const formulario = document.querySelector(".formcontato__form");
const campos = formulario.querySelectorAll("input, textarea");
const enviar = document.getElementById("btn_enviar");

campos.forEach(input => {
    input.addEventListener('blur', (event) =>{
        //console.log(event.target);
        //console.log(event.target.classList.value) Accede al nombre de la clase del elemetno html

        valida(event.target);
    });
});

const validarFormulario = () => {
    let todosCompletados = true;
    campos.forEach ( campo => {
        if (campo.value.trim() === "") {
            todosCompletados = false;
        }
    })
    
    if (todosCompletados) {
        enviar.removeAttribute('disabled');
    } else {
        enviar.setAttribute('disabled', 'disabled'); //se agrega el atributo disabled al botón y se establece su valor en 'disabled'
    }
}

campos.forEach(campo => {
    campo.addEventListener('input', validarFormulario);
});