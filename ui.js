.modal {
	position: fixed;
	inset: 0;

	background: rgba(0, 0, 0, 0.7);

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 9999;
}

.oculto {
	display: none;
}

.modal-contenido {
	background: #1e1e1e;

	padding: 25px;

	border-radius: 18px;

	width: 90%;
	max-width: 320px;

	text-align: center;
}

.modal-contenido p {
	font-size: 18px;
	margin-bottom: 20px;
}

.modal-botones {
	display: flex;
	gap: 10px;
}

.modal-botones button {
	flex: 1;
}

#confirmarSi {
	background: #2ecc71;
}

#confirmarNo {
	background: #e74c3c;
}
