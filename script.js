


const playerFactory = (name) => ({ 
  name, 
  setName () { 
    this.name = name; 
    return this;
  }
}) 

var gameBoard = (function() { 

   let gameboard = ["", "", "", "", "", "", "", "", "",];  
   const playerX = playerFactory("JEFF");  
   const playerO = playerFactory("SAM");

   //DOM and gameboard rendering
   let board = document.querySelectorAll(".board");  
   // Function for rendering gameboard to HTML
   function render() {
    board.forEach((el, index) => {  
      el.addEventListener("click", () => { 
        console.log(index);
    el.innerText = gameboard[index]; })
   })
  } 
  //function for player 1
  function player1 () { 
    board.forEach((el, index) => { 
      el.addEventListener("click", () => {  
        console.log(index);
        let ok = "X"; 
        gameboard.splice(index, 1, ok); 
        render(); 
      }) 
    })
  } 
   // function for player 2
   /*function player2 () { 
    board.forEach((el, index) => { 
      el.addEventListener("click", () => {  
        console.log(index);
        let ok = "O"; 
        gameboard.splice(index, 1, ok); 
        render(); 
      }) 
    })
  } */
   player1(); 
   //player2();
   render();
})(); 

var displayController = (function () { 

  return { 

  }

}());
