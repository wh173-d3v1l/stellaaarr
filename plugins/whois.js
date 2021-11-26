/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const Config = require('../config');
const Language = require('../language'); 
const Lang = Language.getString('whois'); // Language Support

// wa.me
const WAME = "```Enlace de chat de``` @{}:\nhttps://wa.me/{}"
const NEED_UWONG = "*¡Menciona a un usuario!*"
// end wa.me

var ADMİN_USER = ''
var USER_USER = ''
var CO_USER = ''
var AR_USER = ''
var BO_USER = ''
var CL_USER = ''
var EC_USER = ''
var MX_USER = ''
var PE_USER = ''
var PY_USER = ''
var UY_USER = ''
var ES_USER = ''
var USA_USER = ''
var OTHER = ''
if (Config.LANG == 'TR') ADMİN_USER = '*Admin Sayısı:*', USER_USER = '*Üye Sayısı:*', TR_USER = '*Türk Üye Sayısı:*', Hİ_USER = '*Hint Üye Sayısı:*', AZ_USER = '*Azeri Üye Sayısı:*', SRİ_USER = '*Sri Lanka Üye Sayısı:*', RU_USER = '*Rus Üye Sayısı:*', USA_USER = '*ABD Üye Sayısı:*', OTHER = '*Diğer Üye Sayısı:*'
if (Config.LANG == 'EN') ADMİN_USER = '*Admin Count:*', USER_USER = '*Member Count:*', TR_USER = '*Turkish Member Count:*', Hİ_USER = '*Indian Member Count:*', AZ_USER = '*Azerbayjan Member Count:*', SRİ_USER = '*Sri Lanka Member Count:*', RU_USER = '*Russian Member Count:*', USA_USER = '*USA Member Count:*', OTHER = '*Other Member Count:*'
if (Config.LANG == 'AZ') ADMİN_USER = '*Admin sayı:*', USER_USER = '*Üzv sayı:*', TR_USER = '*Türk Üzv Sayısı:*', Hİ_USER = '*Hindistan üzv sayı:*', AZ_USER = '*Azərbaycan Üzv Sayısı:*', SRİ_USER = '*Şri Lanka üzv sayı:*', RU_USER = '*Rusiya Üzv Sayısı:*', USA_USER = '*ABD Üzv sayı:*', OTHER = '*Digər üzv sayı:*'
if (Config.LANG == 'ES') ADMİN_USER = '*Recuento de administradores:* ', USER_USER = '*Recuento de miembros:* ', CO_USER = '*Recuento de miembros de Colombia:*', AR_USER = '*Recuento de miembros de Argentina:*', BO_USER = '*Recuento de miembros de Bolivia:*', CL_USER = '*Recuento de miembros de Chile:*', EC_USER = '*Recuento de miembros de Ecuador:*', MX_USER = '*Recuento de miembros de México:*', PE_USER = '*Recuento de miembros de Perú:*', PY_USER = '*Recuento de miembros de Paraguay:*', UY_USER = '*Recuento de miembros de Uruguay:*', ES_USER = '*Recuento de miembros de España:*', USA_USER = '*Recuento de miembros de USA:*', OTHER = '*Recuento de miembros de otros paises:* '
if (Config.LANG == 'PT') ADMİN_USER = '*Contagem de Admin:*', USER_USER = '*Contagem de membro:*', TR_USER = '*Contagem de membros turcos:*', Hİ_USER = '*Contagem de membros indianos:*', AZ_USER = '*Contagem de membros do Azerbaijão:*', SRİ_USER = '*Contagem de membros do Sri Lanka:*', RU_USER = '*Contagem de membros russos:*', USA_USER = '*Contagem de membros dos USA:*', OTHER = '*Contagem de outros membros:*'
if (Config.LANG == 'RU') ADMİN_USER = '*Количество администраторов:*', USER_USER = '*Количество участников:*', TR_USER = '*Количество членов в Турции:*', Hİ_USER = '*Количество членов в Индии:*', AZ_USER = '*Количество участников из Азербайджана:*', SRİ_USER = '*Количество членов из Шри-Ланки:*', RU_USER = '*Количество участников в России:*', USA_USER = '*Количество участников в США:*', OTHER = '*Количество других участников:*'
if (Config.LANG == 'HI') ADMİN_USER = '*व्यवस्थापक गणना:*', USER_USER = '*सदस्य गणना:*', TR_USER = '*तुर्की सदस्य संख्या:*', Hİ_USER = '*भारतीय सदस्य संख्या:*', AZ_USER = '*अज़रबैजान सदस्य संख्या:*', SRİ_USER = '*श्रीलंका सदस्य संख्या:*', RU_USER = '*रूसी सदस्य संख्या:*', USA_USER = '*यूएसए सदस्य संख्या:*', OTHER = '*अन्य सदस्य संख्या:*'
if (Config.LANG == 'ID') ADMİN_USER = '*Jumlah Admin:*', USER_USER = '*Jumlah anggota:*', TR_USER = '*Jumlah Anggota Turki:*', Hİ_USER = '*Jumlah Anggota India:*', AZ_USER = '*Jumlah Anggota Azerbaijan:*', SRİ_USER = '*Jumlah Anggota Sri Lanka:*', RU_USER = '*Jumlah Anggota Rusia:*', USA_USER = '*Jumlah Anggota USA:*', OTHER = '*Jumlah Anggota Lainnya:*'
if (Config.LANG == 'ML') ADMİN_USER = '*അഡ്‌മിൻ എണ്ണം:*', USER_USER = '*അംഗങ്ങളുടെ എണ്ണം:*', TR_USER = '*ടർക്കിഷ് അംഗങ്ങളുടെ എണ്ണം:*', Hİ_USER = '*ഇന്ത്യൻ അംഗങ്ങളുടെ എണ്ണം:*', AZ_USER = '*അസർബൈജാൻ അംഗങ്ങളുടെ എണ്ണം:*', SRİ_USER = '*ശ്രീലങ്ക അംഗങ്ങളുടെ എണ്ണം:*', RU_USER = '*റഷ്യൻ അംഗങ്ങളുടെ എണ്ണം:*', USA_USER = '*യു‌എസ്‌എ അംഗങ്ങളുടെ എണ്ണം:*', OTHER = '*മറ്റ് അംഗങ്ങളുടെ എണ്ണം:*'

if (Config.WORKTYPE == 'private') {

    DrkBox.addCommand({ pattern: 'infogroup$', fromMe: true, desc: Lang.PL_DESC }, async (message, match) => {
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = jids.length + '\n'
            var user_count = users1.length + '\n'
            var co_user = [];
            var ar_user = [];
            var bo_user = [];
            var cl_user = [];
            var ec_user = [];
            var mx_user = [];
            var pe_user = [];
            var py_user = [];
            var uy_user = [];
            var es_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('57')) { co_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('54')) { ar_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('591')) { bo_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('56')) { cl_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('593')) { ec_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('52')) { mx_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('51')) { pe_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('595')) { py_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('598')) { uy_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('34')) { es_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('1')) { usa_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
            });
            var cous = ' ' + co_user.length + '\n'
            var arus = ' ' + ar_user.length + '\n'
            var bous = ' ' + bo_user.length + '\n'
            var clus = ' ' + cl_user.length + '\n'
            var ecus = ' ' + ec_user.length + '\n'
            var mxus = ' ' + mx_user.length + '\n'
            var peus = ' ' + pe_user.length + '\n'
            var pyus = ' ' + py_user.length + '\n'
            var uyus = ' ' + uy_user.length + '\n'
            var esus = ' ' + es_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = ' ' + user_count - cous - arus - bous - clus - ecus - mxus - peus - pyus - uyus - esus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + CO_USER + cous + AR_USER + arus + BO_USER + bous + CL_USER + clus + EC_USER + ecus + MX_USER + mxus + PE_USER + peus + PY_USER + pyus + UY_USER + uyus + ES_USER + esus + USA_USER + usaus + OTHER + oth + '\n'
            const msg = `*ID del grupo:* ${json.id}\n` + Lang.SUB + `${nwjson.subject}\n` + Lang.OWN + `${json.owner}\n` + Lang.COD + `${code}\n\n` + user_count_msg + `\n\n` + Lang.DES + `\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resim.data), 
                MessageType.image, 
                {caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });
    
    DrkBox.addCommand({pattern: 'wame ?(.*)', fromMe: true, onlyGroup: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, NEED_UWONG, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    DrkBox.addCommand({ pattern: 'infogroup$', fromMe: true, desc: Lang.PL_DESC }, async (message, match) => {
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = jids.length + '\n'
            var user_count = users1.length + '\n'
            var co_user = [];
            var ar_user = [];
            var bo_user = [];
            var cl_user = [];
            var ec_user = [];
            var mx_user = [];
            var pe_user = [];
            var py_user = [];
            var uy_user = [];
            var es_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('57')) { co_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('54')) { ar_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('591')) { bo_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('56')) { cl_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('593')) { ec_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('52')) { mx_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('51')) { pe_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('595')) { py_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('598')) { uy_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('34')) { es_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('1')) { usa_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
            });
            var cous = ' ' + co_user.length + '\n'
            var arus = ' ' + ar_user.length + '\n'
            var bous = ' ' + bo_user.length + '\n'
            var clus = ' ' + cl_user.length + '\n'
            var ecus = ' ' + ec_user.length + '\n'
            var mxus = ' ' + mx_user.length + '\n'
            var peus = ' ' + pe_user.length + '\n'
            var pyus = ' ' + py_user.length + '\n'
            var uyus = ' ' + uy_user.length + '\n'
            var esus = ' ' + es_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = ' ' + user_count - cous - arus - bous - clus - ecus - mxus - peus - pyus - uyus - esus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + CO_USER + cous + AR_USER + arus + BO_USER + bous + CL_USER + clus + EC_USER + ecus + MX_USER + mxus + PE_USER + peus + PY_USER + pyus + UY_USER + uyus + ES_USER + esus + USA_USER + usaus + OTHER + oth + '\n'
            const msg = `*ID del grupo:* ${json.id}\n` + Lang.SUB + `${nwjson.subject}\n` + Lang.OWN + `${json.owner}\n` + Lang.COD + `${code}\n\n` + user_count_msg + `\n\n` + Lang.DES + `\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resim.data), 
                MessageType.image, 
                {caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });

    DrkBox.addCommand({pattern: 'wame ?(.*)', fromMe: false, onlyGroup: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, NEED_UWONG, MessageType.text);
        }
    }));
}
