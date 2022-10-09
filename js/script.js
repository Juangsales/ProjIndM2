//Variaveis

var base64 = document.getElementById('base')
var cifracesar = document.getElementById('cesar')
var incremento = document.getElementById('number')
var codiedecodi = document.getElementById('box0')
var codificar = document.getElementById('codifi')
var decodificar = document.getElementById('decodifi')
var botaocod = document.getElementById('buttoncod')
var botaodecod = document.getElementById('buttondecod')


//Seelcionando Base64
base64.addEventListener('click', function(b) {
    codiedecodi.style.display = 'block'
})

//Selecionando Cifra de Cesar e colocar incremento
cifracesar.addEventListener('click', function(cc) {
    incremento.style.display = 'block'
})
incremento.addEventListener('click', function(i) {
    codiedecodi.style.display = 'block'
})

//Aparecer botão de codificar e decodificar
codificar.addEventListener('click', function(bc) {
    botaocod.style.display = 'block'
})
decodificar.addEventListener('click', function(bd) {
    botaodecod.style.display = 'block'
})

//Função Base64
function codBase64() {
  var mensagem = document.getElementById('msg')
.value
        var codificado = btoa(mensagem)
        return codificado
}
    function decBase64(){
      var mensagem = document.getElementById('msg')
.value
      var decodificado = atob(mensagem)
        return decodificado
}

//Trabalhar com a mensagem
//No Base64

botaocod.addEventListener('click', function(c) {
   c.preventDefault();
    if (base64.checked && codificar.checked) {
    resultado.innerHTML = codBase64();
    resultado.style.display = 'block'
  }
})

  botaodecod.addEventListener('click', function(dc) {
    dc.preventDefault();
    if (base64.checked && decodificar.checked) {
    resultado.innerHTML = decBase64();
      resultado.style.display = 'block'
  } 
})
//no Cifra de Cesar
