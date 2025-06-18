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

//Acessibilidade

    //auto contrate:

const contraste = document.getElementById('contraste')

contraste.addEventListener('click', () => {
    document.body.classList.toggle('contrast')
})


    //fonte size:

let tamanhoAtual = 80
let tamanhoAtualT1 = 400
let tamanhoAtualT2 = 500
let tamanhoAtualT3 = 150
let tamanhoAtualConsulta = 150

const btnMaxFonte = document.getElementById("btnMaxFonte")
const btnMinFonte = document.getElementById("btnMinFonte")

const fonteMaxMin = document.querySelectorAll(".fonteMaxMin")
const titulo1 = document.querySelector(".fonteMaxMin-t1")
const titulo2 = document.querySelector(".fonteMaxMin-t2")
const titulo3 = document.querySelector(".fonteMaxMin-t3")
const consulta = document.querySelectorAll(".fonteMaxMin-consulta")


btnMaxFonte.addEventListener('click', () =>{
    if(tamanhoAtual < 200 || tamanhoAtualT1 < 800 || tamanhoAtualT2 < 800 || tamanhoAtualT3 < 500) {
        tamanhoAtual += 5
        tamanhoAtualT1 += 40
        tamanhoAtualT2 += 40
        tamanhoAtualT3 += 20
    
        fonteMaxMin.forEach((el) => {el.style.fontSize = tamanhoAtual + "%"})
        titulo1.style.fontSize = tamanhoAtualT1 + "%"
        titulo2.style.fontSize = tamanhoAtualT2 + "%"
        titulo3.style.fontSize = tamanhoAtualT3 + "%"
       
    }
})


btnMinFonte.addEventListener('click', () => {
    if(tamanhoAtual > 50 || tamanhoAtualT1 > 50 || tamanhoAtualT2 > 50 || tamanhoAtualT3 < 500) {
        tamanhoAtual -= 5
        tamanhoAtualT1 -= 40
        tamanhoAtualT2 -= 40
        tamanhoAtualT3 -= 20
       

        fonteMaxMin.forEach((el) => {el.style.fontSize = tamanhoAtual + "%"})
        titulo1.style.fontSize = tamanhoAtualT1 + "%"
        titulo2.style.fontSize = tamanhoAtualT2 + "%"
        titulo3.style.fontSize = tamanhoAtualT3 + "%"
    }
})


