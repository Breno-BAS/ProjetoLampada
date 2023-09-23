const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function verificacaoLampadaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function lampadaOn(){
    if(!verificacaoLampadaQuebrada()){
    lampada.src = './img/ligada.jpg';
    }
}
function lampadaOff(){
    if(!verificacaoLampadaQuebrada()){
    lampada.src = './img/desligada.jpg'
    }
}
function quebrar(){
    lampada.src = './img/quebrada.jpg'
}

ligar.addEventListener('click', lampadaOn);
desligar.addEventListener('click', lampadaOff);
lampada.addEventListener('mouseover', lampadaOn);
lampada.addEventListener('mouseleave', lampadaOff);
lampada.addEventListener('dblclick', quebrar);