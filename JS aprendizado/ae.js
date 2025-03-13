/* null == sem valor
undefined == o javascript não conseguiu coisar o valor*/
console.log(typeof 1.5) //number ou float
console.log(typeof 1)//int
console.log(typeof true)//bolean
console.log(typeof "texto")//String

// três === é comparação EXATA
console.log(null == undefined)

//o ++ depois da variavel é para o loop nãO SER infinito
let rondonia = 4
while (rondonia < 5){
    console.log("RONDÔNIA É MENOR QUE CINCO!");
    rondonia++;
}

// começa como 0, menor que 100 continua e quando chega no valor definido para
for  (let i = 0; i <= 100; i++){
    console.log(i)
}

/* começa como 0, menor que 100 continua, e quando chega no valor definido como teto
ela para */

const amor =()=> {for  (let i = 0; i <= 100; i++){
    //document.writeln serve pra dizer para o site, "Escreva isso;"
    document.writeln("Eu quero que você se foda "+ i+"%<br>")
};}
//executa a constante
amor();