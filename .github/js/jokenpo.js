
// Localiza os parametros passados na URL e já me retorna o equivalente ao name 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let userName = urlParams.get("name")
console.log(userName)



// function numeroAleatorio(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numeroAleatorio(1,10))




const inputUserName = document.querySelector("#username");
const inputLink1 = document.querySelector("#link1");

let inputLink1Value = inputLink1.href

function handleChange(){
    inputLink1.href = inputLink1Value + "?name=" + inputUserName.value
    console.log(inputLink1.href)
}

inputUserName.addEventListener('change', handleChange);

// const cardUm = document.querySelector("#cardUm")
// cardUm.addEventListener("click",(e)=>{
//     cardUm.classList.toggle("flip")
// })





