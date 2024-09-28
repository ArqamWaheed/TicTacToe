let ticTacToeScore = function(){

    // Initialize Functions and constructors 
    function CreatePlayer(name) {
        let turnDecide = false;
        const selections = [];
        return {name, selections, turnDecide}
    }

    function fireClick(content) {
        if (playerOne.turnDecide === true) {
            playerOne.selections.push(content);
            playerOne.turnDecide = false;
            playerTwo.turnDecide = true;
            Gameboard.playerOneClick(content);
        }
        else {
            playerTwo.selections.push(content);
            playerTwo.turnDecide = false;
            playerOne.turnDecide = true;
            Gameboard.playerTwoClick(content);
        }
    }

    // Initialize variables and objects
    let playerOne = CreatePlayer("Will");
    let playerTwo = CreatePlayer("Will2");

    playerOne.turnDecide = true;

    const WinningSet = {
        WinOne : ['A', 'B', 'C'],
        WinTwo : ['D', 'E', 'F'],
        WinThree : ['G', 'H', 'I'],
        WinFour : ['A', 'D', 'G'],
        WinFive : ['B', 'E', 'H'],
        WinSix : ['C', 'F', 'I'],
        WinSeven : ['A', 'E', 'I'],
        WinEight : ['C', 'E', 'G'],
    }

    const Gameboard = {
        render : function(target, content) {
            target.textContent = content;
        },
    
        playerOneClick : function(ID) {
            let division = document.getElementById(ID);
            this.render(division, "X");
        },
    
        playerTwoClick : function (ID) {
            let division = document.getElementById(ID);
            this.render(division, "O");
        },
        
    };

    // Cache DOM
    const container = document.querySelector(".container");

    // bindEvents 
    container.addEventListener('click', function(event) {
        fireClick(event.target.getAttribute("ID"));
    })
}()







