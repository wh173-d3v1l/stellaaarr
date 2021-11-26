/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Config = require('../config');
const HeartBot = require('drkbot-npm')

var clear_desc = ''
if (Config.LANG == 'ES') clear_desc = 'Borra todos los mensajes del chat.'
if (Config.LANG == 'EN') clear_desc = 'Clears all the messages from the chat.'

DrkBox.addCommand({pattern: 'clear ?(.*)', fromMe: false, desc: clear_desc, usage: '/clear // /clear 57300xxx // /clear 57300xxx-12345@g.us'}, (async (message, match) => {
    if (message.reply_message) {
        var client_id = message.reply_message.data.participant
        var payload = await HeartBot.clear(Config.LANG, message.client.user.jid)
        await message.client.sendMessage(client_id, payload.Action, MessageType.text);
        await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        await message.client.modifyChat(client_id, ChatModification.delete);
    } else {
        if (match[1] == '') {
            var client_id = message.jid
            var payload = await HeartBot.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
        } else if (match[1] !== '') {
            let if_group = message.jid.includes('-') ? '' : '@s.whatsapp.net'
            var client_id = match[1] + if_group
            var payload = await HeartBot.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
        }
    }
}));
