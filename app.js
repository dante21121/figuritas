const input = document.getElementById("figuritaInput");
const botonAgregar = document.getElementById("agregarBtn");

const lista = document.getElementById("listaFiguritas");
const contador = document.getElementById("contador");

let figuritas = cargarFiguritas();

actualizarLista();

function agregarFigurita() {

	const valor = input.value.trim().toLowerCase();

	if (valor === "") {
		return;
	}

	figuritas.push(valor);

	guardarFiguritas(figuritas);

	actualizarLista();

	input.value = "";

	input.focus();
}

botonAgregar.addEventListener(
	"click",
	agregarFigurita
);

input.addEventListener("keydown", (event) => {

	if (event.key === "Enter") {
		agregarFigurita();
	}
});