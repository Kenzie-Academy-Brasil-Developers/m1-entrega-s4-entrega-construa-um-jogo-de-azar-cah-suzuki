
const inputUserName = document.querySelector("#username");
const inputLink1 = document.querySelector("#link1");

let inputLink1Value = inputLink1.href

function handleChange(){
    inputLink1.href = inputLink1Value + "?name=" + inputUserName.value
    console.log(inputLink1.href)
}

inputUserName.addEventListener('change', handleChange);