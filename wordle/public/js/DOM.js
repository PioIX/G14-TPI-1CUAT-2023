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

function changeScreenAñadir() {
    const notepad = document.getElementById("añadir");
    const login = document.getElementById("form3");
    if(notepad.style.display !== "none") {
        notepad.style.display = "none";
        login.style.display = "";
    }
    else {
        notepad.style.display = "";
        login.style.display = "none";
    }
}



async function putJSON(data) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

    try {
      const response = await fetch("/login", {
        method: "PUT", // or 'POST'
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

async function putJSON2(data) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  console.log(data);
  try {
    const responseR = await fetch("/registrer", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result2 = await responseR.json();
    console.log("Success:", result2);

    if (result2.validar == false) {
      alert("Los datos son incorrectos")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      document.getElementById("form2").submit()
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

  //Esta funcion la llama el boton Ingresar que tiene que ser type button para ejecutar el onclick
  function registro() {
    //Leo los datos del input
    let DNI = document.getElementById("dniR").value
    let Nombre = document.getElementById("nombreR").value
    let Apellido = document.getElementById("apellidoR").value
    let Usuario = document.getElementById("usuarioR").value
    let Password = document.getElementById("passwordR").value


    //Creo un objeto de forma instantanea
    let data = {
        dni: DNI,
        user: Usuario,
        pass: Password,
        nombre: Nombre,
        apellido: Apellido
    }

    //data es el objeto que le paso al back
    putJSON2(data)
  }

