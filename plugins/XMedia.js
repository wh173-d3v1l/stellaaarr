/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBot = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('conventer');
const MLang = Language.getString('messages');

if (Config.WORKTYPE == 'private') {

    DrkBot.addCommand({pattern: 'drkmedia', fromMe: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    

        await message.sendMessage('➡️Comando: *!mp4enhance*\nℹ️Desc: Mejora la calidad del video.\n\n➡️Comando: *!interp*\nℹ️Desc: Aumenta el FPS del video.\n\n➡️Comando: *!mp4slowmo*\nℹ️Desc: Aplica camara lenta al video.\n\n➡️Comando: *!x4mp4*\nℹ️Desc: Reduce la calidad del video en un 75%.\n\n➡️Comando: *!x2mp4*\nℹ️Desc: Reduce la calidad del video en un 50%.\n\n➡️Comando: *!agif*\nℹ️Desc: Convierte video a gif con voz.\n\n➡️Comando: *!mp4blur*\nℹ️Desc: Desenfoca el fondo del video.\n\n➡️Comando: *!mp4stab*\nℹ️Desc: Disminuye lo vibración del video.\n\n➡️Comando: *!mp4rainbow*\nℹ️Desc: Aplica un efecto de arco iris al video.\n\n➡️Comando: *!mp4color*\nℹ️Desc: Realza los colores del video.\n\n➡️Comando: *!mp4art*\nℹ️Desc: Aplica un efecto artistico al video.\n\n➡️Comando: *!mp4negative*\nℹ️Desc: Aplica un color negativo al video.\n\n➡️Comando: *!mp4vintage*\nℹ️Desc: Aplica un efecto nostálgico al video.\n\n➡️Comando: *!mp4bw*\nℹ️Desc: Aplica un efecto monocromático al video.\n\n➡️Comando: *!mp4reverse*\nℹ️Desc: Reproduce el video al revés.\n\n➡️Comando: *!mp4image*\nℹ️Desc: Convierte una foto en un video de 5 segundos.\n\n➡️Comando: *!mp3eq*\nℹ️Desc: Ajusta el sonido a un nivel cristalino.\n\n➡️Comando: *!mp3crusher*\nℹ️Desc: Distorsiona el sonido, hace ridículo.\n\n➡️Comando: *!mp3reverse*\nℹ️Desc: Reproduce el sonido al revés.\n\n➡️Comando: *!mp3pitch*\nℹ️Desc: Hace que el sonido sea más fino y rápido.\n\n➡️Comando *!mp3low*\nℹ️Desc: Hace que el sonido sea más profundo y lento.\n\n➡️Comando: *!x2mp3*\nℹ️Desc: Hace que el sonido sea dos veces más rápido.\n\n➡️Comando: *!mp3volume*\nℹ️Desc: Aumenta el nivel de sonido de un audio.\n\n➡️Comando: *!bwimage*\nℹ️Desc: Aplica un efecto monocromatico a una imagen\n\n➡️Comando: *!vintageimage*\nℹ️Desc: Aplica un efecto vinatge al video.\n\n➡️Comando: *!enhanceimage*\nℹ️Desc: Hace que la foto sea más clara.\n\n➡️Comando: *!blurimage*\nℹ️Desc: Desenfoca el fondo de la foto.\n\n➡️Comando: *!grenimage*\nℹ️Desc: Aplica efecto de granulado a la foto.\n\n➡️Comando: *!negativeimage*\nℹ️Desc: Aplica un filtro de color negativo a la foto.\n\n➡️Comando: *!rainbowimage*\nℹ️Desc: Aplica efecto arcoíris a la foto.\n\n➡️Comando: *!colorimage*\nℹ️Desc: Realza los colores de una imagen.\n\n➡️Comando: *!artimage*\nℹ️Desc: Aplica un efecto artístico a la foto.');

    }));

    DrkBot.addCommand({pattern: 'x4mp4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'x2mp4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4image', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'spectrum', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'waves', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'frequency', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'avec', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'volumeaudio', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'cqtaudio', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp3eq', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp3crusher', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp3reverse', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4vintage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4reverse', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*¡Necesito que respondas a un video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4bw', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'bwimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'vintageimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4enhance', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'blurimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4blur', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp3pitch', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4edge', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp3low', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'x2mp3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'edgeimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'enhanceimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp3volume', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    })); 

    DrkBot.addCommand({pattern: 'gif', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('¡Responde a un video!');
        var downloading = await message.client.sendMessage(message.jid,'```Convirtiendo en Gif...```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'agif', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }));

        DrkBot.addCommand({pattern: 'grenimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
            if (message.reply_message === false) return await message.sendMessage('Need Photo!');
            var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'interp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false && match[1] === '') return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `${MLang.by}\n_Interpolated to: ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'rainbowimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4rainbow', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'negativeimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4negative', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4art', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*¡Necesito que respondas a un video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'artimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4stab', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4color', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'colorimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'mp4slowmo', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: `True Slow-Motion ${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {
    DrkBot.addCommand({pattern: 'gif', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('¡Responde a un video!');
        var downloading = await message.client.sendMessage(message.jid,'```Convirtiendo en Gif...```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    DrkBot.addCommand({pattern: 'agif', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('¡Responde a un video!');
        var downloading = await message.client.sendMessage(message.jid,'```Convirtiendo en Gif...```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: `${MLang.by}`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
