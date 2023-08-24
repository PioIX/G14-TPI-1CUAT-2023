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

function changeScreenadmin() {
    const admin = document.getElementById("admin");
    const login = document.getElementById("login");
    if(admin.style.display !== "none") {
        admin.style.display = "none";
        login.style.display = "";
    }
    else {
        admin.style.display = "";
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

      if (result.validar == -1) {
        changeScreenadmin()
      } else if (result.validar == 1) {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        document.getElementById("form1").submit()
      } else {
        alert("Los datos son incorrectos")
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

  async function putJSON3(data) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

    try {
      const responseAD = await fetch("/add", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      //En result obtengo la respuesta
      const resultAD = await responseAD.json();
      console.log("Success:", resultAD);

      if (resultAD.validar == false) {
        alert("Los datos son incorrectos")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        document.getElementById("add").submit()
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  //Esta funcion la llama el boton Ingresar que tiene que ser type button para ejecutar el onclick
  function add() {
    //Leo los datos del input
    let idPalabra = document.getElementById("idaddpalabra").value
    let Palabra = document.getElementById("addpalabra").value
    let Cantidad = document.getElementById("cantletras").value
    //Creo un objeto de forma instantanea
    let data = {
      idword: idPalabra,
      palabra: Palabra,
      cantidad: Cantidad
    }

    //data es el objeto que le paso al back
    putJSON3(data)

} 



async function putJSON4(data) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const responseNEW = await fetch("/editar", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const resultNEW = await responseNEW.json();
    console.log("Success:", resultNEW);

    if (resultNEW.validar == false) {
      alert("Los datos son incorrectos")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      document.getElementById("editar").submit()
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function edit() {
  //Leo los datos del input
  let idPalabraN = document.getElementById("idnewpalabra").value
  let PalabraN = document.getElementById("nuevapalabra").value
  let CantidadN = document.getElementById("Newselectcant").value
  //Creo un objeto de forma instantanea
  let data = {
    newidword: idPalabraN,
    newpalabra: PalabraN,
    newcantidad: CantidadN
  }

  //data es el objeto que le paso al back
  putJSON4(data)

} 

async function putJSON5(data) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const responseDEL = await fetch("/delete", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const resultDEL = await responseDEL.json();
    console.log("Success:", resultDEL);

    if (resultDEL.validar == false) {
      alert("Los datos son incorrectos")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      document.getElementById("delete").submit()
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function borrar() {
  //Leo los datos del input
  let idPalabraDEL = document.getElementById("iddeletepalabra").value
  //Creo un objeto de forma instantanea
  let data = {
    deleteidword: idPalabraDEL
  }

  //data es el objeto que le paso al back
  putJSON5(data)

}


function changeScreenNivel2() {
  const notepad = document.getElementById("notepad");
  const nivel2 = document.getElementById("nivel2");
  if(notepad.style.display !== "none") {
      notepad.style.display = "none";
      nivel2.style.display = "";
  }
  else {
      notepad.style.display = "";
      nivel2.style.display = "none";
  }
}





