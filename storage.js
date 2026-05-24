const input =
	document.getElementById(
		"figuritaInput"
	);

const botonAgregar =
	document.getElementById(
		"agregarBtn"
	);

const lista =
	document.getElementById(
		"listaFiguritas"
	);

const contador =
	document.getElementById(
		"contador"
	);

let figuritas =
	cargarFiguritas();

actualizarLista();

function ordenarFiguritas() {

	figuritas.sort((a, b) => {

		const partesA = a.split(" ");
		const partesB = b.split(" ");

		const paisA = partesA[0];
		const paisB = partesB[0];

		const numeroA =
			parseInt(partesA[1]);

		const numeroB =
			parseInt(partesB[1]);

		if (paisA < paisB) {
			return -1;
		}

		if (paisA > paisB) {
			return 1;
		}

		return numeroA - numeroB;
	});
}

function agregarFigurita() {

	const valor =
		input.value
			.trim()
			.toLowerCase();

	if (valor === "") {
		return;
	}

	figuritas.push(valor);

	ordenarFiguritas();

	guardarFiguritas(figuritas);

	actualizarLista();

	input.value = "";

	input.focus();
}

botonAgregar.addEventListener(
	"click",
	agregarFigurita
);

input.addEventListener(
	"keydown",
	(event) => {

		if (event.key === "Enter") {

			agregarFigurita();
		}
	}
);
