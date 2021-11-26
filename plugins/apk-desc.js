/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const Config = require('../config');
const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');

let wk = Config.WORKTYPE == 'public' ? false : true

/*GAMES*/
DrkBox.addCommand({pattern: "game ?(.*)", fromMe: wk}, (async (message, match) => {
		if (match[1] === "1") {
			await message.sendMessage('💎 *1v1 Lol Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/7rUiaB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "2") {
			await message.sendMessage('💎 *Among Us Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/0H2otFf', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "3") {
			await message.sendMessage('💎 *Archero* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/Ml6gGm', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "4") {
			await message.sendMessage('💎 *Battle Ops* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/gFxnTmM', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "5") {
			await message.sendMessage('💎 *Boom Karts* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/WYUio5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "6") {
			await message.sendMessage('💎 *CSR Racing 2* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/pUFhf5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "7") {
			await message.sendMessage('💎 *Death Target* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/8BYwIU', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "8") {
			await message.sendMessage('💎 *Dust Settle* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/BIDP93', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "9") {
			await message.sendMessage('💎 *Harry Poter (puzzles)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/5Hb5HJ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "10") {
			await message.sendMessage('💎 *Jetpack Joyride Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/O8lnRe', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "11") {
			await message.sendMessage('💎 *Metal SLug (todos)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/c5ekal', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "12") {
			await message.sendMessage('💎 *Minecraft Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/AXAqB4', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "13") {
			await message.sendMessage('💎 *Plantas Vs Zombies Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/wpC9IC', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "14") {
			await message.sendMessage('💎 *Sky Fighter* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/1A3Pay', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "15") {
			await message.sendMessage('💎 *Sniper 3D Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/74OFrB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "16") {
			await message.sendMessage('💎 *State Of Survival* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/zhe7dUr', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "17") {
			await message.sendMessage('💎 *Subway Surfer Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/grcoQ7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "18") {
			await message.sendMessage('💎 *WWE Undefeated* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/KZlvr9', MessageType.text, {quoted: message.data});
		}
}));

/*TOOLS*/
DrkBox.addCommand({pattern: "tool ?(.*)", fromMe: false}, (async (message, match) => {
	// Launcher
		if (match[1] === "1") {
			await message.sendMessage('💎 *Apex Launcher* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/gox6jm1', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "2") {
			await message.sendMessage('💎 *Blue IP (Icon Pack)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/R0LIud', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "3") {
			await message.sendMessage('💎 *Nova Launcher* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/LmcuVB\n📌 https://ouo.io/lPr7K8h', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "4") {
			await message.sendMessage('💎 *Rugos (Icon Pack)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/nJfdtO', MessageType.text, {quoted: message.data});
		}
	// Edicion
		else if (match[1] === "5") {
			await message.sendMessage('💎 *Canva Pro* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/8uJdMc', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "6") {
			await message.sendMessage('💎 *Kinemaster Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/Mxwpb5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "7") {
			await message.sendMessage('💎 *LightRoom Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/pQAUuW', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "8") {
			await message.sendMessage('💎 *Photo Editor* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/amYqmP', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "9") {
			await message.sendMessage('💎 *Photoshop* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/uqanCd\n📌 https://ouo.io/9iU3re', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "10") {
			await message.sendMessage('💎 *Pics Art Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/mKXyfQ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "11") {
			await message.sendMessage('💎 *Retouch* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/w1RXvI', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "12") {
			await message.sendMessage('💎 *Snapseed* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/tfAal8d', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "13") {
			await message.sendMessage('💎 *Story Art* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/vL95Kmj', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "14") {
			await message.sendMessage('💎 *VivaCut Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/tXTErv', MessageType.text, {quoted: message.data});
		}
	// Herramientas
		else if (match[1] === "15") {
			await message.sendMessage('💎 *Call Recorder Pro* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/NIPAuK', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "16") {
			await message.sendMessage('💎 *Down Acelerator Plus* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/j2BRYM', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "17") {
			await message.sendMessage('💎 *Drk-Calc (Calculator)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/UcZRLu', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "18") {
			await message.sendMessage('💎 *Drk-Gen (CC-Gen)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/i8vPWo', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "19") {
			await message.sendMessage('💎 *ES File* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/Lypo1d', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "20") {
			await message.sendMessage('💎 *Es File Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/ZoCSLsV', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "21") {
			await message.sendMessage('💎 *Fing (Scaner Red)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/rgLefX', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "22") {
			await message.sendMessage('💎 *Grabador Pantalla Pro* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/czYxpX', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "23") {
			await message.sendMessage('💎 *Photo Math Plus* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/wAXM1S', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "24") {
			await message.sendMessage('💎 *PowerAmp* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/V5rvEj9', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "25") {
			await message.sendMessage('💎 *QR Creator* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/xRPKvU', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "26") {
			await message.sendMessage('💎 *RAR* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/E4FsUY', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "27") {
			await message.sendMessage('💎 *Shazam* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/gy14l7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "28") {
			await message.sendMessage('💎 *TeamViewer* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/N7Y7FB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "29") {
			await message.sendMessage('💎 *True Caller* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/pxbEL2R', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "30") {
			await message.sendMessage('💎 *Vanced Manager* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/x1VmJ2', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "31") {
			await message.sendMessage('💎 *WebVideoCaster Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/nMRzse', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "32") {
			await message.sendMessage('💎 *Whatsapp Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/DAsHHV', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "33") {
			await message.sendMessage('💎 *Whatsapp Plus* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/b1cTjJ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "34") {
			await message.sendMessage('💎 *Whatsapp Tool* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/LFu1Vp', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "35") {
			await message.sendMessage('💎 *WPS Office* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/SeFWPqH', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "36") {
			await message.sendMessage('💎 *Xender* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/JN9qUY', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "37") {
			await message.sendMessage('💎 *Z-Camera* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/BNhaHz', MessageType.text, {quoted: message.data});
		}
	// Multimedia
		else if (match[1] === "38") {
			await message.sendMessage('💎 *Corner Kick (TV Pro)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/eNENWN', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "39") {
			await message.sendMessage('💎 *Deezer Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/zI0X6S', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "40") {
			await message.sendMessage('💎 *eSound (Music Pro)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/ydlxNb5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "41") {
			await message.sendMessage('💎 *Freezer (Music Down)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/ufEgM7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "42") {
			await message.sendMessage('💎 *Fun Player (TV Pro)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/lzZ4irb', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "43") {
			await message.sendMessage('💎 *Jet Audio* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/1PVitOz', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "44") {
			await message.sendMessage('💎 *Mx Player* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/hqGw0Ri', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "45") {
			await message.sendMessage('💎 *PlayHub+* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/B1sxFxl', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "46") {
			await message.sendMessage('💎 *Radio Box Pro* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/xcQoEL', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "47") {
			await message.sendMessage('💎 *TikTok Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/hpF9Cow\n📌 https://ouo.io/3Rol8tf', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "48") {
			await message.sendMessage('💎 *TuneIn Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/8miwQY', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "49") {
			await message.sendMessage('💎 *YMusic* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/PY3EMn', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "50") {
			await message.sendMessage('💎 *VLC Player* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/xTWMldE', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "51") {
			await message.sendMessage('💎 *Zedge Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/WJiwWig', MessageType.text, {quoted: message.data});
		}
	// Vpn
		else if (match[1] === "52") {
			await message.sendMessage('💎 *AppGuard (VPN)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/mqY0XGq', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "53") {
			await message.sendMessage('💎 *Hospot Shield* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/d6QPjwj', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "54") {
			await message.sendMessage('💎 *Psiphon* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/hgiFv2\n📌 https://ouo.io/eSzAHNp', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "55") {
			await message.sendMessage('💎 *VPN Hub* 💎\n##desc\n⚠️ ##aviso\n📌 ##link', MessageType.text, {quoted: message.data});
		}
}));
