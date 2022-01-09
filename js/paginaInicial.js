
const inputUserName = document.querySelector("#username");
const inputLink1 = document.querySelector("#link1");
const inputLink2 = document.querySelector("#link2")

let inputLink1Value = inputLink1.href
let inputLink2Value = inputLink2.href

function handleChange(){
    inputLink1.href = inputLink1Value + "?name=" + inputUserName.value
    inputLink2.href = inputLink2Value + "?name=" + inputUserName.value
}

inputUserName.addEventListener('change', handleChange);