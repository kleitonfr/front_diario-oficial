/* document.addEventListener('DOMContentLoaded', () => {
    const observar = new IntersectionObserver((elementos) => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) { 
                elemento.target.classList.add('show')
            }
            else {
                elemento.target.classList.remove('show')
                elemento.target.classList.add('hidden')
            }
        })
    })

    document.querySelectorAll('.hidden').forEach(elemento => observar.observe(elemento));

})
*/


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



