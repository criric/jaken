var elementos = document.querySelectorAll(".player div img");
var selecaoOPT = "";
var inimigoOPT = "";
const OpcoesInimigo = document.querySelectorAll(".enemy div > img");


function winner(){
    let vencedor = document.querySelector(".vencedor");

    if(selecaoOPT == "rock"){
        if(inimigoOPT == "rock"){
            //Empate
            vencedor.innerHTML = "Empatou!";
        }else if(inimigoOPT == "paper"){
            //Perdeu
            vencedor.innerHTML = "Perdeu :(";
        }else if(inimigoOPT == "scisor"){
            //ganhou
            vencedor.innerHTML = "GANHOOOU!!!";
        }
    }

    if(selecaoOPT == "paper"){
        if(inimigoOPT == "rock"){
            //ganhou
            vencedor.innerHTML = "GANHOOOU!!!";
        }else if(inimigoOPT == "paper"){
            //empate
            vencedor.innerHTML = "Empatou!";
        }else if(inimigoOPT == "scisor"){
            //perdeu
            vencedor.innerHTML = "Perdeu :(";
        }
    }

    if(selecaoOPT == "scisor"){
        if(inimigoOPT == "rock"){
            //perdeu
            vencedor.innerHTML = "Perdeu :(";
        }else if(inimigoOPT == "paper"){
            //ganhou
            vencedor.innerHTML = "GANHOOOU!!!";
        }else if(inimigoOPT == "scisor"){
            //empate
            vencedor.innerHTML = "Empatou!";
        }
    }
}


function resetarOpacidade(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.5;
            
        }
    }

function jogadaInimigo(){
    let random = Math.floor(Math.random()*3);
    resetar();
    for(var i = 0; i < OpcoesInimigo.length; i++){
        if(i == random){
            OpcoesInimigo[i].style.opacity = 1;
        }
    }
}


function resetar(){
    for(var i = 0; i < OpcoesInimigo.length; i++){
        OpcoesInimigo[i].style.opacity = 0.5;
        inimigoOPT = OpcoesInimigo[i].getAttribute("opt");
        }
}



for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click", (t)=>{
        resetarOpacidade();
        t.target.style.opacity = 1;
        selecaoOPT = t.target.getAttribute("opt");
        jogadaInimigo();
        winner();
    })

    
}
