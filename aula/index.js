calculadoraDePartidas(12,8)

function calculadoraDePartidas(vitorias, derrotas){

let saldoVitorias = vitorias - derrotas
let nivel = ""

    if (saldoVitorias <10 ){
      nivel = "ferro"
    }
    else if(saldoVitorias >10 && vitorias <= 20){
      nivel = "bronze"
    }
    else if(saldoVitorias >20 && vitorias <= 50){
      nivel = "prata"
    }
    else if(saldoVitorias >50 && vitorias <= 80){
      nivel = "ouro"
    }
    else if(saldoVitorias >80 && vitorias <= 90){
      nivel = "diamante"
    }
    else if(saldoVitorias >90 && vitorias <= 100){
      nivel = "lendario"
    }
    else{
      nivel = "imortal"
    }
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}