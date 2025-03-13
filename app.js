// Array para almacenar nombres 
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validación de la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = "";

    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    // Valida si hay nombres
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Aleatoriedad
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    // Resultado
const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li>
            El amigo secreto es: <span class="amigo-sorteado">${amigoSorteado}</span>
        </li>
    `;
}