const textArea = document.querySelector('.texto');
const mensagem = document.querySelector('.msg-codificada');

//s "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnCifrar() {
	const textoCifrado = cifrar(textArea.value);
	mensagem.value = textoCifrado;
	textArea.value = '';
}

function cifrar(mensagemCifrada) {
	let matrizCodigo = [ [ 'e', 'enter' ], [ 'i', 'imes' ], [ 'a', 'ai' ], [ 'o', 'ober' ], [ 'u', 'ufat' ] ];
	mensagemCifrada = mensagemCifrada.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (mensagemCifrada.includes(matrizCodigo[i][0])) {
			mensagemCifrada = mensagemCifrada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}

	textArea.classList.remove('com-conteudo'); // Remove a classe "com-conteudo"

	return mensagemCifrada;
}

function btnDecifrar() {
	const textoDecifrado = decifrar(textArea.value);
	mensagem.value = textoDecifrado;
	textArea.value = '';
}

function decifrar(mensagemDecifrada) {
	let matrizCodigo = [ [ 'e', 'enter' ], [ 'i', 'imes' ], [ 'a', 'ai' ], [ 'o', 'ober' ], [ 'u', 'ufat' ] ];
	mensagemDecifrada = mensagemDecifrada.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (mensagemDecifrada.includes(matrizCodigo[i][1])) {
			mensagemDecifrada = mensagemDecifrada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}

	textArea.classList.remove('com-conteudo'); // Remove a classe "com-conteudo"

	return mensagemDecifrada;
}

function btnCopiar() {
	var copyText = document.querySelector('.msg-codificada');
	var textToCopy = copyText.value;
	if (textToCopy.trim() !== '') {
		navigator.clipboard
			.writeText(textToCopy)
			.then(function() {
				// Exibe um alerta indicando que o texto foi copiado
				alert('Mensagem copiada!');

				// Limpa o conteúdo da textarea
				copyText.value = '';
			})
			.catch(function(err) {
				// Em caso de erro, exibe um alerta com a mensagem de erro
				alert('Erro ao copiar mensagem: ' + err);
			});
	} else {
		// Se não houver texto, exibe um alerta informativo
		alert('Nada para copiar. Digite algo na caixa de texto.');
	}
}

var mensagemTextArea = document.querySelector('.msg-codificada');

function validarInput(input) {
	input.value = input.value.replace(/[A-Za-z0-9]/g, '');
}

const textoInput = document.querySelector('.texto');

textoInput.addEventListener('input', function(event) {
	const inputValue = event.target.value;

	const normalizedValue = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	event.target.value = normalizedValue;
});
