let resultElement = document.querySelector('.result')
let rowid = 1
let gameBoard = document.querySelector('.game-board')

let word = 'hola';
let wordArray = word.toUpperCase().split('');//Te divide la palabra en arrays
console.log(wordArray)

var actualRow = document.querySelector('.row-cuadrado');
console.log(actualRow)

drawSquares(actualRow);
input(actualRow)


addFocus(actualRow)

function input(actualRow){
    let squares = actualRow.querySelectorAll('.square')
    squares = [...squares]

    let userInput = []

    squares.forEach(element =>{
        element.addEventListener('input', event=>{
            //Si no se borro 
            if (event.inputType !== 'deleteContentBackward'){
                //recoger lo que el usuario ingresa para guardarlo en el vector "userinput"    
                userInput.push(event.target.value.toUpperCase())
                if (event.target.nextElementSibling){
                    event.target.nextElementSibling.focus();
                }else{
                    // Crear el array con las letras llenas
                    let squaresLlenos = actualRow.querySelectorAll('.square')
                    squaresLlenos = [...squaresField]
                    let lastFiveSquaresLlenos = squaresLlenos.slice(-5);
                    let finalUserInput = []
                    lastFiveSquaresLlenos.forEach(element =>{
                       finalUserInput.push(element.value.toUpperCase()) 
                    });
                    //Comparar elementos para ver si la letra existe pero no esta en la posicion correcta (amarillo)
                    let ExistePalabras = Existwords(wordArray, finalUserInput)
                    ExistePalabras.forEach(element =>{
                        squares[element].classList.add('gold')
                    })
                    //Comparar elementos para ver si coinciden (verde)
                    let elementosCorrectos= compareArrays(wordArray, finalUserInput)
                    elementosCorrectos.forEach(element => {
                        squares[element].classList.add('green')
                    })
                    //Cuando todas las letras sean iguales
                    if (elementosCorrectos.length == wordArray.length){
                        showResult('Ganaste!')
                        return;
                    }
                    //Crear una fila
                    let actualRow = createRow()

                    if(!actualRow){
                        return;
                    }

                    drawSquares(actualRow)
                    input(actualRow)
                    addFocus(actualRow)
                }
            }else{
                userInput.pop();
            }
        });
    })
}

function compareArrays(array1, array2){
    let indexIguales = []
    array1.forEach((element, index)=>{
        if(element == array2[index]){
            console.log(`En la posicion ${index} si son iguales`)
            indexIguales.push(index);
        } else{
            console.log(`En la posicion ${index} no son iguales`)
        }
    });
    return indexIguales;
}

//amarillo
function Existwords(array1, array2){
    let LetrasEstan = [];
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            LetrasEstan.push(index)
        }
    });
    return LetrasEstan;
}

function createRow(){
    rowid++
    if (rowid <= 6){
        let newRow = document.createElement('div')
        newRow.classList.add('row')
        newRow.setAttribute('id', rowid)
        gameBoard.appendChild(newRow)
        return newRow
    }else{
        showResult(`Intentalo de nuevo, la respuesta correcta era "${word.toUpperCase()}"`)
    }
    
}

function drawSquares(actualRow){
    
    wordArray.forEach((item, index) => {
        if (index === 0){
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus"></input>`
        } else {
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square"></input>`
        }
    });
}

function addFocus(actualRow){
    let focusElement = actualRow.querySelector('.focus')
    focusElement.focus();
}

function showResult(text){
    resultElement.innerHTML = `
                <p>${text}</p>
                <div class="mb-3 form-group">
                <input type="button" class="btn btn-primary" onclick="" value="Siguiente Nivel">
                </div>`
    let resetBtn = document.querySelector('.button')
    resetBtn.addEventListener('click', ()=>{
        location.reload()
    })
}

async function asignarPalabra(){
    let response= await postJSON({dificulty:dificulty},"asignarPalabra");
    wordID=response.id;
}

asignarPalabra();


// Porque fallan los innerhtml