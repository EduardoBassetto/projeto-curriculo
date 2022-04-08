function funcoes_scroll() {
    const sectionHeader = document.querySelector('[data-header]');
    const scroll = window.scrollY
    if (scroll > 75) {
        sectionHeader.classList.remove('section-header');
        sectionHeader.classList.add('section-header-short');
    } if (scroll < 75 ) {
        sectionHeader.classList.add('section-header');
        sectionHeader.classList.remove('section-header-short');
    }
    const atualmenteCambirela = document.querySelector('.atualmenteCambirela')
    const atualmenteSenai = document.querySelector('.atualmenteSenai')
    const atualmenteAlura = document.querySelector('.atualmenteAlura')
    const dataTitulo = document.querySelector('[data-titulo-atualmente]')
    const largura  = document.documentElement.scrollWidth;
    if (scroll > 1450) {
        atualmenteCambirela.style.transform = "scale(1)";
    } if (scroll > 1750) {
        atualmenteSenai.style.transform = "scale(1)";
    } if (scroll > 2070) {
        atualmenteAlura.style.transform = "scale(1)";
    }if (scroll > 1780 && largura > 1140){
        dataTitulo.style.transform = "translateY(100px)";
    } else {
        dataTitulo.style.transform = "translateY(0px)";
    }
}
const heightAtual = document.addEventListener('scroll', funcoes_scroll);


window.onload = inicio;

function inicio(){
    display2.appendChild(boxExp[position]);
    display3.appendChild(boxExp[position+1]);

    if (position == 0) {
        box[0].style.backgroundColor = "grey"
    }
}

function moveRight(){
    if (position == 0 ){
        display2.removeChild(boxExp[position]);
        display3.removeChild(boxExp[position+1]);
        position++
        display1.appendChild(boxExp[position-1]);
        display2.appendChild(boxExp[position]);
        display3.appendChild(boxExp[position+1]);
    } else if  (position < 4) {
        display1.removeChild(boxExp[position-1]);
        display2.removeChild(boxExp[position]);
        display3.removeChild(boxExp[position+1]);
    
        display1.appendChild(boxExp[position]);
        display2.appendChild(boxExp[position+1]);
        display3.appendChild(boxExp[position+2]);
        position++
    } else if(position == 4) {
        display1.removeChild(boxExp[position-1]);
        display2.removeChild(boxExp[position]);
        display3.removeChild(boxExp[position+1]);
        display1.appendChild(boxExp[position]);
        display2.appendChild(boxExp[position+1]);
        position++
    } 
    box[position].style.backgroundColor = "grey"
    box[position-1].style.backgroundColor = "white"
    
    function animacaoMovDisplay(){


        display1.style.transform = "translateX(90%)";
        display2.style.transform = "translateX(50%)";
        display3.style.transform = "translateX(20%)";
    
            function animation() {
                display1.style.transform = "translateX(0%)";
                display2.style.transform = "translateX(0%)";
                display3.style.transform = "translateX(0%)";
            }
            setTimeout(animation, 150);
    }
    animacaoMovDisplay();
}

function moveLeft(){
    if (position == 1 ){
        display1.removeChild(boxExp[position-1]);
        display2.removeChild(boxExp[position]);
        display3.removeChild(boxExp[position+1]);
        position--
        display2.appendChild(boxExp[position]);
        display3.appendChild(boxExp[position+1]);
    } else if  (position < 5) {
        display1.removeChild(boxExp[position-1]);
        display2.removeChild(boxExp[position]);
        display3.removeChild(boxExp[position+1]);
    
        display1.appendChild(boxExp[position-2]);
        display2.appendChild(boxExp[position-1]);
        display3.appendChild(boxExp[position]);
        position--
    } else if(position == 5) {
        display1.removeChild(boxExp[position-1]);
        display2.removeChild(boxExp[position]);
        position--
        display1.appendChild(boxExp[position-1]);
        display2.appendChild(boxExp[position]);
        display3.appendChild(boxExp[position+1]);
    } 

    box[position].style.backgroundColor = "grey"
    box[position+1].style.backgroundColor = "white"

    function animacaoMovDisplay(){


        display1.style.transform = "translateX(-20%)";
        display2.style.transform = "translateX(-50%)";
        display3.style.transform = "translateX(-90%)";
    
            function animation() {
                display1.style.transform = "translateX(0%)";
                display2.style.transform = "translateX(0%)";
                display3.style.transform = "translateX(0%)";
            }
            setTimeout(animation, 150);
    }
    animacaoMovDisplay();
   
}

const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const display3 = document.querySelector('.display3');
const box = document.querySelectorAll('.box');
const boxExp = document.querySelectorAll('.box-exp');
let position = 0
const buttonRight = document.querySelector('[data-right]');
buttonRight.addEventListener('click', moveRight);
const buttonLeft = document.querySelector('[data-left]');
buttonLeft.addEventListener('click', moveLeft);



