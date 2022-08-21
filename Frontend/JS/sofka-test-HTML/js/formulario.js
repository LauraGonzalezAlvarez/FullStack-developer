const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const campos = {
    usuario: false,
    nombre: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {

        case "nombre":
            validarCampoNombres(e.target, 'nombre');
            break;
        case "cedula":
            validarCampoCedula(e.target, 'cedula');
            break;
        case "correo":
            validarCampoEmail(e.target, 'correo');
            break;
        case "telefono":
            validarCampoTelefono(e.target, 'telefono');
            break;
        case "operacion":
            validarCampoOperacion(e.target, 'operacion');
            break;
    }
}

const validarCampoCedula = (input, campo) => {
    if (input.value > 1000000000) {
        validarFormularioCorrecto(input, campo);
    } else {
        validarFormularioIncorrecto(input, campo);
    }
}

const validarCampoEmail = (input, campo) => {
    if (emailRegex.test(input.value)) {
        validarFormularioCorrecto(input, campo);
    } else {
        validarFormularioIncorrecto(input, campo);
    }
}

const validarCampoTelefono = (input, campo) => {
    if (input.value.charAt(0) === '3' && input.value.charAt(9)) {
        validarFormularioCorrecto(input, campo);
    } else {
        validarFormularioIncorrecto(input, campo);
    }
}


const validarCampoNombres = (input, campo) => {
    const myArray = input.value.split(" ");
    let bandera = false;
    for (let myArrayElement of myArray) {
        (myArrayElement === myArrayElement.charAt(0).toUpperCase() + myArrayElement.slice(1)) ? bandera = false : bandera = true;
    }
    (myArray[2] && bandera === false) ? validarFormularioCorrecto(input, campo) : validarFormularioIncorrecto(input, campo);
}

const validarFormularioCorrecto = (input, campo) => {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
}

const validarFormularioIncorrecto = (input, campo) => {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre && campos.cedula && campos.correo && campos.telefono && campos.operacion) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje-error').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-error').classList.remove('formulario__mensaje-activo');
        }, 3000);
    }
});



validarCampoOperacion = (input, campo) => {
    let buton = document.getElementById('button')
    buton.addEventListener('click', () => {
        (input.value) ? validarFormularioCorrecto(input, campo) : validarFormularioIncorrecto(input, campo);
        let valorOperacion = document.getElementById('operacion').value
        const url = `http://api.mathjs.org/v4/?expr=2%2B3*sqrt(${valorOperacion})`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let resul = document.getElementById('resultado');
                resul.innerHTML = `<p>${data}</p>`;
            })
    })
}



