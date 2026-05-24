function ordenarFiguritas() {

	figuritas.sort((a, b) => {

		const regex =
			/^[a-z]+\s\d+$/;

		const validaA =
			regex.test(a);

		const validaB =
			regex.test(b);

		if (!validaA && !validaB) {
			return 0;
		}

		if (!validaA) {
			return 1;
		}

		if (!validaB) {
			return -1;
		}

		const partesA = a.split(" ");
		const partesB = b.split(" ");

		const paisA =
			partesA[0];

		const paisB =
			partesB[0];

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
