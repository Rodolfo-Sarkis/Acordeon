const campoSetas = document.querySelectorAll('.seta')
const respostas = document.querySelectorAll('.answer')

campoSetas.forEach((seta, indice) => {
    seta.addEventListener('click', () => {
        respostas[indice].classList.toggle('opened')

        if (respostas[indice].classList.contains('opened')) {
            seta.src = "./src/images/seta-clicada.png"
        } else {
            seta.src = "./src/images/seta.png"
        }

        respostas.forEach((resposta, i) => {
            if (i !== indice) {
                resposta.classList.remove('opened')
                campoSetas[i].src = "./src/images/seta.png"
            }
        })
    })
})