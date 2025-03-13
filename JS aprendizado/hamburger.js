const hamburger = {
  preco: 15.00,
  calorias: 500,
  peso: 3000
};
let disconto = 0.5
// preço tem que ter "RS" + ni inicio

console.log("R$" + hamburger.preco*2+" "+" Preço de duas unidades");

console.log("R$"+ hamburger.preco * disconto +" "+ "Preço com disconto");

// calorias tem +"cal" no final

console.log(hamburger.calorias+"cal"+" "+"por unidade*");

//depois de colocar a condição do if coloque {} e defina o que tu quer que ele faça na condição
// if condição {ação} tipo isso

if (hamburger.peso<1000){
console.log(hamburger.peso+"g"+" "+"por unidade*");
}

else
{console.log(hamburger.peso/1000+"kg"+" "+"por unidade*")}
