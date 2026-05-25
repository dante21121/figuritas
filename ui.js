let indicePendiente = null;

function actualizarLista() {

	lista.innerHTML = "";

	figuritas.forEach((figurita, index) => {

		const li =
			document.createElement("li");

		li.className = "item";

		li.textContent = figurita;

		li.addEventListener(
			"click",
			() => {

				const modal =
					document.getElementById(
						"modalConfirmacion"
					);

				const textoModal =
					document.getElementById(
						"textoModal"
					);

				textoModal.textContent =
					`¿Seguro que quieres eliminar "${figurita}"?`;

				modal.classList.remove(
					"oculto"
				);

				indicePendiente = index;
			}
		);

		lista.appendChild(li);
	});

	contador.textContent =
		figuritas.length;
}

window.addEventListener(
	"DOMContentLoaded",
	() => {

		const botonSi =
			document.getElementById(
				"confirmarSi"
			);

		const botonNo =
			document.getElementById(
				"confirmarNo"
			);

		const modal =
			document.getElementById(
				"modalConfirmacion"
			);

		botonSi.addEventListener(
			"click",
			() => {

				if (
					indicePendiente !== null
				) {

					figuritas.splice(
						indicePendiente,
						1
					);

					guardarFiguritas(
						figuritas
					);

					actualizarLista();
				}

				modal.classList.add(
					"oculto"
				);

				indicePendiente = null;
			}
		);

		botonNo.addEventListener(
			"click",
			() => {

				modal.classList.add(
					"oculto"
				);

				indicePendiente = null;
			}
		);
	}
);
