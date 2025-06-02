//inicializar biblioteca:
AOS.init({
    duration: 1000,
    once: false 
})


//atualizar data no header:
const atualizarData = () =>  {
    const agora = new Date();

    const formato = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }

    const dataFormatada = agora.toLocaleDateString('pt-BR',formato)
    document.getElementById('dataAtual').textContent = dataFormatada
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarData();
})


//aplica auto-contraste:
const contraste = document.getElementById('contraste');

contraste.addEventListener('click', function () {
  document.body.classList.toggle('contrast');
});





