/*
1- adicionar um evento de escuta do usuário ao clicar na flecha
2- abrir a resposta correspondente
3- ao clicar em outra OU na mesma seta, exconder a resposta
*/

const campoSetas = document.querySelectorAll(".seta");
const respostas = document.querySelectorAll(".answer");

campoSetas.forEach((seta, indice) => {
    seta.addEventListener('click', () => {
        respostas[indice].classList.toggle("opened");

        if (respostas[indice].classList.contains("opened")) {
            seta.scr = "./src/images/seta-clicada.png";
        } else {
            seta.scr = "./src/images/seta.png";
        }

        respostas.forEach((resposta, i) => {
            if (i !== indice) {
                resposta.classList.remove("opened");
                campoSetas[i].src = "./src/images/seta.png";
            }
        })
    })
})


// const removerSetaFechada = document.querySelectorAll(".fechada");
// const adicionarSetaAberta = document.querySelectorAll(".aberta");
// removerSetaFechada[indice].classList.add("opened");
// adicionarSetaAberta[indice].classList.add("opened");

// adicionarSetaAberta.forEach((adicionarSetaAberta, removerSetaFechada, i) => {
//     if (i !== indice) {
//         removerSetaFechada.classList.remove("opened");
//         adicionarSetaAberta.classList.remove("opened");
//     }
// })
