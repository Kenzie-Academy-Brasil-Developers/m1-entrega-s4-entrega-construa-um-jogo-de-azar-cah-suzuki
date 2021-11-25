
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const outputNomeJogador = document.getElementById("nome-jogador")
const outputNomeJogadorModal = document.getElementById("nome-jogador-modal")


let userName = urlParams.get("name")
outputNomeJogador.innerHTML=userName
outputNomeJogadorModal.innerHTML=userName






