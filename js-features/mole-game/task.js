let score = 0;
let scoreLost = 0;
let scoreBoard = document.querySelector('#dead');
let scoreBoardLost = document.querySelector('#lost');
let arrHole = document.querySelectorAll('.hole');
arrHole.forEach(elem => {
  elem.addEventListener('click', () => {
     if(elem.className.includes('hole_has-mole') === true) {
        score++;
        scoreBoard.textContent = score;
      } else {
       scoreLost++;
       scoreBoardLost.textContent = scoreLost;
     }
     if(score === 10) {
      alert ('Вы победили');
      scoreBoard.textContent = 0;
      scoreBoardLost.textContent = 0;
      score = 0;
      scoreLost = 0;
      
    }
    if(scoreLost === 5) {
      alert ('Вы проиграли');
      scoreBoard.textContent = 0;
      scoreBoardLost.textContent = 0;
      score = 0;
      scoreLost = 0;
    }
  })
});


