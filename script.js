document.addEventListener('DOMContentLoaded', () => {
    const btnMensagem = document.getElementById('btnMensagem');
    const mensagemOculta = document.getElementById('mensagemOculta');

    btnMensagem.addEventListener('click', () => {
        if (mensagemOculta.classList.contains('hidden')) {
            mensagemOculta.classList.remove('hidden');
            btnMensagem.textContent = 'Ocultar reflexão';
        } else {
            mensagemOculta.classList.add('hidden');
            btnMensagem.textContent = 'Clique para ver uma reflexão';
        }
    });
});
