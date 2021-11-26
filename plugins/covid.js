/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");
const con = require('../config');

const Ierr = "!No encuentro tu busqueda¡"

if (con.WORKTYPE == 'public') {
    
    DrkBox.addCommand({pattern: "infocovid", fromMe: false}, (async (message,match) => {     
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COVID19 COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\nDatos actualizados de coronavirus.\n┠⊷️ ➡️ /covid\n  Datos de Covid19 en el mundo\n\n┠⊷️ ➡️ /covid arg\n  🇦🇷 Datos de Covid19 en Argentina\n\n┠⊷️ ➡️ /covid bo\n  🇧🇴 Datos de Covid19 en Bolivia\n\n┠⊷️ ➡️ /covid usa\n  🇺🇸 Datos de Covid19 en Estados Unidos\n\n┠⊷️ ➡️ /covid br\n  🇧🇷 Datos de Covid19 en Brasil\n\n┠⊷️ ➡️ /covid cl\n  🇨🇱 Datos de Covid19 en Chile\n\n┠⊷️ ➡️ /covid co\n  🇨🇴 Datos de Covid19 en Colombia\n\n┠⊷️ ➡️ /covid cr\n  🇨🇷 Datos de Covid19 en Costa Rica\n\n┠⊷️ ➡️ /covid cu\n  🇨🇺 Datos de Covid19 en Cuba\n\n┠⊷️ ➡️ /covid ec\n  🇪🇨 Datos de Covid19 en Ecuador\n\n┠⊷️ ➡️ /covid sv\n  🇸🇻 Datos de Covid19 en El Salvador\n\n┠⊷️ ➡️ /covid gt\n  🇬🇹 Datos de Covid19 en Guatemala\n\n┠⊷️ ➡️ /covid hn\n  🇭🇳 Datos de Covid19 en Honduras\n\n┠⊷️ ➡️ /covid mx\n  🇲🇽 Datos de Covid19 en México\n\n┠⊷️ ➡️ /covid ni\n  🇳🇮 Datos de Covid19 en Nicaragua\n\n┠⊷️ ➡️ /covid pa\n  🇵🇦 Datos de Covid19 en Panamá\n\n┠⊷️ ➡️ /covid py\n  🇵🇾 Datos de Covid19 en Paraguay\n\n┠⊷️ ➡️ /covid pe\n  🇵🇪 Datos de Covid19 en Perú\n\n┠⊷️ ➡️ /covid do\n  🇩🇴 Datos de Covid19 en República Dominicana\n\n┠⊷️ ➡️ /covid uy\n  🇺🇾 Datos de Covid19 en Uruguay\n\n┠⊷️ ➡️ /covid ve\n  🇻🇪 Datos de Covid19 en Venezuela\n\n┠⊷️ ➡️ /covid es\n  🇪🇸 Datos de Covid19 en España\n\n*𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉');
    }));
    
    DrkBox.addCommand({pattern: "covid ?(.*)", fromMe: false}, (async (message, match) => {
    if (match[1] === "") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *Resultados mundiales:*\n🌐 *Casos en total:* ${resp.cases}\n☠️ *Muertes en total:* ${resp.deaths}\n⚕️ *Recuperados en total:* ${resp.recovered}`);

            });

        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }

    }
        else if (match[1] === "co" || match[1] === "Co" || match[1] === "CO" || match[1].includes('colombia') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Colombia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇴 *Datos de Colombia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }
    }
        else if (match[1] === "es" || match[1] === "Es" || match[1] === "ES" || match[1].includes('españa') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Spain").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇸 *Datos de España:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }        
    }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1].includes('america') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }
    }
        else if (match[1] === "arg" || match[1] === "Arg" || match[1] === "ARG" || match[1].includes('argentina') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Argentina").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇦🇷 *Datos de Argentina:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "br" || match[1] === "Br" || match[1] === "BR" || match[1].includes('brasil') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Brazil").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇷 *Dados do brasil:*\n😷 *Casos no total:* ${resp.cases}\n🏥 *Casos Diários:* ${resp.todayCases}\n⚰️ *Total de mortes:* ${resp.deaths}\n☠️ *Mortes diárias:* ${resp.todayDeaths}\n💊 *Totalmente recuperado:* ${resp.recovered}\n😷 *Casos ativos:* ${resp.active}\n🆘 *Casos Críticos:* ${resp.critical}\n🧪 *Testes totais:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cl" || match[1] === "Cl" || match[1] === "CL" || match[1].includes('chile') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Chile").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇱 *Datos de Chile:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "bo" || match[1] === "BO" || match[1] === "Bo" || match[1].includes('bolivia') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Bolivia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇴 *Datos de Bolivia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cr" || match[1] === "Cr" || match[1] === "CR" || match[1].includes('costa rica') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Costa%20Rica").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇷 *Datos de Costa Rica:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ec" || match[1] === "Ec" || match[1] === "EC" || match[1].includes('ecuador') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Ecuador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇨 *Datos de Ecuador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "sv" || match[1] === "Sv" || match[1] === "SV" || match[1].includes('salvador') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/El%20Salvador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇸🇻 *Datos de El Salvador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "gt" || match[1] === "Gt" || match[1] === "GT" || match[1].includes('guatemala') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Guatemala").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇬🇹 *Datos de Guatemala:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "hn" || match[1] === "Hn" || match[1] === "HN" || match[1].includes('honduras') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Honduras").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇭🇳 *Datos de Honduras:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "mx" || match[1] === "Mx" || match[1] === "MX" || match[1].includes('mexico') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Mexico").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇲🇽 *Datos de México:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ni" || match[1] === "Ni" || match[1] === "NI" || match[1].includes('nicaragua') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Nicaragua").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇳🇮 *Datos de Nicaragua:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "pa" || match[1] === "Pa" || match[1] === "PA" || match[1].includes('panama') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Panama").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇦 *Datos de Panamá:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cu" || match[1] === "Cu" || match[1] === "CU" || match[1].includes('cuba') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Cuba").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇺 *Datos de Cuba:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "py" || match[1] === "Py" || match[1] === "PY" || match[1].includes('paraguay') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Paraguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇾 *Datos de Paraguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "pe" || match[1] === "Pe" || match[1] === "PE" || match[1].includes('peru') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Peru").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇪 *Datos de Perú:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "do" || match[1] === "Do" || match[1] === "DO" || match[1].includes('republica dominicana') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Dominican%20Republic").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇩🇴 *Datos de República Dominicana:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "uy" || match[1] === "Uy" || match[1] === "UY" || match[1].includes('uruguay') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Uruguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇾 *Datos de Uruguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ve" || match[1] === "VE" || match[1] === "Ve" || match[1].includes('venezuela') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Venezuela").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇻🇪 *Datos de Venezuela:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }  
}));
}

else if (con.WORKTYPE == 'private') {
    
    DrkBox.addCommand({pattern: "infocovid", fromMe: true}, (async (message,match) => {     
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COVID19 COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\nDatos actualizados de coronavirus.\n┠⊷️ ➡️ /covid\n  Datos de Covid19 en el mundo\n\n┠⊷️ ➡️ /covid arg\n  🇦🇷 Datos de Covid19 en Argentina\n\n┠⊷️ ➡️ /covid bo\n  🇧🇴 Datos de Covid19 en Bolivia\n\n┠⊷️ ➡️ /covid usa\n  🇺🇸 Datos de Covid19 en Estados Unidos\n\n┠⊷️ ➡️ /covid br\n  🇧🇷 Datos de Covid19 en Brasil\n\n┠⊷️ ➡️ /covid cl\n  🇨🇱 Datos de Covid19 en Chile\n\n┠⊷️ ➡️ /covid co\n  🇨🇴 Datos de Covid19 en Colombia\n\n┠⊷️ ➡️ /covid cr\n  🇨🇷 Datos de Covid19 en Costa Rica\n\n┠⊷️ ➡️ /covid cu\n  🇨🇺 Datos de Covid19 en Cuba\n\n┠⊷️ ➡️ /covid ec\n  🇪🇨 Datos de Covid19 en Ecuador\n\n┠⊷️ ➡️ /covid sv\n  🇸🇻 Datos de Covid19 en El Salvador\n\n┠⊷️ ➡️ /covid gt\n  🇬🇹 Datos de Covid19 en Guatemala\n\n┠⊷️ ➡️ /covid hn\n  🇭🇳 Datos de Covid19 en Honduras\n\n┠⊷️ ➡️ /covid mx\n  🇲🇽 Datos de Covid19 en México\n\n┠⊷️ ➡️ /covid ni\n  🇳🇮 Datos de Covid19 en Nicaragua\n\n┠⊷️ ➡️ /covid pa\n  🇵🇦 Datos de Covid19 en Panamá\n\n┠⊷️ ➡️ /covid py\n  🇵🇾 Datos de Covid19 en Paraguay\n\n┠⊷️ ➡️ /covid pe\n  🇵🇪 Datos de Covid19 en Perú\n\n┠⊷️ ➡️ /covid do\n  🇩🇴 Datos de Covid19 en República Dominicana\n\n┠⊷️ ➡️ /covid uy\n  🇺🇾 Datos de Covid19 en Uruguay\n\n┠⊷️ ➡️ /covid ve\n  🇻🇪 Datos de Covid19 en Venezuela\n\n┠⊷️ ➡️ /covid es\n  🇪🇸 Datos de Covid19 en España\n\n*𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉');
    }));
    
    DrkBox.addCommand({pattern: "covid ?(.*)", fromMe: true}, (async (message, match) => {
    if (match[1] === "") {
        try{
            //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
            const respo = await got("https://covid-api.mmediagroup.fr/v1/cases?country=Global").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *Resultados mundiales:*\n🌐 *Casos en total:* ${resp.All.confirmed}\n⚕️ *Recuperados en total:* ${resp.All.recovered}\n☠️ *Muertes en total:* ${resp.All.deaths}`);

            });

        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }

    }
// Colombia
    else if (match[1] === "co" || match[1] === "Co" || match[1] === "CO" || match[1].includes('colombia') || match[1].includes('Colombia') ) {
        try{
            const respo = await got("https://covid-api.mmediagroup.fr/v1/cases?country=Colombia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇴 *Datos de Colombia:*\n
                                    *Poblacion:* ${resp.All.population}\n
                                    😷 *Casos en Total:* ${resp.All.confirmed}\n
                                    💊 *Recuperados en total:* ${resp.All.recovered}\n
                                    ⚰️ *Muertes en total:* ${resp.All.deaths}\n
                                    \n
                                    *DEPARTAMENTOS*\n
                                    *Antioquia*\n
                                    😷 *Casos:* ${resp.Antioquia.confirmed}\n
                                    💊 *Recuperados:* ${resp.Antioquia.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Antioquia.deaths}\n
                                    *Atlantico*\n
                                    😷 *Casos:* ${resp.Atlantico.confirmed}\n
                                    💊 *Recuperados:* ${resp.Atlantico.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Atlantico.deaths}\n
                                    *Cundinamarca*\n
                                    😷 *Casos:* ${resp.Cundinamarca.confirmed}\n
                                    💊 *Recuperados:* ${resp.Cundinamarca.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Cundinamarca.deaths}\n
                                    *Narino*\n
                                    😷 *Casos:* ${resp.Narino.confirmed}\n
                                    💊 *Recuperados:* ${resp.Narino.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Narino.deaths}\n
                                    *Santander*\n
                                    😷 *Casos:* ${resp.Santander.confirmed}\n
                                    💊 *Recuperados:* ${resp.Santander.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Santander.deaths}`);
            });
        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }
    }    
// Argentina
    else if (match[1] === "ar" || match[1] === "Ar" || match[1] === "AR" || match[1].includes('argentina') || match[1].includes('Argentina') ) {
        try{
            const respo = await got("https://covid-api.mmediagroup.fr/v1/cases?country=Argentina").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇦🇷 *Datos de Argentina:*\n
                                    *Poblacion:* ${resp.All.population}\n
                                    😷 *Casos en Total:* ${resp.All.confirmed}\n
                                    💊 *Recuperados en total:* ${resp.All.recovered}\n
                                    ⚰️ *Muertes en total:* ${resp.All.deaths}`);
            });
        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }
    }
// Bolivia
    else if (match[1] === "bo" || match[1] === "Bo" || match[1] === "BO" || match[1].includes('bolivia') || match[1].includes('Bolivia') ) {
        try{
            const respo = await got("https://covid-api.mmediagroup.fr/v1/cases?country=Bolivia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇴 *Datos de Bolivia:*\n
                                    *Poblacion:* ${resp.All.population}\n
                                    😷 *Casos en Total:* ${resp.All.confirmed}\n
                                    💊 *Recuperados en total:* ${resp.All.recovered}\n
                                    ⚰️ *Muertes en total:* ${resp.All.deaths}`);
            });
        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }
    }
// Brasil
    else if (match[1] === "br" || match[1] === "Br" || match[1] === "BR" || match[1].includes('brasil') || match[1].includes('Brasil') ) {
        try{
            const respo = await got("https://covid-api.mmediagroup.fr/v1/cases?country=Brazil").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇷 *Datos de Brasil:*\n
                                    *Poblacion:* ${resp.All.population}\n
                                    😷 *Casos en Total:* ${resp.All.confirmed}\n
                                    💊 *Recuperados en total:* ${resp.All.recovered}\n
                                    ⚰️ *Muertes en total:* ${resp.All.deaths}\n
                                    \n
                                    *CAPITALES*\n
                                    *Sao Paulo*\n
                                    😷 *Casos:* ${resp.Sao_Paulo.confirmed}\n
                                    💊 *Recuperados:* ${resp.All.recovered}\n
                                    ⚰️ *Muertes:* ${resp.All.deaths}\n
                                    *Bahia*\n
                                    😷 *Casos* ${resp.Bahia.confirmed}\n
                                    💊 *Recuperados:* ${resp.Bahia.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Bahia.deaths}\n
                                    *Ceara*\n
                                    😷 *Casos:* ${resp.Caera.confirmed}\n
                                    💊 *Recuperados:* ${resp.Caera.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Caera.deaths}\n
                                    *Amazonas*\n
                                    😷 *Casos:* ${resp.Amazonas.confirmed}\n
                                    💊 *Recuperados:* ${resp.Amazonas.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Amazonas.deaths}\n
                                    *Parana*\n
                                    😷 *Casos:* ${resp.Parana.confirmed}\n
                                    💊 *Recuperados:* ${resp.Parana.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Parana.deaths}\n
                                    *Pernambuco*\n
                                    😷 *Casos:* ${resp.Pernambuco.confirmed}\n
                                    💊 *Recuperados:* ${resp.Pernambuco.recovered}\n
                                    ⚰️ *Muertes:* ${resp.Pernambuco.deaths}`);
            });
        } catch (err) {
            await message.reply(`Error:\n${Ierr}`, MessageType.text)
        }
    }
}));
}
