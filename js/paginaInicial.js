
const inputUserName = document.querySelector("#username");
const inputLink1 = document.querySelector("#link1");
const inputLink2 = document.querySelector("#link2")

let inputLink1Value = inputLink1.href
let inputLink2Value = inputLink2.href

function handleChange(){
    inputLink1.href = inputLink1Value + "?name=" + inputUserName.value
    console.log(inputLink1.href)
    inputLink2.href = inputLink2Value + "?name=" + inputUserName.value
    console.log(inputLink2.href)
}

inputUserName.addEventListener('change', handleChange);