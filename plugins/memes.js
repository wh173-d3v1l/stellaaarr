/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'meme ?(.*)', fromMe: wk, desc: Lang.MEMES_DESC}, (async (message, match) => {
        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            topText = split[0];
            bottomText = split[1];
        }
        else {
            topText = match[1];
            bottomText = 'DRKBOT';
        }
    
        var info = await message.reply(Lang.DOWNLOADING);
    
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        memeMaker({
            image: location,
            outfile: 'dbxmeme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('dbxmeme.png'), MessageType.image, {filename: 'dbxmeme.png', mimetype: Mimetype.png, caption: `${MLang.by}`});
            await info.delete();
        });
}));
