
let botaoSoma = document.getElementById('soma').addEventListener('click', ()=>{
    let numero1 =  Number(document.getElementById('n1').value)
    let numero2 = Number(document.getElementById('n2').value) 
    let visorCalculadora = document.getElementById('visor')
    visorCalculadora.textContent = `${numero1 + numero2}`
})


let botaoSubtração = document.getElementById('subt').addEventListener('click', ()=>{
    let numero1 =  Number(document.getElementById('n1').value)
    let numero2 = Number(document.getElementById('n2').value)
    let visorCalculadora2 = document.getElementById('visor')
    visorCalculadora2.textContent = `${numero1 - numero2}`
})

let botaoMultiplicacao = document.getElementById('mult').addEventListener('click', ()=>{
    let numero1 =  Number(document.getElementById('n1').value)
    let numero2 = Number(document.getElementById('n2').value)
    let visorCalculadora3 = document.getElementById('visor')
    visorCalculadora3.textContent = `${numero1 * numero2}`
})

let botaoDivisao = document.getElementById('div').addEventListener('click', ()=>{
    let numero1 =  Number(document.getElementById('n1').value)
    let numero2 = Number(document.getElementById('n2').value)
    let visorCalculadora4 = document.getElementById('visor')
    visorCalculadora4.textContent = `${numero1 / numero2}`
})