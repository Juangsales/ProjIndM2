
// Aparecer caixa de seleção para o metodo

var msg = document.getElementById('msg')
var metodo = document.getElementById('codigo')
msg.addEventListener('click', function() {
    metodo.style.display = 'block';
})

//Aparecer incremento para Cifra e os radios para ambos 
var incremento = document.getElementById('number')
var codiedecodi = document.getElementById('box0')
var incrementar = addEventListener('click', function(){
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
    var codigo = document.getElementById('msg').value
    codi = atob(codigo)
    return codi
}
function decBase64 () {
    var codigo = document.getElementById('msg').value
    decod = btoa(codigo)
    return decod
}

//Aparecer mensagem codificada e decodificada
//Codificada

var resultado = document.getElementById('resultado')
botaocod.addEventListener('click', function(e){
    e.preventDefault();
    if(codificar.checked && codigo.value === "base"){
        resultado.innerText = codBase64();
        resultado.style.display = 'block'
    } else if(codificar.checked && codigo.value === "cesar"){
        resultado.innerText = codCesar()
        resultado.style.display = 'block'
        }
    })
//Decodificada

botaodecod.addEventListener('click', function(f) {
    f.preventDefault();
    if(decodificar.checked && codigo.value === "cifra"){
        resultado.innerText = decCesar()
        resultado.style.display = 'block'
    } else if(decodificar.checked && codigo.value === "base"){
        resultado.innerText = decBase64();
        resultado.style.display = 'block'
    }
})