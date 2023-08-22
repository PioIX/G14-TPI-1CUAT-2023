let resultElement = document.querySelector('.result')

let word = 'hola';
let wordArray = word.toUpperCase().split('');
console.log(wordArray)

let actualRow = document.querySelector('.row');

/*
Preguntar mañana porque no funciona el innerhtml
wordArray.forEach(() => {
    actualRow.innerHTML += `<input type="text" maxlength="1" class="square"></input>`
})
*/

let squares = document.querySelectorAll('.square')
squares = [...squares]

let userInput = []

squares.forEach(element =>{
    element.addEventListener('input', event=>{
    //recoger lo que el usuario ingresa para guardarlo en el vector "userinput"    
    userInput.push(event.target.value.toUpperCase())
    console.log(userInput)
    if (event.target.nextElementSibling){
        event.target.nextElementSibling.focus();
    }else{
        //Comparar elementos para ver si coinciden (verde)
        let elementosCorrectos= compareArrays(wordArray, userInput)
        elementosCorrectos.forEach(element => {
            squares[element].classList.add('green')
        })
        //Cuando todas las letras sean iguales
        if (elementosCorrectos.length == wordArray.length){
            resultElement.innerHTML = `<p>Ganaste</p>
            <div class="mb-3 form-group">
              <input type="button" class="btn btn-primary" onclick="" value="Siguiente Nivel">
            </div>`
        }
        //Comparar elementos para ver si la letra existe pero no esta en la posicion correcta (amarillo)
        let ExistePalabras = Existwords(wordArray, userInput)
        console.log(ExistePalabras)
        ExistePalabras.forEach(element =>{
            squares[element].classList.add('gold')
        })
        //Crear una linea 
    }
    });
})

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

function Existwords(array1, array2){
    let LetrasEstan = [];
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            LetrasEstan.push(index)
        }
    });
    return LetrasEstan;
}