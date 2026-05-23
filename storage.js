function guardarFiguritas(figuritas) {
	localStorage.setItem(
		"figuritas",
		JSON.stringify(figuritas)
	);
}

function cargarFiguritas() {
	const datos = localStorage.getItem("figuritas");

	if (!datos) {
		return [];
	}

	return JSON.parse(datos);
}