/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const HeartBot = require('drkbot-npm');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');
const MLang = Language.getString('messages');
const KLang = Language.getString('keys');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'ss ?(.*)', fromMe: wk}, async (message, match) => {
     if (!match[1]) return await message.sendMessage("⚠️: 🤖 *Necesito un link!*")

     await axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=${KLang.SS}&full_page=true&format=png&response_type=json&url=${match[1]}`).then(async (response) => {
        const { url } = response.data
    	const profileBuffer = await axios.get(url, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`, quoted: message.data })
  }).catch (async (err) => {
    await message.sendMessage('🛑: 🤖 *Parece que tenemos un error!*')
    });
});
