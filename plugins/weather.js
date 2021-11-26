/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');
const What = "Pais"
const Sky = "Clima"

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, fromMe: wk}, async (message, match) => {
	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=541975c7d267fdc10a1f9eed03b5fa1a&language=es`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
		    '*🌎 ' + Lang.What +':* ```' + json.sys.country + '```\n' + 
		    '*📍 ' + Lang.LOCATION +':* ```' + json.name + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + json.main.temp_max + '°C```\n' + 
		    '*🌥️ ' + Lang.HUMI +':* ```' + json.main.humidity + '°C```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		    '*🌫️ ' + Lang.Sky +':* ```' + json.weather[0].description + '```\n\n' +
		    '*☁ ' + Lang.CLOUD +':* ```' + json.clouds.all + '°C```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
