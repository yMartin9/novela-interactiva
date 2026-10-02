function mirarPuerta() {
    document.getElementById("historia").textContent =
        "Te acercás a la puerta. Está cerrada con llave.";

    document.getElementById("opciones").innerHTML = `
        <button onclick="abrirPuerta()">Intentar abrir puerta</button>
        <button onclick="volver()">Volver</button>
    `;
}

function mirarVentana() {
    document.getElementById("historia").textContent =
        "Ves por la ventana. Hay una calle, neblina y no se ve a nadie.";

    document.getElementById("opciones").innerHTML = `
        <button onclick="abrirVentana()">Abrir la ventana</button>
        <button onclick="volver()">Volver</button>
    `;
}

function abrirPuerta() {
    document.getElementById("historia").textContent =
        "Abrís la puerta. Del otro lado hay un pasillo con muchas puertas. Notás tierra en el ambiente.";

    document.getElementById("opciones").innerHTML = `
        <button onclick="continuar()">Continuar por el pasillo</button>
        <button onclick="volver()">Volver</button>
    `;
}

function abrirVentana() {
    document.getElementById("historia").textContent =
        "Se abre la ventana. Entra un viento espeso y tibio.";

    document.getElementById("opciones").innerHTML = `
        <button onclick="volver()">Volver</button>
    `;
}

function volver() {
    location.reload();
}

function continuar() {
    document.getElementById("historia").textContent =
        "Te adentrás en el pasillo. Caminás lento mientras buscás puertas abiertas.";

    document.getElementById("opciones").innerHTML = `
        <button onclick="final()">Seguir caminando</button>
    `;
}

function final() {
    document.getElementById("historia").textContent =
        "Encontrás unas escaleras al final del pasillo.";

    document.getElementById("opciones").innerHTML = "";
}