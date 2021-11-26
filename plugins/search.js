/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const DrkBot = require('../events');
const Config = require('../config');
const gis = require('g-i-s');
const got = require("got");

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBot.addCommand({pattern: 'search ?(.*)', fromMe: wk}, async (message, match) => {
    if (!match[1]) return await message.client.sendMessage(message.jid,'🤖 ¡Que imagenes quieres buscar!', MessageType.text);

    var opts = {
      searchTerm: `${match[1]}`,
      queryStringAddition: '&tbs=ic:trans',
      filterOutDomains: [
        'pinterest.com'
      ]
    };
    var split = '5'
    await gis(opts), async(error, result) => {
         for (var i = 0; i < (results.length < `${split}` ? results.length : `${split}`); i++) {

            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();

            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            })
         }
    }
});
