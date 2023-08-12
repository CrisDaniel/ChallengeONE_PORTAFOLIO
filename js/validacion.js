//Haz tú validación en javascript acá
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    const parentElement = input.parentElement;
    const errorMessage = parentElement.querySelector(".input-message-error");

    if(input.classList.contains("formcontato__input")){
        // Propiedad validity es un objeto que informa la validez de un elemento según restricciones y validaciones. La propiedad valid es booleano [false : true]
        if(input.validity.valid){
            input.parentElement.classList.remove("input-container--invalid");
        } else {
            input.parentElement.classList.add("input-container--invalid");
            errorMessage.innerHTML = mostrarMensajeDeError(tipoDeInput, input); //nombre, elementoHTML
        }
    }

    if(input.classList.contains("formcontato__textarea")){
        if(input.validity.valid) {
            console.log(input.validity.valid);
            input.parentElement.classList.remove("input-container--invalid");

            if(input.value.length > 300){
                console.log("Supera los 300 caracteres");
                input.parentElement.classList.add("input-container--invalid");
                errorMessage.innerHTML = mensajesDeError[tipoDeInput]["patternMismatch"];
            }
        }
        else {
            console.log("Vacio");
            input.parentElement.classList.add("input-container--invalid");
            errorMessage.innerHTML = mostrarMensajeDeError(tipoDeInput, input); //nombre, elementoHTML
        }
    }
}

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Debe contener maximo 50 caracteres y no tener caracteres especiales"
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valio, ejemplo: text@texto.com",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "Debe contener maximo 50 caracteres",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "Debe contener maximo 50 caracteres",
    }
};

function mostrarMensajeDeError(tipoInput, input){   //(nombre, elementoHTML)
    let mensaje = "";
    tipoDeError.forEach(error =>{
        if(input.validity[error]){
            //console.log(input.validity);
            //console.log(input.validity[error]);
            mensaje = mensajesDeError[tipoInput][error];
        }
    })
    return mensaje
}