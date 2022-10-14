// Aparecer caixa de seleção para o metodo

var msg = document.getElementById('mensagem')
var metodo = document.getElementById('box')
msg.addEventListener('click', function() {
    metodo.style.display = 'flex';
})

//Aparecer incremento para Cifra e os radios para ambos 
var incremento = document.getElementById('numero')
var codiedecodi = document.getElementById('box0')
var incrementar = addEventListener('click', function(){
    var codigo = document.getElementById('codigo').value
    if (codigo == "cifra") {
    incremento.style.display  = 'flex';
    } else if (codigo == "base") { 
    codiedecodi.style.display ='flex';
        }
})
incremento.addEventListener('click', function(){
    codiedecodi.style.display = 'flex';
})

//Aparecer botão Decodificar ou Codificar
var codificar = document.getElementById('codifi')
var decodificar = document.getElementById('decodifi')
var botaocod = document.getElementById('buttoncod')
var botaodecod = document.getElementById('buttondecod')
codificar.addEventListener('click', function(){
    botaocod.style.display = 'flex'
    botaodecod.style.display = 'none'
})
decodificar.addEventListener('click', function() {
    botaodecod.style.display = 'flex'
    botaocod.style.display = 'none'
})

//Função Base64
function codBase64 () {
    var codigo = document.getElementById('msg').value
    codi = atob(codigo)
    return codi
}
function decBase64 () {
    var codigo = document.getElementById('msg').value
    decod = btoa(codigo)
    return decod
}

//Função Cifra de Cesar

function codCesar() {
    var codigo = document.getElementById('msg').value;
    var incremento = incremento.value

for (i=0;i<codigo.length;i++) {
  
    var ascii = codigo[i].charCodeAt()
  
  if (ascii > 64 && ascii < 91) {
    var palavraincrementada = ( ascii + incremento);
    var codificada = String.fromCharCode(palavraincrementada);
    document.write(codificada)
  } else if (ascii > 96 && ascii < 123) {
    var palavraincrementada = ( ascii + incremento);
    var codificada = String.fromCharCode(palavraincrementada);
    document.write(codificada)
  } else {
    document.write(codigo[i]);
  }
}

function decCesar () {
        var codigo = document.getElementById('msg').value;
    var incremento = incremento.value

for (i=0;i<codigo.length;i++) {
  
    var ascii = codigo[i].charCodeAt()
  
  if (ascii > 64 && ascii < 91) {
    var palavraincrementada = ( ascii - incremento);
    var codificada = String.fromCharCode(palavraincrementada);
    document.write(codificada)
  } else if (ascii > 96 && ascii < 123) {
    var palavraincrementada = ( ascii - incremento);
    var codificada = String.fromCharCode(palavraincrementada);
    document.write(codificada)
  } else {
    document.write(codigo[i]);
  }
}
//Aparecer mensagem codificada e decodificada
//Codificada

var resultado = document.getElementById('resultado')
botaocod.addEventListener('click', function(e){
    e.preventDefault();
    if(codificar.checked && codigo.value === "base"){
        resultado.innerText = codBase64();
        resultado.style.display = 'block'
    } else if(codificar.checked && codigo.value === "cifra"){
        resultado.innerHTML = codCesar();
        resultado.style.display = 'block'
       
        }
    })
//Decodificada

botaodecod.addEventListener('click', function(f) {
    f.preventDefault();
    if(decodificar.checked && codigo.value === "cifra"){
        resultado.innerText = decCesar();
        resultado.style.display = 'block'
    } else if(decodificar.checked && codigo.value === "base"){
        resultado.innerText = decBase64();
        resultado.style.display = 'block'
    }
})
