function getUser() {
    return document.getElementById("username").value;
}
function getPassword() {
    return document.getElementById("password").value;
}
function getName() {
    return document.getElementById("name").value;
}
function getDni() {
    return document.getElementById("dni").value;
}
function changeScreen() {
    const notepad = document.getElementById("notepad");
    const login = document.getElementById("login");
    if(notepad.style.display !== "none") {
        notepad.style.display = "none";
        login.style.display = "";
    }
    else {
        notepad.style.display = "";
        login.style.display = "none";
    }
}
/*
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
            let currTile = document-getElementById(row. toString() + ' - ' + col.toString());
            if (currTile. innerText =="") {
                currTile. innerText = e.code[3];
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
*/

async function putJSON(data) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

    try {
      const response = await fetch("/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);

      if (result.validar == false) {
        alert("Los datos son incorrectos")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        document.getElementById("form1").submit()
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  //Esta funcion la llama el boton Ingresar que tiene que ser type button para ejecutar el onclick
  function login() {
    //Leo los datos del input
    let usuario = document.getElementById("usuarioId").value
    let contraseña = document.getElementById("passwordId").value

    //Creo un objeto de forma instantanea
    let data = {
        user: usuario,
        pass: contraseña
    }

    //data es el objeto que le paso al back
    putJSON(data)
  }