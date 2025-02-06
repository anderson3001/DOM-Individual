function criaFeedback(){
    event.preventDefault()//pra nao atualizar a pagina
    let nome = document.querySelector("#nome");//pega o nome e o feedback do usuario
    let texto = document.querySelector("#texto");
    let feedbacks = document.querySelector(".feedbacks")//pega o escopo maior
    let div = document.createElement("div");//cria nova div
    let usuario = document.createElement("h2");//cria os elementos pro nome e feedbacks do usuario na div
    let feedbackFinal = document.createElement("p");
    usuario.innerText = nome.value;
    feedbackFinal.innerText = texto.value;
    div.classList.add("usuarios")//coloca class na div
    div.append(usuario);
    div.append(feedbackFinal);
    feedbacks.append(div);
}
let enviar = document.querySelector("#Enviar");
enviar.addEventListener("click", criaFeedback)
