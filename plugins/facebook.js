/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios')
const HeartBot = require('drkbot-npm')

var fb_desc = ''
var fb_need = ''
if (Config.LANG == 'ES') fb_desc = 'Descarga videos de Facebook.', fb_need = '*¡Ingrese un enlace de video válido!*'
if (Config.LANG == 'EN') fb_desc = 'Downloads videos from Facebook.', fb_need = '*Please Enter a Valid Video Link!*'

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'fb ?(.*)', fromMe: wk, desc: fb_desc, usage: 'fb https://www.facebook.com/Google/videos/10156367314197838'}, (async (message, match) => {
  var reg = new RegExp(/^http(?:s?):\/\/(?:www\.|web\.|m\.)?facebook\.com\/([A-z0-9\.]+)\/videos(?:\/[0-9A-z].+)?\/(\d+)(?:.+)?$/, 'gm')
  var is_valid = reg.test(match[1])
  if (!is_valid) return await message.client.sendMessage(message.jid, fb_need, MessageType.text)
  var payload = await HeartBot.facebook(match[1])
  var auth_message = await HeartBot.facebook_message(Config.LANG)

  var video = await axios.get(payload.video, { responseType: 'arraybuffer'})
  var caption_message = auth_message.username + payload.username + '\n' +
    auth_message.title + payload.title + '\n' +
    auth_message.caption + payload.caption + '\n' +
    auth_message.play + payload.plays + '\n' +
    auth_message.like + payload.like + '\n' +
    auth_message.share + payload.share + '\n' +
    auth_message.comment + payload.comment + '\n' +
    auth_message.creation + payload.created_at
  await message.sendMessage(Buffer.from(video.data), MessageType.video, { caption: caption_message, mimetype: Mimetype.mp4 })
}));
