const URL = 'http://www.raydelto.org/agenda.php';
const formularioContacto = document.getElementById('informacion');

// Utilizamos fetch para obtener todos los datos y enviarlos a mostrarContactos
function obtenerContactos() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            mostrarContactos(data);
        })
        .catch(error => {
            console.error('Error al obtener los contactos:', error);
        });
}

function mostrarContactos(contactos) {
    const contactList = document.getElementById('contact-list');

    contactos.forEach(contacto => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');

        const nombre = document.createElement('h2');
        nombre.textContent = `${contacto.nombre} ${contacto.apellido}`;

        const telefono = document.createElement('p');
        telefono.textContent = `Teléfono: ${contacto.telefono}`;

        contactItem.appendChild(nombre);
        contactItem.appendChild(telefono);
        contactList.appendChild(contactItem);
    });
}


formularioContacto.addEventListener('submit',(event) => {
    event.preventDefault();

    var contacto = {
        nombre: document.getElementById('name').value,
        apellido: document.getElementById('lastname').value,
        telefono: document.getElementById('telephone').value
    };

    agregar(contacto);

});


function agregar(Contacto){
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(Contacto)
    })
    .then(() => {
        alert('Se agrego correctamente el contacto ✅');
        location.reload();
    })
    .catch(error => {
        console.error('Error al agregar los contactos:', error);
        alert('Ocurrio un error al intentar agregar el contacto ❌');
    });
}


obtenerContactos();