function actualizarLista() {

	lista.innerHTML = "";

	figuritas.forEach((figurita, index) => {

		const li = document.createElement("li");
		li.className = "item";

		const texto = document.createElement("span");
		texto.textContent = figurita;

		const botonEliminar = document.createElement("button");
		botonEliminar.textContent = "X";
		botonEliminar.className = "delete-btn";

		botonEliminar.addEventListener("click", () => {

			figuritas.splice(index, 1);

			guardarFiguritas(figuritas);

			actualizarLista();
		});

		li.appendChild(texto);
		li.appendChild(botonEliminar);

		lista.appendChild(li);
	});

	contador.textContent = figuritas.length;
}