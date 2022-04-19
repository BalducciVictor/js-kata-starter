const data = require('./data/data.json'); 
const time = 3000;

const initGame = (/* previousGeneration, time */) => {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
    /* setInterval("nextGeneration(previousGeneration)", time); */
}

const nextGeneration = (/* previousGeneration, time */) => {
  //ici le moteur avec les regles;
  console.log('Game Updated');
}

export { initGame };