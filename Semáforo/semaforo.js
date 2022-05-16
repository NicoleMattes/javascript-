const img = document.getElementById('img');
const button = document.createElement('button');
let colorIndex = 0;
let intervalId = null;

const trafficlght = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; 


/* poderia ser feito desta maneira também 
if ( colorIndex < 2 ) {
    colorIndex++
}else{
    colorIndex = 0;
}
*/

const changeColor = () => {
    const colors = [ 'red', 'yellow', 'green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

//função para parar

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red':       () => img.src = './img/vermelho.png',
    'yellow':    () => img.src = './img/amarelo.png',
    'green':     () => img.src = './img/verde.png',
    'automatic':  () => intervalId = setInterval( changeColor, 300 )
}

buttons.addEventListener('click', trafficlght,)