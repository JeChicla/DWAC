let resultado;
let x = 3;

if (x < 40) {
  resultado = "livro é barato.";
} else {
  resultado = "livro nao é barato"
}

console.log(resultado)
console.log(x === 3);

let meuObjeto = {
  nome : 'julia siodaro',
  idade : 18
}
console.log(meuObjeto)

const seta = (entrada)=> {
  return entrada + 33;
}
const array = [21,34, 'Je',[32, 52]]

function func2(entrada){
  let r;
  let resultado
  if (entrada % 2 === 0){
    r = 'par';
  } else{
    r = 'impar';
  }
  return r
  
}
array.forEach((el) => console.log(el))

const funcimprime = (ele,indice) => console.log("indice",indice, ":", ele)
