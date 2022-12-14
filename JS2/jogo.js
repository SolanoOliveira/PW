console.log("Escolha sua jogada")
console.log("1 - papel")
console.log("2 - pedra")
console.log("3 - tesoura")

pc = [1,2,3];

//let ufam = {
  //  nome: "Universidade Federal do Amazonas",
    //fundacao: 1909,
    //ativa: true,
    //imprime: function () {
    //console.log(this.name);
    //},

let jogada = parseInt(prompt());
let pontuacao = 0;
let fim = true

let jogada2 = pc[Math.floor(Math.random()*pc.length)];

 while(jogada == 1 || jogada == 2 || jogada == 3){

    if(jogada == 1 && jogada2 == 2){
        console.log("O computador jogou pedra")
        console.log("Você ganhou!")
        pontuacao = pontuacao + 1
    }

    if(jogada == 1 && jogada2 == 3){
        console.log("O computador jogou tesoura")
        break
    }

    if(jogada == 1 && jogada2 == 1){
        console.log("O computador jogou papel")
        console.log("A rodada empatou")
    }


    if(jogada == 2 && jogada2 == 3){
        console.log("O computador jogou tesoura")
        console.log("Você ganhou!")
        pontuacao = pontuacao + 1
    }

    if(jogada == 2 && jogada2 == 1){
        console.log("O computador jogou papel")
        break
    }

    if(jogada == 2 && jogada2 == 2){
        console.log("O computador jogou pedra")
        console.log("A rodada empatou")
    }

    if(jogada == 3 && jogada2 == 1){
        console.log("O computador jogou papel")
        console.log("Você ganhou!")
        pontuacao = pontuacao + 1
    }

    if(jogada == 3 && jogada2 == 2){
        console.log("O computador jogou pedra")
        break
    }
    
    if(jogada == 3 && jogada2 == 2){
        console.log("O computador jogou tesoura")
        console.log("A rodada empatou")
    }



    console.log("Escolha sua jogada")
    console.log("1 - papel")
    console.log("2 - pedra")
    console.log("3 - tesoura")

    jogada = parseInt(prompt());
    jogada2 = pc[Math.floor(Math.random()*pc.length)];

 }

 console.log("Você perdeu! A sua pontuacao foi de " + pontuacao)
