// Localiza os parametros passados na URL e já me retorna o equivalente ao name 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let userName = urlParams.get("name")
console.log(userName)