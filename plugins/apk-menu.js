/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const axios = require('axios');
const { MessageType } = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('apk');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: "apkmod ?(.*)", fromMe: wk}, (async (message, match) => {
	if (match[1] === "") {
		await message.reply(`*USAR*\n${MLang.prefix}apkmod games\n${MLang.prefix}apkmod tools`, {quoted: message.data});
	} else if (match[1] === "games") {
await message.sendMessage(`┏━━━━━━━━━━━━━━━━━━━
┃〘 ☣️ *JUEGOS MOD* ☣️ 〙
┗━━━━━━━━━━━━━━━━━━━
│
├❖ 1v1 Lol Mod
├⊷️ ${MLang.prefix}game 1
├❖ Among Us Mod
├⊷️ ${MLang.prefix}game 2
├❖ Archero
├⊷️ ${MLang.prefix}game 3
├❖ Battle Ops
├⊷️ ${MLang.prefix}game 4
├❖ Boom Karts
├⊷️ ${MLang.prefix}game 5
├❖ CSR Racing 2
├⊷️ ${MLang.prefix}game 6
├❖ Death Target
├⊷️ ${MLang.prefix}game 7
├❖ Dust Settle
├⊷️ ${MLang.prefix}game 8
├❖ Harry Poter (puzzles)
├⊷️ ${MLang.prefix}game 9
├❖ Jetpack Joyride Mod
├⊷️ ${MLang.prefix}game 10
├❖ Metal SLug (todos)
├⊷️ ${MLang.prefix}game 11
├❖ Minecraft Mod
├⊷️ ${MLang.prefix}game 12
├❖ PVZ Mod
├⊷️ ${MLang.prefix}game 13
├❖ Sky Fighter
├⊷️ ${MLang.prefix}game 14
├❖ Sniper 3D Mod
├⊷️ ${MLang.prefix}game 15
├❖ State Of Survival
├⊷️ ${MLang.prefix}game 16
├❖ Subway Surfer Mod
├⊷️ ${MLang.prefix}game 17
├❖ WWE Undefeated
└⊷️ ${MLang.prefix}game 18
┏━━━━━━━━━━━━━━━━━━━
  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉
┗━━━━━━━━━━━━━━━━━━━`);
		}
		else if (match[1] === "tools") {
await message.sendMessage(`┏━━━━━━━━━━━━━━━━━━━
┃〘 ☣️ *HERRAMIENTAS* ☣️ 〙
┗━━━━━━━━━━━━━━━━━━━
◪ *LAUNCHER, ICON PACK*
│
├❖ Apex Launcher
├⊷️ ${MLang.prefix}tool 1
├❖ Blue IP (Icon Pack)
├⊷️ ${MLang.prefix}tool 2
├❖ Nova Launcher
├⊷️ ${MLang.prefix}tool 3
├❖ Rugos (Icon Pack)
└⊷ ${MLang.prefix}tool 4

◪ *EDICIÓN*
│
├❖ Canva Pro
├⊷️ ${MLang.prefix}tool 5
├❖ Kinemaster Mod
├⊷️ ${MLang.prefix}tool 6
├❖ LightRoom Mod
├⊷️ ${MLang.prefix}tool 7
├❖ Photo Editor
├⊷️ ${MLang.prefix}tool 8
├❖ Photoshop
├⊷️ ${MLang.prefix}tool 9
├❖ Pics Art Mod
├⊷️ ${MLang.prefix}tool 10
├❖ Retouch
├⊷️ ${MLang.prefix}tool 11
├❖ Snapseed
├⊷️ ${MLang.prefix}tool 12
├❖ Story Art
├⊷️ ${MLang.prefix}tool 13
├❖ VivaCut Mod
└⊷ ${MLang.prefix}tool 14


◪ *HERRAMIENTAS*
│
├❖ Call Recorder Pro
├⊷️ ${MLang.prefix}tool 15
├❖ Down Acelerator Plus
├⊷️ ${MLang.prefix}tool 16
├❖ Drk-Calc (Calculator)
├⊷️ ${MLang.prefix}tool 17
├❖ Drk-Gen (CC-Gen)
├⊷️ ${MLang.prefix}tool 18
├❖ ES File
├⊷️ ${MLang.prefix}tool 19
├❖ Es File Mod
├⊷️ ${MLang.prefix}tool 20
├❖ Fing (Scaner Red)
├⊷️ ${MLang.prefix}tool 21
├❖ Grabador Pantalla Pro
├⊷️ ${MLang.prefix}tool 22
├❖ Photo Math Plus
├⊷️ ${MLang.prefix}tool 23
├❖ PowerAmp
├⊷️ ${MLang.prefix}tool 24
├❖ QR Creator
├⊷️ ${MLang.prefix}tool 25
├❖ RAR
├⊷️ ${MLang.prefix}tool 26
├❖ Shazam
├⊷️ ${MLang.prefix}tool 27
├❖ TeamViewer
├⊷️ ${MLang.prefix}tool 28
├❖ True Caller
├⊷️ ${MLang.prefix}tool 29
├❖ Vanced Manager
├⊷️ ${MLang.prefix}tool 30
├❖ WebVideoCaster Mod
├⊷️ ${MLang.prefix}tool 31
├❖ Whatsapp Mod
├⊷️ ${MLang.prefix}tool 32
├❖ Whatsapp Plus
├⊷️ ${MLang.prefix}tool 33
├❖ Whatsapp Tool
├⊷️ ${MLang.prefix}tool 34
├❖ WPS Office
├⊷️ ${MLang.prefix}tool 35
├❖ Xender
├⊷️ ${MLang.prefix}tool 36
├❖ Z-Camera
└⊷ ${MLang.prefix}tool 37

◪ *MULTIMEDIA*
│
├❖ Corner Kick (TV Pro)
├⊷️ ${MLang.prefix}tool 38
├❖ Deezer Mod
├⊷️ ${MLang.prefix}tool 39
├❖ eSound (Music Pro)
├⊷️ ${MLang.prefix}tool 40
├❖ Freezer (Music Down)
├⊷️ ${MLang.prefix}tool 41
├❖ Fun Player (TV Pro)
├⊷️ ${MLang.prefix}tool 42
├❖ Jet Audio
├⊷️ ${MLang.prefix}tool 43
├❖ Mx Player
├⊷️ ${MLang.prefix}tool 44
├❖ PlayHub+
├⊷️ ${MLang.prefix}tool 45
├❖ Radio Box Pro
├⊷️ ${MLang.prefix}tool 46
├❖ TikTok Mod
├⊷️ ${MLang.prefix}tool 47
├❖ TuneIn Mod
├⊷️ ${MLang.prefix}tool 48
├❖ YMusic
├⊷️ ${MLang.prefix}tool 49
├❖ VLC Player
├⊷️ ${MLang.prefix}tool 50
├❖ Zedge Mod
└⊷ ${MLang.prefix}tool 51

◪ *VPN*
│
├❖ AppGuard (VPN)
├⊷️ ${MLang.prefix}tool 52
├❖ Hospot Shield
├⊷️ ${MLang.prefix}tool 53
├❖ Psiphon
├⊷️ ${MLang.prefix}tool 54
├❖ VPN Hub
└⊷ ${MLang.prefix}tool 55
┏━━━━━━━━━━━━━━━━━━━
  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉
┗━━━━━━━━━━━━━━━━━━━`);}
}));
