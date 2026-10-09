const amigos = [];

function adicionar() {
    const campo = document.getElementById('nome-amigo');
    const nome = campo.value.trim();

    if (nome === '') {
        alert('Digite um nome.');
        return;
    }

    amigos.push(nome);

    const lista = document.getElementById('lista-amigos');
    lista.textContent = amigos.join(', ');

    campo.value = '';
    campo.focus();
}

function sortear() {
    if (amigos.length < 2) {
        alert('É necessário ter pelo menos dois participantes.');
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const escolhido = amigos[indice];

    const resultado = document.getElementById('lista-sorteio');

    if (resultado.textContent === '') {
        resultado.textContent = '🎉 O amigo sorteado é:\n' + escolhido;
    } else {
        resultado.textContent += ', ' + escolhido;
    }
}
function reiniciar(evento) {
    evento.preventDefault();

    amigos.length = 0;

    const campo = document.getElementById('nome-amigo');
    const lista = document.getElementById('lista-amigos');
    const resultado = document.getElementById('lista-sorteio');

    campo.value = '';
    lista.textContent = '';
    resultado.textContent = '';

    campo.focus();
}