/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys')

let wk = Config.WORKTYPE == 'public' ? false : true

/*################# MENSAJES #################*/
const comands = '┏━━━━━━━━━━━━━━━━━━━\n┃〘 *PRUEBA* 〙\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━'

const dapdate = '┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『/』\n┗━━━━━━━━━━\n┃\n┠⊷️ *CAMBIOS*\n┏━━━━━━━━━━━━\n  */qr*\nObten un codigo QR de algún texto o enlace enviado.\n\n*/apkmod*\nActualización del menú de aplicaciones.\n\n*/vip*\nYa los admin de grupos pueden usar los comandos vip por medio del *BOT*, para eso *DrkBot* necesita ser admin de ese grupo.\n┗━━━━━━━━━━━━'
/*################# FIN #################*/

/*################# VCard #################*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'
/*################# FIN #################*/

/*################# CHAT #################*/
DrkBox.addCommand({on: 'text', fromMe: wk}, (async (message, match) => {
	if (message.message.includes('dbot1')) {
		let buttons = [
		  {buttonId: 'Owner', buttonText: {displayText: "OWNER"}, type: 1},
		  {buttonId: '/ping', buttonText: {displayText: "PING"}, type: 1}
		]
		let buttonMessage = {
		  contentText: comands,
		  footerText: 'DrkBot',
		  buttons: buttons,
		  headerType: 1
		}
		await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, {quoted: message.data});
	}
        else if (message.message.includes('Owner')) {
		await message.client.sendMessage(message.jid, {displayname: "Ian", vcard: vCard}, MessageType.contact, {quoted: message.data});
	}
	else if (message.message.includes('Update')) {
		await message.client.sendMessage(message.jid, dapdate, MessageType.text, {quoted: message.data});
	}
}));
/*################# FIN #################*/

DrkBox.addCommand({pattern: "anime", fromMe: wk}, (async (message, match) => {

dbuttons = [
    {buttonId: '/sfwwaifu', buttonText: {displayText: "WAIFU"}, type: 1},
    {buttonId: '/sfwneko', buttonText: {displayText: "NEKO"}, type: 1}
	  ]
const buttonMessage = {
     contentText: 'Waifu o Neko',
     footerText: 'DrkBot',
     buttons: dbuttons,
     headerType: 1
     }
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, {quoted: message.data});
}));
