/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

/*
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
*/

const DrkBox = require("../events");
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const axios = require('axios');
const fs = require("fs");

const Language = require('../language');
const Lang = Language.getString('crypto');
const KLang = Language.getString('keys');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({ pattern: 'price ?(.*)', fromMe: wk, desc: Lang.DESC}, async (message, match) => {
	const userDrk = match[1]
	if (userDrk === '') return await message.sendMessage(infoMessage(Lang.need))

	await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${userDrk}&tsyms=USD,COP&api_key={${KLang.CC}}`).then(async (response) => {
		const {USD, COP} = response.data
		const msg = `*Token:* ${userDrk}\n\n*USD:* ${USD}\n*COP:* ${COP}`
		await message.sendMessage(msg)
	}).catch(async (err) => {
		await message.sendMessage(errorMessage(Lang.iErr))
	   })
});
