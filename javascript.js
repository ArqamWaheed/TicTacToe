let playerOne = CreatePlayer(prompt("Enter player 1 name: "));
let playerTwo = CreatePlayer(prompt("Enter player 2 name: "));

function CreatePlayer(name) {
    let score = 0;
    let selections = [];
    return {name, selections, score}
}


const Gameboard = (function(){
    const divisions = document.querySelectorAll(".container div")
    let _render = function(target, content) {
        target.textContent = content;
    }

    let playerOneClick = function(ID) {
        let division = document.getElementById(ID);
        _render(division, "X");
    }

    let playerTwoClick = function (ID) {
        let division = document.getElementById(ID);
        _render(division, "O");
    }

    let clearBoard = function() {
        divisions.forEach(function(target) {
            _render(target, "");
        })
    }
    return {playerOneClick, playerTwoClick, clearBoard}
})();


let playMatch = function(){
    // Initialize Functions
    function fireClick(content) {
        if (currentPlayer == playerOne) {
            playerOne.selections.push(content);
            currentPlayer = playerTwo;
            Gameboard.playerOneClick(content);
            checkForEnd();
        }
        else {
            playerTwo.selections.push(content);
            currentPlayer = playerOne;
            Gameboard.playerTwoClick(content);
            checkForEnd();
        }
    }
    
    function checkForEnd() {
        if (playerOne.selections.length + playerTwo.selections.length === 9) showModal();
        for (sets of WinningSet) {
            if (sets.every(val => playerOne.selections.includes(val)) === true) {
                showModal("P1");
                console.log("P1 win");
                break;
            }
            if (sets.every(val => playerTwo.selections.includes(val)) === true) {
                showModal("P2");
                break;
            }
        }
    }

    function showModal(condition) {
        if (condition === "P1") {
            playerOne.score += 1;
            renderModal(`${playerOne.name} has WON!`);
        } else if (condition === "P2") {
            playerTwo.score += 1;
            renderModal(`${playerTwo.name} has WON!`);
        } else {
            renderModal("It's a draw");
        }
    }

    function renderModal(content) {
        modalheader.textContent = content;
        firstParagraph.textContent = `SCORE OF ${playerOne.name} IS ${playerOne.score}`
        secondParagraph.textContent = `SCORE OF ${playerTwo.name} IS ${playerTwo.score}`
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
            resetGame();
          }
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
              resetGame();
            }
          }
    }

    function resetGame() {
        currentPlayer = playerOne;
        playerOne.selections = [];
        playerTwo.selections = [];
        Gameboard.clearBoard();  
    }

    // Initialize variables and objects
    let currentPlayer = playerOne;

    const WinningSet = [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
        ['A', 'D', 'G'],
        ['B', 'E', 'H'],
        ['C', 'F', 'I'],
        ['A', 'E', 'I'],
        ['C', 'E', 'G'],
    ];


    // Cache DOM
    const container = document.querySelector(".container");
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const modalheader = document.querySelector(".modal-header h2");
    const firstParagraph = document.querySelector('.modal-body p:first-of-type');
    const secondParagraph = document.querySelector('.modal-body p:nth-of-type(2)');



    // bindEvents 
    container.addEventListener('click', function(event) {
        if (event.target.textContent == "") fireClick(event.target.getAttribute("ID"));
    })
}()








