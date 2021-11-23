function results(win, defeat){
    if(win){
        return "Parabéns";
    }
    else{
        return "Tente Novamente.";
    }
}

const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault() //previne form de atualizar
    
    let username = document.getElementById('username').value
    //console.log(username) // verificar se os nomes estão sendo guardados
})
