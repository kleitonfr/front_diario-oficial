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

let tamanhoPadraoPx = parseInt(getComputedStyle(document.documentElement).fontSize);
let cardSize = document.querySelectorAll(".fonteCard")

let tamanhoAtualNav = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMinNav")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualHeader = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMinHeader")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT1 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t1")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT2 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t2")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT3 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t3")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT4 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t4")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT5 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t5")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT6 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t6")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT7 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t7")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT8 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t8")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT9 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t9")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualT10 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMin-t10")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoAtualCard = (parseFloat(getComputedStyle(cardSize[0]).fontSize)) / tamanhoPadraoPx * 100
let tamanhoFooter = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMinFooter")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoPaginacao = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMinPag")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoBtn1 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMinBtn")).fontSize)) / tamanhoPadraoPx * 100
let tamanhoBtn2 = (parseFloat(getComputedStyle(document.querySelector(".fonteMaxMinBtn2")).fontSize)) / tamanhoPadraoPx * 100


const btnMaxFonte = document.getElementById("btnMaxFonte")
const btnMinFonte = document.getElementById("btnMinFonte")

const fonteMaxMinNav = document.querySelector(".fonteMaxMinNav")
const fonteMaxMinHeader = document.querySelector(".fonteMaxMinHeader")
const fonteMaxMinT1 = document.querySelector(".fonteMaxMin-t1")
const fonteMaxMinT2 = document.querySelector(".fonteMaxMin-t2")
const fonteMaxMinT3 = document.querySelector(".fonteMaxMin-t3")
const fonteMaxMinT4 = document.querySelector(".fonteMaxMin-t4")
const fonteMaxMinT5 = document.querySelector(".fonteMaxMin-t5")
const fonteMaxMinT6 = document.querySelector(".fonteMaxMin-t6")
const fonteMaxMinT7 = document.querySelector(".fonteMaxMin-t7")
const fonteMaxMinT8 = document.querySelector(".fonteMaxMin-t8")
const fonteMaxMinT9 = document.querySelector(".fonteMaxMin-t9")
const fonteMaxMinT10 = document.querySelector(".fonteMaxMin-t10")
const fonteCard = document.querySelectorAll(".fonteCard")
const fonteMaxMinFooter = document.querySelector(".fonteMaxMinFooter")
const fonteMaxMinPag = document.querySelector(".fonteMaxMinPag")
const fonteMaxMinBtn = document.querySelector(".fonteMaxMinBtn")
const fonteMaxMinBtn2 = document.querySelector(".fonteMaxMinBtn2")


btnMaxFonte.addEventListener('click', () =>{
    if(tamanhoAtualNav <= 150) tamanhoAtualNav += 10
    if(tamanhoAtualHeader <= 150) tamanhoAtualHeader += 10
    if(tamanhoAtualT1 <= 800) tamanhoAtualT1 += 30
    if(tamanhoAtualT2 <= 800) tamanhoAtualT2 += 30
    if(tamanhoAtualT3 <= 400) tamanhoAtualT3 += 20
    if(tamanhoAtualT4 <= 150) tamanhoAtualT4 += 10
    if(tamanhoAtualT5 <= 150) tamanhoAtualT5 += 10
    if(tamanhoAtualT6 <= 600) tamanhoAtualT6 += 10
    if(tamanhoAtualT7 <= 150) tamanhoAtualT7 += 10
    if(tamanhoAtualT8 <= 150) tamanhoAtualT8 += 10
    if(tamanhoAtualT9 <= 150) tamanhoAtualT9 += 10
    if(tamanhoAtualT10 <= 600) tamanhoAtualT10 += 20
    if(tamanhoAtualCard <= 150) tamanhoAtualCard += 10
    if(tamanhoFooter <= 200) tamanhoFooter += 10
    if(tamanhoPaginacao <= 150) tamanhoPaginacao += 10
    if(tamanhoBtn1 <= 150) tamanhoBtn1 +=10
    if(tamanhoBtn2 <= 150) tamanhoBtn2 +=10
  

    fonteMaxMinNav.style.fontSize = tamanhoAtualNav + "%"
    fonteMaxMinHeader.style.fontSize = tamanhoAtualHeader + "%"
    fonteMaxMinT1.style.fontSize = tamanhoAtualT1 + "%"
    fonteMaxMinT2.style.fontSize = tamanhoAtualT2 + "%"
    fonteMaxMinT3.style.fontSize = tamanhoAtualT3 + "%"
    fonteMaxMinT4.style.fontSize = tamanhoAtualT4 + "%"
    fonteMaxMinT5.style.fontSize = tamanhoAtualT5 + "%"
    fonteMaxMinT6.style.fontSize = tamanhoAtualT6 + "%"
    fonteMaxMinT7.style.fontSize = tamanhoAtualT7 + "%"
    fonteMaxMinT8.style.fontSize = tamanhoAtualT8 + "%"
    fonteMaxMinT9.style.fontSize = tamanhoAtualT9 + "%"
    fonteMaxMinT10.style.fontSize = tamanhoAtualT10 + "%"
    fonteCard.forEach((el) => el.style.fontSize = tamanhoAtualCard + "%")
    fonteMaxMinFooter.style.fontSize = tamanhoFooter + "%"
    fonteMaxMinPag.style.fontSize = tamanhoFooter + "%"
    fonteMaxMinBtn.style.fontSize = tamanhoBtn1 + "%"
    fonteMaxMinBtn2.style.fontSize = tamanhoBtn2 + "%"
})


btnMinFonte.addEventListener('click', () => {
    if(tamanhoAtualNav >= 50 ) tamanhoAtualNav -= 10
    if(tamanhoAtualHeader >= 50) tamanhoAtualHeader -= 10
    if(tamanhoAtualT1 >= 100) tamanhoAtualT1 -= 30
    if(tamanhoAtualT2 >= 100) tamanhoAtualT2 -= 30
    if(tamanhoAtualT3 >= 100) tamanhoAtualT3 -= 20
    if(tamanhoAtualT4 >= 50) tamanhoAtualT4 -= 10
    if(tamanhoAtualT5 >= 50) tamanhoAtualT5 -= 10
    if(tamanhoAtualT6 >= 50) tamanhoAtualT6 -= 20
    if(tamanhoAtualT7 >= 50) tamanhoAtualT7 -= 10
    if(tamanhoAtualT8 >= 50) tamanhoAtualT8 -= 10
    if(tamanhoAtualT9 >= 50) tamanhoAtualT9 -= 10
    if(tamanhoAtualT10 >= 50) tamanhoAtualT10 -= 20
    if(tamanhoAtualCard >= 50) tamanhoAtualCard -= 10
    if(tamanhoFooter >= 50) tamanhoFooter -= 10
    if(tamanhoPaginacao >= 50) tamanhoPaginacao -= 10
    if(tamanhoBtn1 >= 50) tamanhoBtn1 -= 10
    if(tamanhoBtn2 >= 50) tamanhoBtn2 -= 10
  
   
    fonteMaxMinNav.style.fontSize = tamanhoAtualNav + "%"
    fonteMaxMinHeader.style.fontSize = tamanhoAtualHeader + "%"
    fonteMaxMinT1.style.fontSize = tamanhoAtualT1 + "%"
    fonteMaxMinT2.style.fontSize = tamanhoAtualT2 + "%"
    fonteMaxMinT3.style.fontSize = tamanhoAtualT3 + "%"
    fonteMaxMinT4.style.fontSize = tamanhoAtualT4 + "%"
    fonteMaxMinT5.style.fontSize = tamanhoAtualT5 + "%"
    fonteMaxMinT6.style.fontSize = tamanhoAtualT6 + "%"
    fonteMaxMinT7.style.fontSize = tamanhoAtualT7 + "%"
    fonteMaxMinT8.style.fontSize = tamanhoAtualT8 + "%"
    fonteMaxMinT9.style.fontSize = tamanhoAtualT9 + "%"
    fonteMaxMinT10.style.fontSize = tamanhoAtualT10 + "%"
    fonteCard.forEach((el) => el.style.fontSize = tamanhoAtualCard + "%")
    fonteMaxMinFooter.style.fontSize = tamanhoFooter + "%"
    fonteMaxMinPag.style.fontSize = tamanhoFooter + "%"
    fonteMaxMinBtn.style.fontSize = tamanhoBtn1 + "%"
    fonteMaxMinBtn2.style.fontSize = tamanhoBtn2 + "%"
})


