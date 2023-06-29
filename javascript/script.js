const input = document.querySelector('#calculo')
const btnIgual = document.querySelector('.btn-igual')
const btnLimpar = document.querySelector('.btn-c')
const btnNove = document.querySelector('.btn-9')
const btnOito = document.querySelector('.btn-8')
const btnSete = document.querySelector('.btn-7')
const btnSeis = document.querySelector('.btn-6')
const btnCinco = document.querySelector('.btn-5')
const btnQuatro = document.querySelector('.btn-4')
const btnTres = document.querySelector('.btn-3')
const btnDois = document.querySelector('.btn-2')
const btnUm = document.querySelector('.btn-1')
const btnZero = document.querySelector('.btn-0')
const btnMais = document.querySelector('.btn-mais')
const btnMenos = document.querySelector('.btn-menos')
const btnDividir = document.querySelector('.btn-dividir')
const btnMultiplicar = document.querySelector('.btn-x')
const btnPonto = document.querySelector('.btn-ponto')



function caracterNumericoNaTela(caracter){

    input.value += caracter

}

function caracterAritmeticoNaTela(caracter){
    
    if(input.value === ''){
        console.log('')
    }else{
        
        input.value += caracter

        }
    }



function limparTela(){

    input.value = ''
}


function calcular(){

    let resultado = eval(input.value)
    
            if(parseInt(resultado) != parseFloat(resultado)){

                input.value = resultado.toFixed(2)

            }else{

                input.value = resultado

            }
    
}





btnNove.addEventListener('click',()=>{caracterNumericoNaTela('9')})
btnOito.addEventListener('click',()=>{caracterNumericoNaTela('8')})
btnSete.addEventListener('click',()=>{caracterNumericoNaTela('7')})
btnSeis.addEventListener('click',()=>{caracterNumericoNaTela('6')})
btnCinco.addEventListener('click',()=>{caracterNumericoNaTela('5')})
btnQuatro.addEventListener('click',()=>{caracterNumericoNaTela('4')})
btnTres.addEventListener('click',()=>{caracterNumericoNaTela('3')})
btnDois.addEventListener('click',()=>{caracterNumericoNaTela('2')})
btnUm.addEventListener('click',()=>{caracterNumericoNaTela('1')})
btnZero.addEventListener('click',()=>{caracterNumericoNaTela('0')})

btnDividir.addEventListener('click',()=>{caracterAritmeticoNaTela('/')})
btnMultiplicar.addEventListener('click',()=>{caracterAritmeticoNaTela('*')})
btnMenos.addEventListener('click',()=>{caracterAritmeticoNaTela('-')})
btnMais.addEventListener('click',()=>{caracterAritmeticoNaTela('+')})
btnPonto.addEventListener('click',()=>{caracterAritmeticoNaTela('.')})


btnLimpar.addEventListener('click',limparTela)

btnIgual.addEventListener('click',calcular)

