let main = document.querySelector('#cacapalavras')

// array de possiveis palavras 
let palavrasRaiz = ['bigbang', 'cosmos','universo','estrela','explosão','andromeda']

//array para add as palavras selecionadas pelo jogador
let palavrasSelecionadas = []
let resposta = ''
let score = []
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

let tal = tabela()
let randomNum = () => Math.floor(Math.random()*9)

//funcao que verifica se a palavra cabe no espaço horizontal ou vertical 
function palavraTabela(){
    let palavras = [...palavrasRaiz]
    let linha = randomNum()
    let coluna = randomNum()
    let test = palavras.splice([Math.floor(Math.random()* palavras.length)],1).join('').split('')
    palavrasSelecionadas.push(test.join(''))
    


//teste para averiguar se a palavra cabe na diagonal
while(test.length + linha > tal.length-1){
    linha = randomNum()
}

while(test.length + coluna > tal.length-1){
    coluna = randomNum()
}

//loop que joga cada letra da string dentro do array 
let letrasUsadas = []
for(let i = 0 ; i < test.length; i++){
    tal[linha+i][coluna+i] = test[i]
    letrasUsadas.push([linha+i,coluna+i])
}

//escolher nova palavra aleatoria na horizontal 
    test = palavras.splice([Math.floor(Math.random()* palavras.length)],1).join('').split('')
    linha2 = randomNum()
    coluna2 = randomNum()
    letrasUsadas2 = []
    palavrasSelecionadas.push(test.join(''))


    //condicional para evitar que que a palavra na horizontal sobscreva a na diagonal 
    if(linha2 >= letrasUsadas[0][0] && letrasUsadas[0][0] > 0){
        linha2 = letrasUsadas[0][0]-1
    }else{
        linha2 = letrasUsadas[letrasUsadas.length-1][0]+1
    }

    //loop que averigua se a palavra pode sair fora do grid 10x10 e ajusta sua posiçao
    while(test.length + coluna2 > tal.length-1 ){ 
        coluna2 = randomNum()
    }

    //loop criar palavra na horizontal 
    for(let i = 0 ; i < test.length; i++){
        tal[linha2][coluna2+i] = test[i]
        letrasUsadas2.push([linha2,coluna2+i])
    }

       
    
    //averiguar qual das colunas vem primeiro, para evitar conflito na hora de adicionar a palavra na vertical 
    let primeiracol
    let lastcol
    if(letrasUsadas[0][1] <= letrasUsadas2[0][1]){
        primeiracol = letrasUsadas[0][1]
    }else{
        primeiracol = letrasUsadas2[0][1]
    }

    if(letrasUsadas[letrasUsadas.length-1][1] >= letrasUsadas2[letrasUsadas2.length-1][1]){
        lastcol = letrasUsadas[letrasUsadas.length-1][1]
    }else{
        lastcol = letrasUsadas2[letrasUsadas2.length-1][1]
    }

    let colvertical
    
    if(primeiracol <=0){
        colvertical = lastcol+1
    }else{
        colvertical = primeiracol -1
    }

    //------------------------------------------

    //escolher nova palavra aleatoria na vertical
    test = palavras.splice([Math.floor(Math.random()* palavras.length)],1).join('').split('')
    linha3 = randomNum()
    coluna3 = colvertical
    letrasUsadas3 = []
    palavrasSelecionadas.push(test.join(''))


    while(test.length + linha3 > tal.length - 1){
        linha3 = randomNum()
    }
    

    //loop criar palavra na vertical
    for(let i = 0 ; i < test.length; i++){
        tal[linha3+i][coluna3] = test[i]
        letrasUsadas3.push([linha2,coluna2+i])
    }

    console.table(tal)
    console.log('primeiro loop' ,linha ,coluna)
    console.log('segundo loop' ,linha2 ,coluna2)
    console.log('terceiro loop ',linha3,coluna3)



    for(let i of tal){
        for(let j of i){
          let div = document.createElement('section')
          div.innerText = j
          main.appendChild(div)
        }
    }
      
    function winCondition(){
        if(score.length === 3){
            alert()
            reset()
        }
    }



    let divs = document.querySelectorAll('div')
    for(let i of divs){
        i.addEventListener('click',(e) => {
            let div = e.target
            div.style.backgroundColor= 'green'
            console.log(div.innerText)
            resposta += div.innerText
            if(palavrasSelecionadas.includes(resposta)){
                score.push(resposta)
                resposta = ''
            }
        })
        i.addEventListener('click',winCondition)
    }
}





function reset(){
    score = []
    let divs = document.querySelectorAll('section')
    for(let i of divs){
        main.removeChild(i)
        }
    tal = tabela()
    
    palavraTabela()
}




