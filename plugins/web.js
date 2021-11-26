/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const Drkbox = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');
const TinyURL = require('tinyurl');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');

const Dboxcalc = "¡Realiza operaciones matematicas simples!"
const Dboxdesc = "*¡Utilice el comando según corresponda!*\n\n*Suma:* /calc 1 + 2\n*Resta:* /calc 5 - 2\n*Multiplicación:* /calc 3 x 5\n*División:* /calc 10 / 5"
const Dboxsuc = "Cálculo hecho ✅\n*Resultado:* "
const Dboxunsuc = "*Error de cálculo* ❌"


// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86
function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

Drkbox.addCommand({pattern: 'speedtest', fromMe: true, desc: Lang.SPEEDTEST_DESC}, (async (message, match) => {
    var msg = await message.reply(Lang.SPEEDTESTING);
    var st = await speedTest({acceptLicense: true, acceptGdpr: true});
    
    await message.client.sendMessage(
      message.jid,Lang.SPEEDTEST_RESULT + '\n\n' + 
    '*ISP:* ```' + st.isp + '```\n' +
    '*Ping:* ```' + st.ping.latency + 'ms```\n' +
    '*' + Lang.UPLOAD + ':* ```' + speedText(st.upload.bandwidth) + '```\n' +
    '*' + Lang.DOWNLOAD + ':* ```' + speedText(st.download.bandwidth) + '```\n',MessageType.text
    );
    await msg.delete();
}));

Drkbox.addCommand({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  var msg = await message.reply('```¡Ping!```');
  var end = new Date().getTime();

  await msg.delete();
  await message.client.sendMessage(
    message.jid,'*¡Pong!*\n```' + (end - start) + 'ms```', MessageType.text);
}));

if (Config.WORKTYPE == 'private') {

    Drkbox.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Enlace Original:*\n${match[1]}\n*Enlace Corto:*\n` + res, MessageType.text)
        });
    }));

    Drkbox.addCommand({pattern: 'calc ?(.*)', fromMe: true, desc: Dboxcalc }, (async (message, match) => {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,Dboxdesc, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), val1s = split[1], val2s = split[0]
            var result = -(-val2s - val1s)
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), val1r = split[1], val2r = split[0] 
            var result = val2r - val1r
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), val1m = split[1], val2m = split[0] 
            var result = val2m * val1m
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), val1d = split[1], val2d = split[0] 
            var result = val2d / val1d
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text)
            }
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    Drkbox.addCommand({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Enlace Original:*\n${match[1]}\n*Enlace Corto:*\n` + res, MessageType.text)
        });
    }));

    Drkbox.addCommand({pattern: 'calc ?(.*)', fromMe: false, desc: Dboxcalc }, (async (message, match) => {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,Dboxdesc, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), val1s = split[1], val2s = split[0]
            var result = -(-val2s - val1s)
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), val1r = split[1], val2r = split[0] 
            var result = val2r - val1r
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), val1m = split[1], val2m = split[0] 
            var result = val2m * val1m
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), val1d = split[1], val2d = split[0] 
            var result = val2d / val1d
            try { await message.client.sendMessage(message.jid,Dboxsuc + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Dboxunsuc + err,MessageType.text)
            }
        }
    }));
}
