//funcao que gera uma letra aleatória de a-z
function randomLetter (){
    min = 97;
    max = 123;
    let letra = Math.floor(Math.random() * (max - min)) + 97;
    return String.fromCharCode(letra)
}

//funcao que cria um array bidimensional 10x10 com letras aleatorias 
function tabela(){
    const arrMulti = []
    for(let i = 0 ; i < 10 ; i++){
        arrMulti[i] = []
        for(let j = 0; j < 10 ;j ++){
            arrMulti[i].push(randomLetter())
        }
    }
    console.table(arrMulti)
    return arrMulti
}


let palavras = ['bigbang', 'cosmos','universo','estrela','explosão','andromeda']




let tal = tabela()
let randomNum = () => Math.floor(Math.random()*9)
// let r = randomNum()
// let segr = randomNum()

//funcao que verifica se a palavra cabe no espaço horizontal ou vertical 
function palavraTabela(){
    let r = randomNum()
    let segr = randomNum()
    let test = palavras[Math.floor(Math.random()* palavras.length)].split('')
//teste na diagonal 
while(test.length + r > tal.length-1){
    r = randomNum()
}

while(test.length + segr > tal.length-1){
    segr = randomNum()
}
console.log(r)
console.log(segr)
//loop que joga cada letra da string dentro do array 

for(let i = 0 ; i < test.length; i++){
    tal[r+i][segr+i] = test[i]
}
    ind = 0 
console.table(tal)
}

// test.length + r < tal[r].length-1

// for(let i of tabela)


