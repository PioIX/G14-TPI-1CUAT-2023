let resultElement = document.querySelector('.result')
let rowid = 1
let gameboard = document.querySelector('.game-board')

let word = 'hola'
let wordArray = word.toUpperCase().split('')
console.log(wordArray)

let actualRow = document.querySelector('.row-cuadrado')

drawsquares(actualRow);

let focusElement = document.querySelector('.focus')
focusElement.focus();

let squares = document.querySelectorAll('.square')
squares = [...squares];

let userInput = []

squares.forEach(element =>{
    element.addEventListener('input', event=>{
        //Recoger el ingreso del usuario
        userInput.push(event.target.value.toUpperCase())
        console.log(userInput)
        if(event.target.nextElementSibling){
            event.target.nextElementSibling.focus();
        }else{
            //Si las letras coinciden (verde)
            let letrasIguales = compareArrays(wordArray, userInput)
            letrasIguales.forEach(element => {
                squares[element].classList.add('green')
            })
            //Cuando acierta la palabra
            if (letrasIguales.length == wordArray.length){
                resultElement.innerHTML = `
                <p>Ganaste</p>
                <div class="mb-3 form-group">
                  <input type="button" class="btn btn-primary" onclick="changeScreenNivel2() " value="Siguiente Nivel">
                </div>`
            }
            //Si las letras estan pero no en la posicion correcta (amarillo)
            let letrasEstan = existWords(wordArray, userInput)
            letrasEstan.forEach(element =>{
                squares[element].classList.add('gold')
            })
            //Crear nueva linea
            let actualRow = createRow()
        }
    });
})

//Funciones

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
    let newRow = document.createElement('div');
    newRow.classList.add('row-cuadrado')
    newRow.setAttribute('id', rowid)
    gameboard.appendChild(newRow)
    return newRow
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