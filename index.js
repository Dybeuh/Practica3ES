var fs = require('fs');
var dir = '/entornoServidor/Copia';
const express = require('express');
const app = express();
const port = 8083;

    app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
    res.send('Bienvenido al servidor de DDV');
    });
    app.get('/dni', (req, res) => {
        if(req.query.num){
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            var letraCalculada = letras[req.query.num % 23];
            res.send('Tu dni es: ' + req.query.num + letraCalculada);
            }
        else{
            res.sendFile(__dirname + '/instrucciones.html');
        }
    
    });
    app.get('/escribir', (req, res) => {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        var miNombre = 'David Díaz Villaverde'
        fs.writeFile('/entornoServidor/Copia/holamundo.txt', miNombre, 
        err => {
            if (err) {
              console.error(err)
              return
            }})
    });
   
    app.get('/*', (req, res) => {
    res.send('No tenemos esta direccion');
    });

    app.listen(port,"127.0.0.3", () => {
    console.log(`Aplicacion dni escuchando en el puerto ${port}`);
    })
