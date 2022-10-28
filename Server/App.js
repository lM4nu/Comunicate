//Librerias necesaias
const webPush = require('web-push');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Librerias propias de node
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Creamos las llaves

const vapidKeys = {
    "publicKey": "BH-6yg2vBmRxMIc7fHNk2pICGzFGMCy_Y0NKmX3vLTrI08MqlxIJ5uvNOMpVft8EXXNe-AhEqtO75IiEnelEeQg",
    "privateKey": "4A3UUaDWpiEK1Oy74wrBGoEgA_lQCGztLV1VTbKISsU"
}

//V alidamos las llaves

webPush.setVapidDetails(
    'mailto:example@dominio.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

// En caso de error

const handlerResponse = (res, data, code = 200) => {
    res.status(code).send({ data });
}

// Controladores

const savePush = (req, res) => {

    const name = Math.floor(Daten.now() / 1000);

    let tokenBrowser = req.body.token;

    let data = JSON.stringify(tokenBrowser, null, 2);

    fs.writeFile('/.token/token-${name}.json', data)
    //
}

const sendPush = (req, res) => {

    const payload = {
        "notification": {
            "title": "Notificacion de prueba",
            "body": "Esto es una notificacion de prueba",
            "vibrate": [100, 50, 100],
            "image": "",
            "action": [{
                "action": "explore",
                "title": "prueba"
            }]
        }
    }

    const directoryPath = path.join(__dirname, 'token');

    fs.readdir(directoryPath);

    files.array.forEach((file) => {
        const tokenRaw = fs.readFileSync('${directoryPath}/${file}');
        const tokenParse = JSON.parse(tokenRaw);

        webPush.sendNotification(
            tokenParse,
            JSON.stringify(payload))
            .then(res => {
                console.log('Enviado');
            }).catch(err => {
                console.log('Permisos o keys invalidas');
            })
    });

}

// Rutas

app.route('/save').post(savePush);

app.route('/send').post(sendPush);

// Iniciar servidor

//usamos 9000 de prueba por ahora
const httpServer = app.listen(9000, () => {
    console.log("El servidor esta corriendo en: " + httpServer.address().port);
});

// node app.js -> te dira en que servidor esta corriendo node