import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const txtArea = document.querySelectorAll("textarea");

inputs.forEach(input => {
    input.addEventListener('blur', (event) =>{
        //console.log(event.target);
        //console.log(event.target.classList.value) Accede al nombre de la clase del elemetno html

        valida(event.target);
    });
});

txtArea.forEach(text => {
    text.addEventListener('blur', (event) => {
        valida(event.target);
    });
});