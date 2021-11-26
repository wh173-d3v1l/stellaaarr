/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('7e684ac4-e63f-43a4-a39e-a002029039fe'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

if (Config.WORKTYPE == 'private') {

    DrkBox.addCommand({pattern: 'deepai$', fromMe: true, deleteCommand: true, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *DEEPAI COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ ➡️ /colorai\n  Colorea la foto que esté en blanco y negro.\n\n┠⊷️ ➡️ /dreamai\n  Aplica efecto de ensueño a la foto.\n\n┠⊷️ ➡️ /toonai\n  Convierte la cara de la foto en un personaje de dibujos animados con Inteligencia Artificial.\n\n┠⊷️ ➡️ /nudity\n  Detecta la probabilidad de que una imagen contenga desnudez y deba considerarse NSFW.\n\n┠⊷️ ➡️ /ganstyle\n  Coloca un filtro a la foto respondida.\n\n┠⊷️ ➡️ /neuraltalkai\n  Trata de explica lo que está pasando en la foto con Inteligencia Artificial (Modo BETA).\n\n┠⊷️ ➡️ /textai <texto>\n  Crea una historia artificial para ti a partir de tu oración, por ahora solo en inglés.\n  Ejemplo: /textai hot\n  El resultado puedes responderlo con el comando (/trt en es) para traducirlo.\n\n⚠️ *Todas las herramientas funcionan con aprendizaje. Cuanto más las uses mejor funcionarán*\n\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n');
    }));

    DrkBox.addCommand({pattern: 'colorai', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizando... 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
    
    DrkBox.addCommand({pattern: 'nudity', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Buscando partes desnudas... 🔞',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("nsfw-detector", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'waifuai', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Mezclando... 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'superai', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Mejorando... 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${resp.output}`);

    }));

    DrkBox.addCommand({pattern: 'dreamai', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Noche estrellada... 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'neuraltalkai', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Leyendo... 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

    }));

    DrkBox.addCommand({pattern: 'toonai', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Caricaturizando... 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${resp.output}`);

    }));

    DrkBox.addCommand({pattern: 'ganstyle', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Creando... ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
}
else if (Config.WORKTYPE == 'public') {

    DrkBox.addCommand({pattern: 'deepai', fromMe: false, deleteCommand: true, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *DEEPAI COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ ➡️ /colorai\n  Colorea la foto que esté en blanco y negro.\n\n┠⊷️ ➡️ /dreamai\n  Aplica efecto de ensueño a la foto.\n\n┠⊷️ ➡️ /toonai\n  Convierte la cara de la foto en un personaje de dibujos animados con Inteligencia Artificial.\n\n┠⊷️ ➡️ /nudity\n  Detecta la probabilidad de que una imagen contenga desnudez y deba considerarse NSFW.\n\n┠⊷️ ➡️ /ganstyle\n  Coloca un filtro a la foto respondida.\n\n┠⊷️ ➡️ /neuraltalkai\n  Trata de explica lo que está pasando en la foto con Inteligencia Artificial (Modo BETA).\n\n┠⊷️ ➡️ /textai <texto>\n  Crea una historia artificial para ti a partir de tu oración, por ahora solo en inglés.\n  Ejemplo: /textai hot\n  El resultado puedes responderlo con el comando (/trt en es) para traducirlo.\n\n⚠️ *Todas las herramientas funcionan con aprendizaje. Cuanto más las uses mejor funcionarán*\n\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n');
    }));

    DrkBox.addCommand({pattern: 'colorai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizando... 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
    
    DrkBox.addCommand({pattern: 'nudity', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Buscando partes desnudas... 🔞',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("nsfw-detector", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'waifuai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Mezclando... 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'superai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Mejorando... 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'moodai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${resp.output}`);

    }));

    DrkBox.addCommand({pattern: 'dreamai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Noche estrellada... 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'neuraltalkai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Leyendo... 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'ttiai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

    }));

    DrkBox.addCommand({pattern: 'toonai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Caricaturizando... 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    DrkBox.addCommand({pattern: 'textai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${resp.output}`);

    }));

    DrkBox.addCommand({pattern: 'ganstyle', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');

        var downloading = await message.client.sendMessage(message.jid,'Creando... ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *DrkBot*'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
}
