/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const HeartBot = require('drkbot-npm');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''

const Language = require('../language');
const Lang = Language.getString('ttp');
const MLang = Language.getString('messages');
/*
if (Config.LANG == 'ES') desc_msg = 'Herramientas de creación de textos con acceso ilimitado.'
if (Config.LANG == 'EN') desc_msg = 'Textmaker tools with unlimited access.'
*/
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

// Text Ephoto360
DrkBox.addCommand({pattern: 'textmetalstar ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/metal-star-text-online-109.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'texttv ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-vintage-television-online-670.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textchr ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/glossy-chrome-text-effect-online-424.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textleaf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textmatrix ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/matrix-text-effect-154.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'text2gradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'textballoon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'textsnow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'text2gold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/gold-text-effect-pro-271.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'text5graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'text3fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'text2space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
DrkBox.addCommand({pattern: 'text3space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textviettel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/logo-viettel-156.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textgold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/modern-gold-3-212.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textangel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/wings-galaxy-206.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'text2pink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textabear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'text6neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textheart ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'text4graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textpuppy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textroad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textsad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'text3pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'textpubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var vid = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif, caption: `${MLang.by}` })
}));
DrkBox.addCommand({pattern: 'text2pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var vid = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.mp4, caption: `${MLang.by}` })
}));

// Textpro
DrkBox.addCommand({pattern: 'text2devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil2.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textblood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bld.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bld.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text2blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cbld.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cbld.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'texthub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    HeartBot.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hub.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hub.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textminion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/minion-text-effect-3d-online-978.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t3gr.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t3gr.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text3graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t3gr.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t3gr.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textberry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bry.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bry.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text4sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text2fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/fh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/fh.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/magma.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/magma.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textpaper ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/papert.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/papert.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text2harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp2n.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp2n.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    HeartBot.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    HeartBot.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    HeartBot.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text2glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gl.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gl.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

DrkBox.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    HeartBot.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.png'), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
