/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');

/*Tarjeta Owner*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'


if (Config.WORKTYPE == 'private') {
    DrkBox.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/drklogo.mp4"), 
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n*/menu* Muestra comandos del BOT\n⚠️\n*/upgrade* Mustra actualizaciones'}
        )
    }));
    
    DrkBox.addCommand({pattern: 'menu', fromMe: true}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ 🛑 /alive\n  Verifica si funciona el bot.\n\n┠⊷️ ☎️ /owner\n Número del creador del *BOT*\n\n┠⊷️ 🔁 /apkmod\n  Menú de aplicaciones premium.\n\n┠⊷️ ➡️ /deepai\n  Una potente Inteligencia Artificial con varias funciones.\n\n┠⊷️ ➡️ /infoanime\n  Menú para descargar imagenes anime y H.\n\n┠⊷️ ➡️ /infocovid\n  Obtén información acerca de la situación del Covid19 de varios países.\n\n┠⊷️ ➡️ /infotblend\n  Herramienta de mezcla para edición de videos.\n\n┠⊷️ ➡️ /removebg\n  Elimina el fondo de una fotografía que envíes.\n\n┠⊷️ ➡️ /qr\n  Obten un codigo QR de algún texto o enlace enviado.\n┠⊷️ ➡️ /price (token)\n  Obten precio de cualquier cryptomoneda.\n  🗒️ Ejemplo: /price btc\n\n┠⊷️ ➡️ /cambio\n  Intercambia cualquier divisa.\n  🗒️ Ejemplo: /cambio usd,cop,10\n\n┠⊷️ ➡️ /song (nombre de la canción)\n  Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n\n┠⊷️ ➡️ /mp4audio\n  Convierte un video en un audio.\n\n┠⊷️ ➡️ /imagesticker\n  Convierte un sticker en una foto.\n\n┠⊷️ ➡️ /ocr\n  Analiza una imagen si tiene texto y lo escribe. (beta)\n\n┠⊷️ ➡️ /trt (Responde a un texto)\n  Traduce el texto del mensaje al idioma que quieras (Ej.: /trt es en).\n\n┠⊷️ ➡️ /tts\n  Convierte el texto en un audio con la voz del Traductor de Google (Ej.: /tts hola).\n\n┠⊷️ ➡️ /yt (enlace)\n  Busca videos en YouTube.\n\n┠⊷️ ➡️ /video\n  Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n\n┠⊷️ ➡️ /insta (Usuario)\n  Busca perfiles de Instagram.\n\n┠⊷️ ➡️ /gay\n  Muestra cantidad de gay de la persona etiquetada o mensaje que respondas.\n\n┠⊷️ ➡️ /less\n  Muestra cantidad de leabiana de la persona etiquetada o mensaje que respondas.\n\n┠⊷️ ➡️ /wiki\n  Realiza busquedas en Wikipedia.\n\n┠⊷️ ➡️ /img\n  Busca alguna imagen desde Google Pictures (Ej.: /img Bugatti).\n\n┠⊷️ ➡️ /ss\n  Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n\n┠⊷️ ➡️ /animesay (Texto)\n  Escribe el texto dentro de la pancarta sostenida por una chica anime.\n\n┠⊷️ ➡️ /changesay (Texto)\n  Escribe el texto en un póster de Change My Mind.\n\n┠⊷️ ➡️ /trumpsay (Texto)\n  Escribe el texto en un Tweet de Donald Trump.\n\n┠⊷️ ➡️ /sticker (Responde una foto)\n  Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n\n┠⊷️ ➡️ /unvoice\n  Convierte un audio en una nota de voz.\n\n┠⊷️ ➡️ /wallpaper\n  Envía fondos de pantalla de alta resolución, hay muchos.\n\n┠⊷️ ➡️ /weather (Ciudad)\n  Envía el clima de la ciudad dada.\n\n┠⊷️ ➡️ /gif (Respondiendo a un video)\n  Convierte un video en gif, tiene que ser un video corto.\n\n┠⊷️ ➡️ /short (enlace)\n  Acorta cualquier enlace.\n\n┠⊷️ ➡️ /lyric (nombre de la canción)\n  Obtén la letra y los datos de la canción solicitada.\n\n┠⊷️ ➡️ /scan (número telefonico)\n  Busca si el número ingresado está registrado en WhatsApp.\n  🗒️ Ejemplo: /scan 57301xxxxxxx\n  ⚠️ El número debe ser ingresado con codigo de pais.\n\n┠⊷️ ➡️ /calc\n  Resuelve problemas de matematica basica.\n  🗒️ Ejemplo: /calc 9 x 7\n\n┠⊷️ ➡️ /simi\n  *IA* con la cual podras hablar y contarle de tus problemas 🙂\n  🗒️ Ejemplo: /simi hola, como estas?\n\n┠⊷️ ➡️ /meme (responde una foto)\n  Obten un meme para la foto que respondas.\n  🗒️ Ejemplo: /meme Hola,a todos\n  ⚠️ La , separa texto arriba del texto abajo.\n\n┠⊷️ ➡️ /logo\n  Escribe el texto en un *Logo Gamer*.\n\n┠⊷️ ➡️ /ip\n  Busca información sobre cualquier dirección *IP*.\n\n┠⊷️ ➡️ /wame (responde o etiqueta)\n  Obten enlace del número ingresado o mensaje respondido.\n\n┠⊷️ ➡️ /donation\n  Puedes ayudarme de una forma totalmente gratis si eres de Colombia.\n\n┠⊷️ ➡️ /share\n  Compartir enlace del *BOT*.\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));
    
    
    DrkBox.addCommand({pattern: 'upgrade', fromMe: true}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『/』\n┗━━━━━━━━━━\n┃\n┠⊷️ *CAMBIOS*\n┏━━━━━━━━━━━━\n  */qr*\nObten un codigo QR de algún texto o enlace enviado.\n\n*/apkmod*\nActualización del menú de aplicaciones.\n\n*/vip*\nYa los admin de grupos pueden usar los comandos vip por medio del *BOT*, para eso *DrkBot* necesita ser admin de ese grupo.\n┗━━━━━━━━━━━━');
    }));

    DrkBox.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    DrkBox.addCommand({pattern: 'owner', fromMe: true}, (async (message, match) => {
        await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
    }));
}
else if (Config.WORKTYPE == 'public') {
    DrkBox.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/drklogo.mp4"), 
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n*/menu* Muestra comandos del BOT\n⚠️\n*/upgrade* Mustra actualizaciones'}
        )
    }));
    
    DrkBox.addCommand({pattern: 'menu', fromMe: false}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ 🛑 /alive\n  Verifica si funciona el bot.\n\n┠⊷️ ☎️ /owner\n Número del creador del *BOT*\n\n┠⊷️ 🔁 /apkmod\n  Menú de aplicaciones premium.\n\n┠⊷️ ➡️ /deepai\n  Una potente Inteligencia Artificial con varias funciones.\n\n┠⊷️ ➡️ /infoanime\n  Menú para descargar imagenes anime y H.\n\n┠⊷️ ➡️ /infocovid\n  Obtén información acerca de la situación del Covid19 de varios países.\n\n┠⊷️ ➡️ /infotblend\n  Herramienta de mezcla para edición de videos.\n\n┠⊷️ ➡️ /removebg\n  Elimina el fondo de una fotografía que envíes.\n\n┠⊷️ ➡️ /qr\n  Obten un codigo QR de algún texto o enlace enviado.\n┠⊷️ ➡️ /price (token)\n  Obten precio de cualquier cryptomoneda.\n  🗒️ Ejemplo: /price btc\n\n┠⊷️ ➡️ /cambio\n  Intercambia cualquier divisa.\n  🗒️ Ejemplo: /cambio usd,cop,10\n\n┠⊷️ ➡️ /song (nombre de la canción)\n  Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n\n┠⊷️ ➡️ /mp4audio\n  Convierte un video en un audio.\n\n┠⊷️ ➡️ /imagesticker\n  Convierte un sticker en una foto.\n\n┠⊷️ ➡️ /ocr\n  Analiza una imagen si tiene texto y lo escribe. (beta)\n\n┠⊷️ ➡️ /trt (Responde a un texto)\n  Traduce el texto del mensaje al idioma que quieras (Ej.: /trt es en).\n\n┠⊷️ ➡️ /tts\n  Convierte el texto en un audio con la voz del Traductor de Google (Ej.: /tts hola).\n\n┠⊷️ ➡️ /yt (enlace)\n  Busca videos en YouTube.\n\n┠⊷️ ➡️ /video\n  Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n\n┠⊷️ ➡️ /insta (Usuario)\n  Busca perfiles de Instagram.\n\n┠⊷️ ➡️ /gay\n  Muestra cantidad de gay de la persona etiquetada o mensaje que respondas.\n\n┠⊷️ ➡️ /less\n  Muestra cantidad de leabiana de la persona etiquetada o mensaje que respondas.\n\n┠⊷️ ➡️ /wiki\n  Realiza busquedas en Wikipedia.\n\n┠⊷️ ➡️ /img\n  Busca alguna imagen desde Google Pictures (Ej.: /img Bugatti).\n\n┠⊷️ ➡️ /ss\n  Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n\n┠⊷️ ➡️ /animesay (Texto)\n  Escribe el texto dentro de la pancarta sostenida por una chica anime.\n\n┠⊷️ ➡️ /changesay (Texto)\n  Escribe el texto en un póster de Change My Mind.\n\n┠⊷️ ➡️ /trumpsay (Texto)\n  Escribe el texto en un Tweet de Donald Trump.\n\n┠⊷️ ➡️ /sticker (Responde una foto)\n  Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n\n┠⊷️ ➡️ /unvoice\n  Convierte un audio en una nota de voz.\n\n┠⊷️ ➡️ /wallpaper\n  Envía fondos de pantalla de alta resolución, hay muchos.\n\n┠⊷️ ➡️ /weather (Ciudad)\n  Envía el clima de la ciudad dada.\n\n┠⊷️ ➡️ /gif (Respondiendo a un video)\n  Convierte un video en gif, tiene que ser un video corto.\n\n┠⊷️ ➡️ /short (enlace)\n  Acorta cualquier enlace.\n\n┠⊷️ ➡️ /lyric (nombre de la canción)\n  Obtén la letra y los datos de la canción solicitada.\n\n┠⊷️ ➡️ /scan (número telefonico)\n  Busca si el número ingresado está registrado en WhatsApp.\n  🗒️ Ejemplo: /scan 57301xxxxxxx\n  ⚠️ El número debe ser ingresado con codigo de pais.\n\n┠⊷️ ➡️ /calc\n  Resuelve problemas de matematica basica.\n  🗒️ Ejemplo: /calc 9 x 7\n\n┠⊷️ ➡️ /simi\n  *IA* con la cual podras hablar y contarle de tus problemas 🙂\n  🗒️ Ejemplo: /simi hola, como estas?\n\n┠⊷️ ➡️ /meme (responde una foto)\n  Obten un meme para la foto que respondas.\n  🗒️ Ejemplo: /meme Hola,a todos\n  ⚠️ La , separa texto arriba del texto abajo.\n\n┠⊷️ ➡️ /logo\n  Escribe el texto en un *Logo Gamer*.\n\n┠⊷️ ➡️ /ip\n  Busca información sobre cualquier dirección *IP*.\n\n┠⊷️ ➡️ /wame (responde o etiqueta)\n  Obten enlace del número ingresado o mensaje respondido.\n\n┠⊷️ ➡️ /donation\n  Puedes ayudarme de una forma totalmente gratis si eres de Colombia.\n\n┠⊷️ ➡️ /share\n  Compartir enlace del *BOT*.\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));
    
    
    DrkBox.addCommand({pattern: 'upgrade', fromMe: false}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『/』\n┗━━━━━━━━━━\n┃\n┠⊷️ *CAMBIOS*\n┏━━━━━━━━━━━━\n  */qr*\nObten un codigo QR de algún texto o enlace enviado.\n\n*/apkmod*\nActualización del menú de aplicaciones.\n\n*/vip*\nYa los admin de grupos pueden usar los comandos vip por medio del *BOT*, para eso *DrkBot* necesita ser admin de ese grupo.\n┗━━━━━━━━━━━━');
    }));

    DrkBox.addCommand({pattern: 'owner', fromMe: false}, (async (message, match) => {
        await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
    }));

    DrkBox.addCommand({pattern: 'owner', fromMe: true}, (async (message, match) => {
        await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
    }));
}
