let resultElement = document.querySelector('.result')
let rowid = 1
let gameboard = document.querySelector('.game-board')


let word = 'hola'
let wordArray = word.toUpperCase().split('')

let actualRow = document.querySelector('.row-cuadrado')

drawsquares(actualRow);
input(actualRow);


addFocus(actualRow);


//Funciones

function input(actualRow){
    let squares = actualRow.querySelectorAll('.square')
    squares = [...squares];

    let userInput = []
    
    squares.forEach(element =>{
        element.addEventListener('input', event=>{
            //Si no se borro
            if (event.inputType !== 'deleteContentBackward'){
                    userInput.push(event.target.value.toUpperCase())
                if(event.target.nextElementSibling){
                    event.target.nextElementSibling.focus();
                }else{
                    //Crear el array con las letras llenas
                    let squaresFilled = document.querySelectorAll('.square')
                    squaresFilled = [...squaresFilled]
                    let lastFourSquaresFilled = squaresFilled.slice(-word.length);
                    let finaluserInput = []
                    lastFourSquaresFilled.forEach(element =>{
                        finaluserInput.push(element.value.toUpperCase())
                    });

                    //Si las letras estan pero no en la posicion correcta (amarillo)
                    let letrasEstan = existWords(wordArray, finaluserInput)
                    letrasEstan.forEach(element =>{
                        squares[element].classList.add('gold');
                    })

                    //Si las letras coinciden (verde)
                    let letrasIguales = compareArrays(wordArray, finaluserInput)
                    letrasIguales.forEach(element => {
                        squares[element].classList.add('green');
                    })
                    //Cuando acierta la palabra
                    if (letrasIguales.length == wordArray.length){
                        resultElement.innerHTML = `<p>Ganaste!</p>
                        <div class="mb-3 form-group">
                        <input type="button" class="btn btn-primary" onclick="changeScreenNivel2()" value="Siguiente Nivel">
                        </div>`
                        return
                    }
                    //Crear nueva linea
                    let actualRow = createRow()

                    if(!actualRow){
                        return
                    }
                    drawsquares(actualRow)
                    input(actualRow)
                    addFocus(actualRow)
                }
            }else{
                userInput.pop();
            }
            
            //Recoger el ingreso del usuario
            
        });
    })
}

function compareArrays(array1, array2){
    let elementosIguales = []
    array1.forEach((element, index)=>{
        if (element == array2[index]){
            console.log(`En la posicion ${index} si son iguales`)
            elementosIguales.push(index)
        }else{
            console.log(`En la posicion ${index} no son iguales`)
        }
    });
    return elementosIguales;
}

function existWords(array1, array2){
    let existWordsArray = [];
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            existWordsArray.push(index)
        }
    });
    return existWordsArray;
}

function createRow(){
    rowid++
    if(rowid <= 6){
        let newRow = document.createElement('div');
        newRow.classList.add('row-cuadrado')
        newRow.setAttribute('id', rowid)
        gameboard.appendChild(newRow)
        return newRow
    }else{
        //Si no adivina la palabra
        resultElement.innerHTML = `
        <p>Intentalo de nuevo, la respuesta correcta era "${word.toUpperCase()}"</p>
        <button class="buttonrst">Reiniciar</button>`
        let resetBtn = document.querySelector('.buttonrst')
        resetBtn.addEventListener('click', ()=>{
            location.reload();
        });

    }
}

function drawsquares(actualRow){
    wordArray.forEach((item, index) => {
        if (index === 0){
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus"></input>`
        }else{
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square"></input>`
        }
    })
}

function addFocus(actualRow){
    let focusElement = actualRow.querySelector('.focus')
    focusElement.focus();
}
