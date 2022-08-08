// alert('Exitoso');
const btnConsultar =document.getElementById("btnConsultar");

const traerDatos = () =>{

fetch ("http://localhost:3000/api/v1/datos")
    .then(response => response.json()) // Lo transformamos en json
  .then(data => {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const age = document.querySelector('#age');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const address = document.querySelector('#address');
    const city = document.querySelector('#city');

   // name .innerHTML = data.name; // Este no se debe utilizar
   lastName.textContent = data.lastName; // Este es el que se debe utilizar poque toma como texto, el otro interpreta los caracteres especiales
   name.textContent = data.name; 
   age.textContent = data.age; 
   email.textContent = data.email; 
   phone.textContent = data.phone; 
   address.textContent = data.address; 
   city.textContent = data.city; 

    
});
};

btnConsultar.addEventListener("click", traerDatos);
