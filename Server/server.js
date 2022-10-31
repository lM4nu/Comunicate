//Librerias necesaias
const webPush = require('web-push');
const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');

//Librerias propias de node
const fs = require('fs');
const path = require('path');

//inicia la app node
const app = express();

//le decimos que use cors para evitar conflictos con otras conexiones
app.use(Cors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))

// Creamos las llaves

const vapidKeys = {
    "publicKey": "BH-6yg2vBmRxMIc7fHNk2pICGzFGMCy_Y0NKmX3vLTrI08MqlxIJ5uvNOMpVft8EXXNe-AhEqtO75IiEnelEeQg",
    "privateKey": "4A3UUaDWpiEK1Oy74wrBGoEgA_lQCGztLV1VTbKISsU"
}

//Validamos las llaves

webPush.setVapidDetails(
    'mailto:example@dominio.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

//Controladores

const guardarNotificacion = (req, res) => {
    
    const name = Math.floor(Date.now() / 1000);

    let tokenBrowser = req.body.token;

    let data = JSON.stringify(tokenBrowser, null, 2);

    fs.writeFile(`./tokens/token-${name}.json`, data)

}

const enviarNotificacion = (req, res) => {
    const pushSubscription = {
        endpoint: 'https://fcm.googleapis.com/fcm/send/cvnWI1iv1n4:APA91bEXvhI0HVrovVh82lI4HhcRKGT6dh28Bs3PpUAthvy68tz54PxZaVNj18cIOk8rK6EuAxZ3DCBdHiFM-v3y6cyD_s--JON13JP8zpaBMJE1fZUmijtzwUIst3QWxkpWgeX4VnGE',
        keys: {
            auth: 'H1UaF1zNA1jPlVJw6nLAGQ',
            p256dh: 'BJIAsd0i40iAtHUinrAzNeR8UGb5HG8oEHCkcyPOda67i9UVIUhtWpD0ULEnITYX9pT8TlMTT6-ZdZFMO0-r7QE'
        }
    };
    const payload = {
        "notification": {
            "title": "😄😄 Saludos",
            "body": "Subscribete a mi canal de YOUTUBE",
            "vibrate": [100, 50, 100],
            "image": "https://avatars2.githubusercontent.com/u/15802366?s=460&u=ac6cc646599f2ed6c4699a74b15192a29177f85a&v=4",
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    }

    webPush.sendNotification(
        pushSubscription,
        JSON.stringify(payload))
        .then(res => {
            console.log('Enviado !!');
        }).catch(err => {
            console.log('Error', err);
        })

    res.send({ data: 'Se envio subscribete!!' })

}

//Rutas

app.route('/save').post(guardarNotificacion);

app.route('/send').post(enviarNotificacion);

 // iniciar el servidor express

const httpServer = app.listen(9000, () => {
    console.log('HTTP Server running at http://localhost:' + httpServer.address().port)
});