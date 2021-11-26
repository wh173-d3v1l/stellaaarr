/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const dbot = require('dbot-api');
const axios = require('axios');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('instagram');
const TLang = Language.getString('tiktok');
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');
const iLoad = "🤖 Un momento, estoy buscando..."

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({ pattern: 'insta ?(.*)', fromMe: wk, desc: Lang.DESC}, async (message, match) => {
    const userName = match[1]
    if (!userName) return await message.sendMessage(errorMessage(Lang.need))
    await message.sendMessage(infoMessage(Lang.loading))
    await axios.get(`https://megayaa.herokuapp.com/api/igstalk?username=${userName}`).then(async (response) => {
        const { username, fullName, subscribersCount, subscribtions, profilePicHD } = response.data
        const instascrap = await axios.get(profilePicHD, { responseType: 'arraybuffer' })
        const msg = `*Nombre:* ${fullName}\n*Usuario:* ${username}\n*Seguidores:* ${subscribersCount}\n*Siguiendo:* ${subscribtions}`
        await message.sendMessage(Buffer.from(instascrap.data), MessageType.image, { caption: msg })
    }).catch(async (err) => {
        await message.sendMessage(errorMessage(Lang.iErr))
    })
});

DrkBox.addCommand({ pattern: 'twt ?(.*)', fromMe: wk, dontAddCommandList: true, desc: "Descargas de twitter" }, async (message, match) => {
    const twtLink = match[1]
    if (!twtLink) return await message.sendMessage(infoMessage("🤖 Necesito un link!"))
    await message.sendMessage(infoMessage(iLoad))

    await axios.get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${twtLink}`).then(async (response) => {
        const { format, result } = response.data
        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})
        const msg = `${format}`
    	if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: `${MLang.by}`, quoted: message.data })}
    	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: `${MLang.by}`, quoted: message.data })}
    }).catch (async (err) => {
     await message.sendMessage(errorMessage(Lang.iErr))
    });
});

DrkBox.addCommand({pattern: 'igdl ?(.*)', fromMe: wk, desc: "Descarga de Instagram"}, async (message, match) => {
    if (!match[1]) return await message.sendMessage(infoMessage("🤖 Necesito un link!"));
    await message.sendMessage(infoMessage(iLoad))

    await axios.get(`https://ianvanh.herokuapp.com/api/dbot/down/igdl?url=${match[1]}&apikey=${KLang.rest}`).then(async (response) => {
        const { downloadUrl, type } = response.data.result
        const profileBuffer = await axios.get(downloadUrl, {responseType: 'arraybuffer'})
        const msg = `${type}`
        if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: `${MLang.by}`, quoted: message.data })}
        if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: `${MLang.by}`, quoted: message.data })}
    }).catch (async (err) => {
     await message.sendMessage(errorMessage(Lang.iErr))
    });
});

DrkBox.addCommand({pattern: 'tiktok ?(.*)', fromMe: wk}, async (message, match) => {
     if (!match[1]) return await message.sendMessage(infoMessage("🤖 Necesito un link!"))

     await axios.get(`https://ianvanh.herokuapp.com/api/tiktok?url=${match[1]}&apikey=${KLang.rest}`).then(async (response) => {
        const { nowm } = response.data.result
    	const profileBuffer = await axios.get(nowm, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { mimetype: Mimetype.mp4, caption: `${MLang.by}`, quoted: message.data })
  }).catch (async (err) => {
    await message.sendMessage(errorMessage(Lang.iErr))
    });
});
