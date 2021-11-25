
// Localiza os parametros passados na URL e já me retorna o equivalente ao name 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let userName = urlParams.get("name")
console.log(userName)

const outputNomeJogador = document.getElementById("nome-jogador")
outputNomeJogador.innerHTML=userName




// function numeroAleatorio(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numeroAleatorio(1,10))





// const cardUm = document.querySelector("#cardUm")
// cardUm.addEventListener("click",(e)=>{
//     cardUm.classList.toggle("flip")
// })





