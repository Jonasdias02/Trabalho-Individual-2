var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var cesarNumber = document.querySelector(".cesarNumber");
var opcaoCesar = document.querySelector("#cesar");
var opcao64 = document.querySelector("#b64");
var texto = textInput.value;

console.log(textInput.value);

function someCesar() {
    if (opcaoCesar.checked) {
        cesarNumber.style.display = 'flex';
    }else{
        cesarNumber.style.display = 'none';
    }   
}

function criptografar(){

 if (opcaoCesar.checked) {
  
 cesar(textInput.value, parseInt(cesarNumber.value));
  
 var resultCripto = saida
 console.log(textInput.value);


  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}



if (opcao64.checked) {
  
   codaBase64(textInput.value)
  let resultCripto = saida;
  console.log(saida);
 
 
   document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
   '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
 }
}

function descriptografar(){

    
    if (opcaoCesar.checked) {
  
        decifraCesar(textInput.value, parseInt(cesarNumber.value));
         
        var resultCripto = saida
        console.log(textInput.value);
       
       
         document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
         '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
       }
    if (opcao64.checked) {
  
        decifraBase64(textInput.value)
        let resultCripto = saida;
        console.log(saida);
      
      
        document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
      }
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// numero válido
const regexNumber = /[0-9]/;
function aceitaNumero(){
  if(!regexNumber.test(cesarNumero.value)){
      cesarNumero.style.border = '5px solid red';
      cesarNumero.placeholder = 'Insira um Numero!';
  }else {
      cesarNumero.style.border = '5px solid #04F404';
  }
}

let saida = '';
let cifra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let maiusculo = /[A-Z]/;
// funçao de codificar cesar
function cesar(cifraCesar, quantidade) {
  let palavra = [];
  let palavraComoArr = cifraCesar.split('');
  const testRg = (/[a-zA-Z]/);
  for (let i = 0; i < palavraComoArr.length; i++) {
      if(testRg.test(palavraComoArr[i])){
          for (let y = 0; y < cifra.length; y++) {
              if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                  if(Math.sign(y + quantidade) == -1){
                      let calc = cifra.length + ((y + quantidade)%cifra.length)
                      palavra += cifra[calc].toUpperCase();
                  }else{
                      palavra += cifra[(y + quantidade)%cifra.length].toUpperCase();
                  }
              }else if(palavraComoArr[i] === cifra[y]){
                  if(Math.sign(y + quantidade) == -1){
                      let calc = cifra.length + ((y + quantidade)%cifra.length)
                      palavra += cifra[calc];
                  }else{
                      palavra += cifra[(y + quantidade)%cifra.length]
                  }
            }
          }
      }else {
          palavra += palavraComoArr[i];
      }
  }
  if(palavra.match(/undefined/)){
      palavra = '';
  }
  saida = palavra;
  return saida;
}
// função de decodificar cesar
function decifraCesar(cifrado, quantidade) {
  let palavra = [];
  let palavraComoArr = cifrado.split('');
  const testRg = (/[a-zA-Z]/);
  for (let i = 0; i < palavraComoArr.length; i++) {
      if(testRg.test(palavraComoArr[i])){
          for (let y = 0; y < cifra.length; y++) {
              if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                  if(Math.sign(y - quantidade) == -1){
                      let calc = cifra.length + ((y - quantidade)%cifra.length)
                      palavra += cifra[calc].toUpperCase();
                  }else{
                      palavra += cifra[(y - quantidade)%cifra.length].toUpperCase();
                  }
              }else if(palavraComoArr[i] === cifra[y]){
                  if(Math.sign(y - quantidade) == -1){
                      let calc = cifra.length + ((y - quantidade)%cifra.length)
                      palavra += cifra[calc];
                  }else{
                      palavra += cifra[(y - quantidade)%cifra.length]
                  }
              }
          }
      }else {
          palavra += palavraComoArr[i];
      }
  }
  if(palavra.match(/undefined/)){
      palavra = '';
  }
  saida = palavra;
  return saida;
}

// texto para base64
function codaBase64(texto) {
  saida = btoa(texto);
  return
}

//  base64 para texto
function decifraBase64(texto) {
  saida = atob(texto);
  return 
}