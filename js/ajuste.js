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


//dropdown no nav:
/*
const menu1 = document.getElementById('menu1')
const menu2 = document.getElementById('menu2')
const menuItens = document.querySelectorAll('.menu')


function aplicarDropdown() {

    if (window.innerWidth > 549) {
        menu1.classList.add('dropdown')
        menu2.classList.add('dropdown-menu')
        menuItens.classList.add('dropdown-item')
    }
    else {        
        menu1.classList.remove('dropdown')
        menu2.classList.remove('dropdown-menu')
        menuItens.classList.remove('dropdown-item')
    }

}

window.addEventListener('laod', aplicarDropdown())
window.addEventListener('resize', aplicarDropdown())

*/





