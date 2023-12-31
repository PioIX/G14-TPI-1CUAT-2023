
/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    
    Docentes: Nicolás Facón, Martín Rivas
    
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias
const express = require('express'); //Para el manejo del servidor Web
const exphbs  = require('express-handlebars'); //Para el manejo de los HTML
const bodyParser = require('body-parser'); //Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql.js'); //Añado el archivo mysql.js presente en la carpeta módulos

const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static('public')); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set('view engine', 'handlebars'); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

app.listen(Listen_Port, function() {
    console.log('Servidor NodeJS corriendo en http://localhost:' + Listen_Port + '/');
});

/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/

app.get('/', function(req, res)
{
    //Petición GET con URL = "/", lease, página principal.
    console.log(req.query); //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

app.get('/login', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    let usuarios = MySQL.realizarQuery("SELECT * FROM Usuario")
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.post('/login', function(req, res)
{
    //Petición POST con URL = "/login"
    console.log("Soy un pedido POST", req.body); 
    //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método POST
    //res.render('home', { mensaje: "Hola mundo!", usuario: req.body.usuario}); //Renderizo página "home" enviando un objeto de 2 parámetros a Handlebars
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.put('/login', async function(req, res) {
    //Petición PUT con URL = "/login"
    console.log("Soy un pedido PUT", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método PUT
    //Consulto en la bdd de la existencia del usuario
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Usuario WHERE Usuario = "${req.body.user}" AND Contraseña = "${req.body.pass}" AND admin = 0`)
    let admin = await MySQL.realizarQuery(`SELECT * FROM Usuario WHERE Usuario = "${req.body.user}" AND Contraseña = "${req.body.pass}" AND admin = 1`)
    //Chequeo el largo del vector a ver si tiene datos
    if (admin.length > 0) {
        res.send({validar: -1})
        
    }
    else if (respuesta.length > 0) {
        res.send({validar: 1})
    } else {
        res.send({validar: 0})
    }
});

app.delete('/login', function(req, res) {
    //Petición DELETE con URL = "/login"
    console.log("Soy un pedido DELETE", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método DELETE
    res.send(null);
});

app.get('/registrer', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('registrer', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.post('/registrero', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido POST", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});


app.get('/add', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('add', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/editar', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('editar', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});


app.get('/delete', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('delete', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.post('/add', async function(req, res)
{
    console.log("Soy un pedido POST", req.body)
    await MySQL.realizarQuery(`INSERT INTO Palabras (id_palabras, Palabras, cant_letras) VALUES (${req.body.idword}, '${req.body.palabra}', ${req.body.cantidad}) `)
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Palabras WHERE id_palabras = ${req.body.idword}`)
    //Chequeo el largo del vector a ver si tiene datos
    if (respuesta.length > 0) {
        //Armo un objeto para responder
        res.send({validar: true})

    }
    else{
        res.send({validar:false})    
    }
});

app.post('/addd', function(req, res)
{
    console.log("Soy un pedido POST", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
})


app.post('/editar', async function(req, res)
{
    console.log("Soy un pedido POST", req.body)
    await MySQL.realizarQuery(`UPDATE Palabras SET Palabras = '${req.body.newpalabra}', cant_letras = ${req.body.newcantidad} WHERE id_palabras = ${req.body.newidword}`)
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Palabras WHERE id_palabras = ${req.body.newidword}`);

    //Chequeo el largo del vector a ver si tiene datos
    if (respuesta.length > 0) {
        //Armo un objeto para responder
        res.send({validar: true})

    }
    else{
        res.send({validar:false})    
    }
});


app.post('/edit', function(req, res)
{
    console.log("Soy un pedido POST", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
})

app.post('/delete', async function(req, res)
{
    console.log("Soy un pedido POST", req.body)
    await MySQL.realizarQuery(`DELETE FROM Palabras WHERE id_palabras = ${req.body.deleteidword}`)
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Palabras WHERE id_palabras = ${req.body.deleteidword}`);

    //Chequeo el largo del vector a ver si tiene datos
    if (respuesta.length == 0) {
        //Armo un objeto para responder
        res.send({validar: true})

    }
    else{
        res.send({validar:false})    
    }
});

app.post('/deletee', function(req, res)
{
    console.log("Soy un pedido POST", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
})

app.post('/registrer', async function(req, res)
{
    console.log("Soy un pedido POST", req.body); 
    //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método POST
    //res.render('home', { mensaje: "Hola mundo!", usuario: req.body.usuario}); //Renderizo página "home" enviando un objeto de 2 parámetros a Handlebars
    await MySQL.realizarQuery(`INSERT INTO Usuario (DNI, Usuario, Contraseña, Nombre, Apellido) VALUES (${req.body.dni}, '${req.body.user}','${req.body.pass}', '${req.body.nombre}', '${req.body.apellido}') `)
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Usuario WHERE dni = ${req.body.dni}`);

    //Chequeo el largo del vector a ver si tiene datos
    if (respuesta.length > 0) {
        //Armo un objeto para responder
        res.send({validar: true})

    }
    else{
        res.send({validar:false})    
    }
});


app.post('/palabraRandom1',async function(req, res) {
    let palabra = await MySQL.realizarQuery(`SELECT Palabras FROM Palabras WHERE cant_letras = 4`)
    let elementoRandom =  Math.floor(Math.random() * palabra.length)
    let palabraAleatoria = palabra[elementoRandom]
    console.log(palabraAleatoria)
    res.send({randomWord: palabraAleatoria})
    
});

app.get('/home', function(req, res)
{
    console.log("Soy un pedido GET", req.query);
    res.render('nivel2', null)
});
