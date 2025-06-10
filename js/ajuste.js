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


// acessibilidade:


const btnPrincipal = document.querySelector('#btn-principal')
const trocaClass = document.querySelectorAll('.btn-off, .btn-on')

btnPrincipal.addEventListener('click', () => {
  trocaClass.forEach(btn => {
    btn.classList.toggle('btn-off')
    btn.classList.toggle('btn-on')
  })
})


    //auto contrate:

const contraste = document.getElementById('contraste')

contraste.addEventListener('click', () => {
    document.body.classList.toggle('contrast')
})


    //fonte size:

let tamanhoAtual = 100

const btnMinFonte = document.getElementById("btnMaxFonte")

btnMinFonte.addEventListener('click', () =>{
    if(tamanhoAtual < 200) {
        tamanhoAtual += 10
        document.body.style.fontSize = tamanhoAtual + "%"
    }
})

const btnMaxFonte = document.getElementById("btnMinFonte")

btnMaxFonte.addEventListener('click', () => {
    if(tamanhoAtual > 50) {
        tamanhoAtual -= 10
        document.body.style.fontSize = tamanhoAtual + "%"
    }
})


// Dark mode:

const btnDark = document.getElementById('btnDark')
const darkHtml = document.getElementById('htmlDark')
const darkBodyTitulo = document.querySelector('.tituloCor')
const darkBodySub = document.querySelector('.subtCor')
const darkBodyMain = document.querySelector('.bg-image')
const darkBodyFooter = document.querySelector('.footerColor')
const btnColor = document.querySelector('.btn-color') 

btnDark.addEventListener('click', () => {
    if(darkHtml.dataset.bsTheme === 'light') {
        darkHtml.dataset.bsTheme = 'dark'
        darkBodyTitulo.classList.add('darkTitulo')
        darkBodySub.classList.add('darkTitulo')
        darkBodyMain.classList.add('darkModeBody')
        darkBodyFooter.classList.add('darkModeFooter')
        btnColor.classList.add('darkBtns')
    }
    else {
        darkHtml.dataset.bsTheme = 'light'
        darkBodyTitulo.classList.remove('darkTitulo')
        darkBodySub.classList.remove('darkTitulo')
        darkBodyMain.classList.remove('darkModeBody')
        darkBodyFooter.classList.remove('darkModeFooter')
        btnColor.classList.remove('darkBtns')
    }
})

