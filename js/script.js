
// Aparecer caixa de seleção para o metodo

var msg = document.getElementById('msg')
var metodo = document.getElementById('box')
msg.addEventListener('click', function() {
    metodo.style.display = 'flex';
})

//Aparecer incremento para Cifra e os radios para ambos 
var incremento = document.getElementById('number')
var codiedecodi = document.getElementById('box0')
var incrementar = metodo.addEventListener('click', function(){
    var codigo = document.getElementById('codigo').value
    if (codigo == "cifra") {
    incremento.style.display  = 'block';
    } else if (codigo == "base") { 
    codiedecodi.style.display ='block';
        }
})
incremento.addEventListener('click', function(){
    codiedecodi.style.display = 'block';
})

//Aparecer botão Decodificar ou Codificar
var codificar = document.getElementById('codifi')
var decodificar = document.getElementById('decodifi')
var botaocod = document.getElementById('buttoncod')
var botaodecod = document.getElementById('buttondecod')
codificar.addEventListener('click', function(){
    botaocod.style.display = 'block'
    botaodecod.style.display = 'none'
})
decodificar.addEventListener('click', function() {
    botaodecod.style.display = 'block'
    botaocod.style.display = 'none'
})

//Função Base64
function codBase64 () {
    var palavra = document.getElementById('msg').value
    codi = atob(palavra)
    return codi
}
function decBase64 () {
    var palavra = document.getElementById('msg').value
    decod = btoa(palavra)
    return decod
}

//Função Cifra de Cesar
function codCesar() {
    var palavra = document.getElementById('msg').value
   var numeroEscolhido = document.getElementById('number').value;
for (i=0;i<palavra.length;i++) {
   var ascii = palavra[i].charCodeAt()
    if (ascii > 64 && ascii < 91) {
   var palavraincrementada = ( ascii + numeroEscolhido);
    var codificada = String.fromCharCode(palavraincrementada); 
  resultado.innerText += (codificada);
} else if (ascii > 96 && ascii < 123) {
   var palavraincrementada = ( ascii + numeroEscolhido);
    var codificada = String.fromCharCode(palavraincrementada); 
  resultado.innerText += (codificada);
} else {
  resultado.innerText += (palavra[i]);
}
}
}

function decCesar () {
  var palavra = document.getElementById('msg').value
   var numeroEscolhido = document.getElementById('number').value;
for (i=0;i<palavra.length;i++) {
   var ascii = palavra[i].charCodeAt()
    if (ascii > 64 && ascii < 91) {
   var palavraincrementada = ( ascii - numeroEscolhido);
    var codificada = String.fromCharCode(palavraincrementada); 
  resultado.innerText += (codificada);
} else if (ascii > 96 && ascii < 123) {
   var palavraincrementada = ( ascii - numeroEscolhido);
    var codificada = String.fromCharCode(palavraincrementada); 
  resultado.innerText += (codificada);
} else {
  resultado.innerText += (palavra[i]);
}
}
}
//Aparecer mensagem codificada e decodificada
//Codificada

var resultado = document.getElementById('resultado')
botaocod.addEventListener('click', function(e){
    e.preventDefault();
    if(codificar.checked && codigo.value === "base"){
        resultado.innerText = codBase64();
        resultado.style.display = 'flex'
    } else if(codificar.checked && codigo.value === "cifra"){
        resultado.innerText = codCesar();
        resultado.style.display = 'flex'
       
        }
    })
//Decodificada

botaodecod.addEventListener('click', function(f) {
    f.preventDefault();
    if(decodificar.checked && codigo.value === "cifra"){
        resultado.innerText = decCesar();
        resultado.style.display = 'flex'
    } else if(decodificar.checked && codigo.value === "base"){
        resultado.innerText = decBase64();
        resultado.style.display = 'flex'
    }
})
