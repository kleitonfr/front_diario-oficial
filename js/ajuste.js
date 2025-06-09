//inicializar biblioteca:
AOS.init({
    duration: 1000,
    once: false
})


//atualizar data no header:
const atualizarData = () => {
    const agora = new Date();

    const formato = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }

    let dataFormatada = agora.toLocaleDateString('pt-BR', formato)
    dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)
    document.getElementById('dataAtual').textContent = dataFormatada
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarData();
})


//aplica auto-contraste:

const contraste = document.getElementById('contraste')

contraste.addEventListener('click', function () {
    document.body.classList.toggle('contrast')
})



// acessibilidade:

const btnPrincipal = document.querySelector('#btn-principal')
const toggleButtons = document.querySelectorAll('.btn-off, .btn-on')

btnPrincipal.addEventListener('click', () => {
  toggleButtons.forEach(btn => {
    btn.classList.toggle('btn-off')
    btn.classList.toggle('btn-on')
  })
})





