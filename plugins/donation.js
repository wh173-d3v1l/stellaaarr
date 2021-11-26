/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const con = require('../config');
const fs = require('fs');

  
  if (con.WORKTYPE == 'private') {
  
    DrkBox.addCommand({pattern: 'donation', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy DarkBox*\n\nSi quieres puedes apoyarme de una forma totalmente gratis!\nPara saber como podrias ayudarme coloca el comando /apoyo\n\n*Para ayudas internacionales*\nPayPal: paypal.me/DrkBot`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Las personas que puedan ayudarme no importa de la forma que sea tendran como recompenza que el *BOT* pueda ser añadido a su grupo no importa cuantos integrantes tenga..\nSi quieres y puedes apoyarme envíame una captura de pantalla de tu ayuda y el link del grupo al que quieras que ingrese el *BOT* y en el menor tiempo posible te respondere');
  
        }));

     DrkBox.addCommand({pattern: 'share', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy DarkBox*\n\n¡Te invito a que te unas a este BOT, con el cual podras descargar música, videos, fondos de pantalla, crear sticker y muchas cosas más y lo mejor todo esto sin salir de WhatSapp. 🤩\n\n*Numero del BOT*: Solo entra y envía el primer mensaje que sale para que te muestre el menu de opciones\nhttp://wa.me/573046793853?text=/alive`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        }));

    DrkBox.addCommand({pattern: 'apoyo', fromMe: true}, (async (message, match) => {
      await message.sendMessage('Hola como estas, veo que quieres apoyarme.\nLa forma en la que podrias ayudarme es convirtiendote en mi referido de una aplicación llamada TikTok\nLo unico que tendrias que hacer es descargar la aplicación desde Android(Play Store) Iphone(App Store) y una vez descargada registrarte y poner mi codigo de referido, eso seria todo..\nMi codigo de referido es el siguiente y muchas gracias.');
      await new Promise(r => setTimeout(r, 700));
      await message.sendMessage('TikTok:\nGBEGCV6H8LYTG');
      await new Promise(r => setTimeout(r, 700));
      await message.sendMessage('Kwai:\nKwai347645888');
    }));
  }
  else if (con.WORKTYPE == 'public') {

    DrkBox.addCommand({pattern: 'donation', fromMe: false}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy DarkBox*\n\nSi quieres puedes apoyarme de una forma totalmente gratis!\nPara saber como podrias ayudarme coloca el comando /apoyo\n\n*Para ayudas internacionales*\nPayPal: paypal.me/DrkBot`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Las personas que puedan ayudarme no importa de la forma que sea tendran como recompenza que el *BOT* pueda ser añadido a su grupo no importa cuantos integrantes tenga..\nSi quieres y puedes apoyarme envíame una captura de pantalla de tu ayuda y el link del grupo al que quieras que ingrese el *BOT* y en el menor tiempo posible te respondere');
  
        }));

     DrkBox.addCommand({pattern: 'share', fromMe: false}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy DarkBox*\n\n¡Te invito a que te unas a este BOT, con el cual podras descargar música, videos, fondos de pantalla, crear sticker y muchas cosas más y lo mejor todo esto sin salir de WhatSapp. 🤩\n\n*Numero del BOT*: Solo entra y envía el primer mensaje que sale para que te muestre el menu de opciones\nhttp://wa.me/573046793853?text=/alive`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        }));

    DrkBox.addCommand({pattern: 'apoyo', fromMe: false}, (async (message, match) => {
      await message.sendMessage('Hola como estas, veo que quieres apoyarme.\nLa forma en la que podrias ayudarme es convirtiendote en mi referido de una aplicación llamada TikTok\nLo unico que tendrias que hacer es descargar la aplicación desde Android(Play Store) Iphone(App Store) y una vez descargada registrarte y poner mi codigo de referido, eso seria todo..\nMi codigo de referido es el siguiente y muchas gracias.');
      await new Promise(r => setTimeout(r, 700));
      await message.sendMessage('TikTok:\nGBEGCV6H8LYTG');
      await new Promise(r => setTimeout(r, 700));
      await message.sendMessage('Kwai:\nKwai347645888');
    }));
  }
