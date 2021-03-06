
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const outputNomeJogador = document.getElementById("nome-jogador")
const outputNomeJogadorModal = document.getElementById("nome-jogador-modal")
const cardUm =document.querySelector("#cardUm")
const cardDois = document.querySelector("#cardDois")
const cardTres = document.querySelector("#cardTres")
const cardQuatro =document.querySelector("#cardQuatro")
const cardCinco = document.querySelector("#cardCinco")
const cardSeis = document.querySelector("#cardSeis")
const modalBtn = document.querySelector(".modal-btn")
const modalBg = document.querySelector(".modal-bg")
const resultP = document.querySelector(".resultP")

const arrayCardsPc = ["cardUm","cardDois","cardTres"]

let userName = urlParams.get("name")
outputNomeJogador.innerHTML=userName
outputNomeJogadorModal.innerHTML=userName
console.log(userName)

modalBtn.addEventListener("click",function(){
    console.log("clicked on modal");
    modalBg.classList.remove("bg-active")
    reset();
    resultP.innerHTML="";
})

function showModal(message){
    modalBg.classList.add("bg-active")
    //let p = document.createElement("p")
    resultP.innerHTML=message;  
  

}

function cardRandomico(arrayCardsPc){
    let cardRandomico = arrayCardsPc[Math.floor(Math.random() * (3 - 0)) + 0];
    return cardRandomico
}

function currentPcToString(currentPc){
    if(currentPc === "cardUm"){
        currentPc = "pedra"
    } else if (currentPc === "cardDois"){
        currentPc = "papel"
    } else {
        currentPc = "tesoura"
    }

    return currentPc
}


function currentEscolhaToString(currentEscolha){
    if (currentEscolha === "cardQuatro"){
        currentEscolha = "pedra"
    } else if (currentEscolha === "cardCinco"){
        currentEscolha = "papel"
    } else if (currentEscolha === "cardSeis"){
        currentEscolha = "tesoura"
    } 
    return currentEscolha
}

function winOrLose(currentEscolha,currentPc){
    let message = ""
  if (currentEscolha === currentPc){
     message ="A partida deu empate!!"
  } else if (currentEscolha === "pedra" && currentPc === "papel"){
      message ="Voc?? Perdeu!!"
  } else if (currentEscolha === "pedra" && currentPc === "tesoura"){
      message ="Voc?? Ganhou!!"
  } else if (currentEscolha === "papel" && currentPc === "tesoura"){
      message ="Voc?? Perdeu!!"
  } else if (currentEscolha === "papel" && currentPc === "pedra"){
      message ="Voc?? Ganhou!!"
  } else if (currentEscolha === "tesoura" && currentPc === "pedra"){
      message ="Voc?? Perdeu!!"
  } else if (currentEscolha === "tesoura" && currentPc === "papel"){
      message ="Voc?? Ganhou!!"
  }
  return message
}


function reset(){
    if (!cardUm.classList.contains("flip")){
          cardUm.classList.toggle("flip")
    }if(!cardDois.classList.contains("flip")){
        cardDois.classList.toggle("flip")
    }if(!cardTres.classList.contains("flip")){
        cardTres.classList.toggle("flip")
    }if(!cardQuatro.classList.contains("flip")){
        cardQuatro.classList.toggle("flip")
    }if(!cardCinco.classList.contains("flip")){
        cardCinco.classList.toggle("flip")
    }if(!cardSeis.classList.contains("flip")){
        cardSeis.classList.toggle("flip")
    }
}

cardQuatro.addEventListener("click",(e)=>{
    console.log("clicked card 4");
    let currentId = e.currentTarget.id
    let currentPc = ""
    let currentEscolha = e.currentTarget.id 

    if (cardRandomico(arrayCardsPc).valueOf() === cardUm.id){
        if (cardUm.classList.contains("flip")){
            cardUm.classList.toggle("flip")
        }
         
         if (!cardDois.classList.contains("flip")){
             cardDois.classList.toggle("flip")
         }
         if (!cardTres.classList.contains("flip")){
             cardTres.classList.toggle("flip")
         }
         currentPc = cardUm.id
     
    }else if (cardRandomico(arrayCardsPc).valueOf() === cardDois.id){
        if (cardDois.classList.contains("flip")){
          cardDois.classList.toggle("flip")
        }
        if (!cardTres.classList.contains("flip")){
             cardTres.classList.toggle("flip")
         }
         if (!cardUm.classList.contains("flip")){
             cardUm.classList.toggle("flip")
         }
         currentPc = cardDois.id
    

    } else {
        if (cardTres.classList.contains("flip")){
          cardTres.classList.toggle("flip")
        }
      
         if (!cardDois.classList.contains("flip")){
             cardDois.classList.toggle("flip")
         }
         if (!cardUm.classList.contains("flip")){
             cardUm.classList.toggle("flip")
         }
         currentPc = cardTres.id
    }
              
      if (!cardQuatro.classList.contains("flip")) {
          cardQuatro.classList.toggle("flip")
      }
      if (cardCinco.classList.contains("flip")){
          cardCinco.classList.toggle("flip")
      }
      if (cardSeis.classList.contains("flip")){
          cardSeis.classList.toggle("flip")
      }
  
      currentPc = currentPcToString(currentPc)
      currentEscolha = currentEscolhaToString(currentEscolha)
     
       showModal(winOrLose(currentEscolha,currentPc))

  })


  cardCinco.addEventListener("click",(e)=>{
    let currentId = e.currentTarget.id
    let currentPc = ""
    let currentEscolha = e.currentTarget.id 


    if (cardRandomico(arrayCardsPc).valueOf() === cardUm.id){
      if (cardUm.classList.contains("flip")){
        cardUm.classList.toggle("flip")
      }
       
       if (!cardDois.classList.contains("flip")){
           cardDois.classList.toggle("flip")
       }
       if (!cardTres.classList.contains("flip")){
           cardTres.classList.toggle("flip")
       }
       currentPc = cardUm.id
  }else if (cardRandomico(arrayCardsPc).valueOf() === cardDois.id){
      if (cardDois.classList.contains("flip")){
        cardDois.classList.toggle("flip")
      }
    if (!cardTres.classList.contains("flip")){
           cardTres.classList.toggle("flip")
       }
       if (!cardUm.classList.contains("flip")){
           cardUm.classList.toggle("flip")
       }
       currentPc = cardDois.id

  } else {
      if (cardTres.classList.contains("flip")){
        cardTres.classList.toggle("flip")
      }
    
       if (!cardDois.classList.contains("flip")){
           cardDois.classList.toggle("flip")
       }
       if (!cardUm.classList.contains("flip")){
           cardUm.classList.toggle("flip")
       }
       currentPc = cardTres.id

  }

    if (!cardCinco.classList.contains("flip")) {
        cardCinco.classList.toggle("flip")
    }
    if (cardQuatro.classList.contains("flip")){
        cardQuatro.classList.toggle("flip")
    }
    if (cardSeis.classList.contains("flip")){
        cardSeis.classList.toggle("flip")
    }

    currentPc = currentPcToString(currentPc)
    currentEscolha = currentEscolhaToString(currentEscolha)
 
    showModal(winOrLose(currentEscolha,currentPc))
 
})

cardSeis.addEventListener("click",(e)=>{
    let currentId = e.currentTarget.id
    let currentPc = ""
    let currentEscolha = e.currentTarget.id 
   

    if (cardRandomico(arrayCardsPc).valueOf() === cardUm.id){
      if (cardUm.classList.contains("flip")){
        cardUm.classList.toggle("flip")
      }
       
       if (!cardDois.classList.contains("flip")){
           cardDois.classList.toggle("flip")
       }
       if (!cardTres.classList.contains("flip")){
           cardTres.classList.toggle("flip")
       }
       currentPc = cardUm.id
  }else if (cardRandomico(arrayCardsPc).valueOf() === cardDois.id){
      if (cardDois.classList.contains("flip")){
        cardDois.classList.toggle("flip")
      }
    if (!cardTres.classList.contains("flip")){
           cardTres.classList.toggle("flip")
       }
       if (!cardUm.classList.contains("flip")){
           cardUm.classList.toggle("flip")
       }
       currentPc = cardDois.id

  } else {
      if (cardTres.classList.contains("flip")){
        cardTres.classList.toggle("flip")
      }
    
       if (!cardDois.classList.contains("flip")){
           cardDois.classList.toggle("flip")
       }
       if (!cardUm.classList.contains("flip")){
           cardUm.classList.toggle("flip")
       }
       currentPc = cardTres.id

  }
  
    if (!cardSeis.classList.contains("flip")) {
        cardSeis.classList.toggle("flip")
    }
    if (cardQuatro.classList.contains("flip")){
        cardQuatro.classList.toggle("flip")
    }
    if (cardCinco.classList.contains("flip")){
        cardCinco.classList.toggle("flip")
    }
   
    currentPc = currentPcToString(currentPc)
    currentEscolha = currentEscolhaToString(currentEscolha)

    showModal(winOrLose(currentEscolha,currentPc))
})

