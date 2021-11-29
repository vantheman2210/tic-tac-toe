const playerFactory = (name, symbol) => ({ 
  name, 
  symbol,
  setName () { 
    this.name = name;  
    this.symbol = symbol;
    return this;
  }
}) 

var gameBoard = (function() { 

   let gameboard = ["", "", "", "", "", "", "", "", ""];   
   let winningCombinations = [["0", "1", "2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]];

   const playerX = playerFactory("Jeff", "X");  
   const playerO = playerFactory("Sam", "O");

   let activePlayer = playerX;
   
   //DOM
   let grid = document.getElementById("container");  
   let board = document.querySelectorAll(".board"); 
   let welcome = document.getElementById("welcome"); 
   let start = document.getElementById("start"); 
   let endScreen = document.getElementById("screen"); 
   let restartButton = document.getElementById("restart"); 
   let display = document.getElementById("display");

   // Function for rendering gameboard to HTML and populating gameboard array
   function _render (e) { 
     let targetItem = e.target; 
     let targetId = e.target.id;

     if (targetItem.innerText === "" && activePlayer === playerX) { 
       targetItem.innerText = playerX.symbol;  
       if(checkWinner(playerX.symbol)){return endScreen.id = "screen-show", display.innerText = "Player X wins"}
       activePlayer = playerO;  
       gameboard.splice(targetId, 1, targetItem.innerText)        
     } else if (targetItem.innerText === "" && activePlayer === playerO) {
      targetItem.innerText = playerO.symbol;  
      if(checkWinner(playerO.symbol)){return endScreen.id = "screen-show", display.innerText = "Player O wins"}
      activePlayer = playerX; 
      gameboard.splice(targetId, 1, targetItem.innerText)   
     }
    }

// Function that adds event listeners and uses render function
function playGame () {
   grid.addEventListener("click", _render); 
   
  }  

// Function that checks winner 
function checkWinner (symbol) { 
   return winningCombinations.some(combination => { 
     return combination.every(index => { 
       return board[index].textContent.includes(symbol)
     })
   })
}
// Event listener to start player vs player game
start.addEventListener("click", () => { 
  welcome.id = "welcome-hidden";
})  
// Event listener for restart button
restartButton.addEventListener("click", () => {
  restart();
})

//function that restarts game 
function restart () { 
  board.forEach((element) => {element.innerText = "";}) 
  gameboard = ["", "", "", "", "", "", "", "", ""];  
  welcome.id = "welcome";    
  endScreen.id = "screen"; 
  display.innerText = ""; 
  activePlayer = playerX;
};

   return { 
     playGame
   }
  
})(); 

var displayController = (function () {   
  gameBoard.playGame();
  
      
  return { 
    
  }
  
  
}());

