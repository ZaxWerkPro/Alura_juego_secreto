/* El principal objetivo de este desafío es fortalecer tus habilidades 
en lógica de programación. Aquí deberás desarrollar la lógica para 
resolver el problema. */

let listaAmigos = [];// Array para almacenar los nombres de los amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo'); // Obtener el elemento con el ID "amigo"
    const nombreAmigo = inputAmigo.value.trim(); // Limpiar el texto y quitar espacios en blanco

    // Validar si el campo está vacío
    if (nombreAmigo === '') { // Verificar si el nombre está vacío
        alert('Por favor, inserte un nombre.'); // Mostrar un mensaje de alerta
        return; // Detener la función si no hay nombre
    }

    listaAmigos.push(nombreAmigo); // Agregar el nombre al array

    inputAmigo.value = ''; // Limpiar el campo de entrada

    actualizarListaAmigos(); // Actualizar la lista visual en la página
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // Obtener el elemento con el ID "listaAmigos"
    listaAmigosElement.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre a la lista
    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el texto del elemento <li> al nombre del amigo
        listaAmigosElement.appendChild(li); // Agregar el elemento <li> a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar si hay nombres en la lista
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.'); // Mostrar un mensaje de alerta
        return; // Detener la función si no hay nombres
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio]; // Obtener el nombre del amigo secreto

    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById('resultado'); // Obtener el elemento con el ID "resultado"
    resultadoElement.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`; // Mostrar el resultado en la lista
}