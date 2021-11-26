/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('simi');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'simi ?(.*)', fromMe: wk, desc: Lang.DESC}, async (message, match) => {
        if (match[1] === '') await message.sendMessage(Lang.what, MessageType.text, {quoted: message.data});
	if (match[1].includes('xxx') || match[1].includes('porno')) return await message.reply(Lang.err_type, {quoted: message.data});
	const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=es&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
  	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '🤖' + ' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
  } catch {
  		return await message.client.sendMessage(message.jid, Lang.iErr, MessageType.text);
  	}
});
