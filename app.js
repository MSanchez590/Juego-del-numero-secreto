let numSecreto = 0;
let intentos = 0;
let numerosSecretos = [];
let max = 10;

function condicionesIniciales(){
    asignarTexto('h1','Juego del número secreto');
    asignarTexto('p', `Ingresa un número del 1 al ${max}`);
    numSecreto = genNumSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','true');
    console.log(numSecreto);
    console.log(numerosSecretos);
}

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function validarIntento(){
    let numUsuario = parseInt(document.getElementById('numUsuario').value);

    if (numSecreto == numUsuario) {
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if (numUsuario > numSecreto) {
            asignarTexto('p','El numero secreto es menor')
        }else{
            asignarTexto('p','El número secreto es mayor')
        }
        intentos++;
    }
    cleanBox();
    return;
}

function newGame() {
    condicionesIniciales();
}

condicionesIniciales();

function cleanBox() {
    document.querySelector('#numUsuario').value = '';
}

function genNumSecreto(){
    let numGenerado = Math.floor(Math.random()*max)+1;

    if(numerosSecretos == max){
        asignarTexto('p','Ya se ocuparon todos los números posibles');
    }else{
        if (numerosSecretos.includes(numGenerado)) {
            genNumSecreto();
        }else{
            numerosSecretos.push(numGenerado);
            return numGenerado;
        }
    }
}