var height = 6; //numero de intentos
var width = 5; //letras de la palabra

var row = 0; //current guest (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
var word = "SQUID";

window.onload = function(){
    intialize();
}

function intialize(){
    //crate the game board
    for (let r = 0; r < height; r++){
        for(let c = 0; c<width; c++){
            //<span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("tablero").appendChild(tile);
        }
    }
}

// Listen for Key Press
document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    //alert(e.code)
    if ("KeyA" <= e.code && e.code <="KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row. toString() + ' - ' + col.toString());
            if (currTile.innerText =="") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }

    else if (e.code =="Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile. innerText = "";
        
    }
    else if (e.code == "Enter") {
        update();
        row += 1; //start new row
        col = 0; //start at 0 for new row
    }


    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }

})

function update() {
    let correct = 0;
    for(let c = 0; c<width; c++){
        let currTile = document.getElementById(row.toString() + `-` + c.toString());
        let letter = currTile.innerText;
        
        //is it in the correct position?
        if (word[c] == letter) {
            tile.classList.add("correct");
            correct += 1;
            //is it in the word?
        }
        else if (word.includes(letter)) {
            tile.classList.add("present");
            //not in the word
        }
        else {
            tile.classList.add("absent");
        }
        if (correct == width) {
            gameOver = true;
        }
    }
}


