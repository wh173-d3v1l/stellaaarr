/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const axios = require('axios');
const Config = require('../config');
const dbot = require('dbot-api');

const Language = require('../language');
const Lang = Language.getString('wallpaper');
const iLang = Language.getString('scrapers');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'wallpaper ?(.*)', fromMe: wk, desc: Lang.WP}, (async (message, match) => {
        if (!match[1]) return await message.sendMessage(infoMessage(iLang.NEED_WORDS));
        dbot.wallpaper(match[1]).then(async (result) => {
            var wall = Math.floor(result.length*Math.random());
            var respoimage = await axios.get(`${result[wall]}`, { responseType: 'arraybuffer' })
            await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `${MLang.by}`})
        });
}));

DrkBox.addCommand({pattern: 'img ?(.*)', fromMe: wk, desc: iLang.IMG_DESC}, (async (message, match) => { 
        if (!match[1]) return await message.sendMessage(infoMessage(iLang.NEED_WORDS));
        dbot.pinterest(match[1]).then(async (result) => {
      //    await message.client.sendMessage(message.jid,Lang.NEW_IMG,match[1],MessageType.text);

            var wall_a = Math.floor(result.length*Math.random());
    	    var wall_b = Math.floor(result.length*Math.random());
    	    var wall_c = Math.floor(result.length*Math.random());
    	    var wall_d = Math.floor(result.length*Math.random());
    	    var wall_e = Math.floor(result.length*Math.random());

            var image_a = await axios.get(`${result[wall_a]}`, { responseType: 'arraybuffer' })
            var image_b = await axios.get(`${result[wall_b]}`, { responseType: 'arraybuffer' })
            var image_c = await axios.get(`${result[wall_c]}`, { responseType: 'arraybuffer' })
            var image_d = await axios.get(`${result[wall_d]}`, { responseType: 'arraybuffer' })
            var image_e = await axios.get(`${result[wall_e]}`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(image_a.data), MessageType.image, {mimetype: Mimetype.png})
            await message.client.sendMessage(message.jid, Buffer.from(image_b.data), MessageType.image, {mimetype: Mimetype.png})
            await message.client.sendMessage(message.jid, Buffer.from(image_c.data), MessageType.image, {mimetype: Mimetype.png})
            await message.client.sendMessage(message.jid, Buffer.from(image_d.data), MessageType.image, {mimetype: Mimetype.png})
            await message.client.sendMessage(message.jid, Buffer.from(image_e.data), MessageType.image, {mimetype: Mimetype.png})
        });
}));
