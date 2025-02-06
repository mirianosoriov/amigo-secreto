// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        listaAmigos.push(nombre);  // Agregar el nombre a la lista
        actualizarLista();  // Actualizar la lista en pantalla
        input.value = "";  // Limpiar el campo de entrada
        input.focus();  // Volver a enfocar el input
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Función para actualizar la lista de nombres en pantalla
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";  // Limpiar lista antes de actualizar

    listaAmigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
