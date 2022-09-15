const winConditions = [
    [true, true, true, false, false, false, false, false, false],
    [false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, true, true, true],
    [true, false, false, true, false, false, true, false, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, false, false, true, false, false, true],
    [true, false, false, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false],
];
let fieldsX = [false, false, false, false, false, false, false, false, false];
let fieldsO = [false, false, false, false, false, false, false, false, false];
let positions = [document.querySelector('.pos1'), document.querySelector('.pos2'), document.querySelector('.pos3'), document.querySelector('.pos4'), document.querySelector('.pos5'), document.querySelector('.pos6'), document.querySelector('.pos7'), document.querySelector('.pos8'), document.querySelector('.pos9')];
let turn = "X";
let player = document.body.querySelector(".player");
let head = document.body.querySelector(".head");
player.innerHTML = turn;


function clickEvent(clickID) {
    if (win == true) return;

    if (clickID != "X" && clickID != "O") {
        positions[clickID].innerHTML = turn;
        if (turn == "X") {
            fieldsX[clickID] = true;
            wincheck();
        }
        else if (turn == "O") {
            fieldsO[clickID] = true;
            wincheck();
        }
        swapTurn();
    }
    else {
        alert("Daar staat al iets.");
    }
}

let win = false;
let checkX = 0;
let checkO = 0;
let tieCheck = 0;

function wincheck() {
    for (let i = 0; i <= 7; i++) {
        for (let w = 0; w <= 8; w++) {
            if (fieldsX[w] == winConditions[i][w] && fieldsX[w] == true) {
                checkX++
            }
            else if (fieldsO[w] == winConditions[i][w] && fieldsO[w] == true) {
                checkO++
            }
        }
        if (checkX >= 3 || checkO >= 3) {
            win = true;
            swapTurn();
            head.innerHTML = `${turn}'s win!`;
            return;
        }
        else {
            checkX = 0;
            checkO = 0;
        }
    }
    for (let x = 0; x <= 8; x++) {
        if (fieldsX[x] == true || fieldsO[x] == true) {
            tieCheck++
        }
    }
    if (tieCheck == 9) {
        win = true;
        head.innerHTML = `It's a tie!`;
    }
    else {
        tieCheck = 0;
    }
    
}

function swapTurn() {
    if (win == false) {
        if (turn == "X") {
            turn = "O";
        }
        else {
            turn = "X";
        }
        player.innerHTML = turn;
    }
}

function reset() {
    for (let i = 0; i <= 8; i++) {
        positions[i].innerHTML = "";
        fieldsX[i] = false;
        fieldsO[i] = false;
    }
    checkO = 0;
    checkX = 0;
    head.innerHTML = "Tic tac toe";
    win = false;
    turn = "X";
    player.innerHTML = turn
}