//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "242067274660";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://david-session-sasaki.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0docmU4WUhIYXFnaGZyMlhkei9wVDliQm83SFI4c0RKT2NYbEsrejQwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFlMQzlybW94ZUNzVHpqU2NjdDdNeGQwUVNSdm5hMmQ1ekdKTmpSQ2V5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSHdMTklrRHZ1S2JLTjlHNDJoUFRjNzU0SEFuaFJDK2lmblAwVFFHMW1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUckhLdWJ2b1JjaDBXOFFTS1ZWWWh3RndxWDFwbXZtM2JBbHpsTlRhYkJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOQ3ZlNDc2YnhUNGJ6OHRscW5jTS85bDFPenA5cm04UWRZRitMbnl1VkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxWQ1dDT25ydXpzZTFrTGx4UDRMbFgvR2RWOUZlUzdOYlBSWi90eStCRU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JGZHdiWUlTY2FXWHlwMkVuKys3ZGxFZWpKdW4zSm1SaklOTWpqbWYwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidy9CUW9BMitWZ00zZWEvS21XQ0h1WGRMM2liVmlLaHNiVzRXenlzdHYyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5uQUs0OTNVZFVWTU16UENYRmFVQk5aY2xDL0hSWUltdXFaeU9pblZrbWhYR0NQNWRzQ1pNRVhBU1JQeklnd3FMaUhhOG4rdHcrcEVtcFdkUlh3UEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiI5Ly9ocGhRUDhpNW9DV29nalBFN0VhM0dtY3F5bUdCQ3pPQ0tBUHI5czc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzg2NTQwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTAyOEM0RDZGNzkxNUJCODk5QzlBODVGOUFCNjNEMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2MzU1NTYwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM4NjU0MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTgwQjkyNjM5RTRFRjU5QjM0RDlFRjdFQzA0NkNCRjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjM1NTU2MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOVpaNWJKMEFTdVNzS3piaGpyNHhsdyIsInBob25lSWQiOiJlZjUzZTZhNi0zZGI2LTQyMGUtYjc1My1hYjZkOGI0NmVmYjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xhcGpOcVhQcWRzMUhqQzBWMFRCZTBBSGhZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlRM3RwWEE1V0dFb3dDL0hoMm51cGVuYk90ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaTVBaNllKUiIsIm1lIjp7ImlkIjoiMjYzNzEzODY1NDA4OjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImJhc2tldCBiYWxsIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU2tqTVlDRU5pSzNjQUdHQmdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoVWJtMEN0ZDZ4WFc1ZDRsbysraVhScDBlUkhTSFdQM2dLRlJScHpWR1ZRPSIsImFjY291bnRTaWduYXR1cmUiOiJkSFBQTTFLemJPaHF1VStZM1FtbVV0TS9Wd2ZpcDFZRTJoME9qRkdlYWxPSlMvb1VkSzZZb0t3a3RLazg2cWQrZ2ZiVHdRL0lVOFEvUzgyN3NkcmhEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSVR6dkxkVXJxaXM4Vm03VHBKbXRVd011d25ncXhnMWpRQmlYUnEwTWlZdFRNZDY2MXBuOXJ1STlGemtxZmZTSmluQzhJU211Mno0d3hLWjBITnJKREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTM4NjU0MDg6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVZHNXRBclhlc1YxdVhlSmFQdm9sMGFkSGtSMGgxajk0Q2hVVWFjMVJsVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NjM1NTU1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFETUwifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍂",
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
