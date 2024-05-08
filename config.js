const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254706702033";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254706702033 ";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254706702033";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_12_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFM3o2bVBTUkFqdUh1bE5qMXdiVzh0UlVVcXErTFhya1c4djVMREQzQjQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLZ2t0eFdiZVRYV3ZhZDVzLS1na2RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczZWRmM2M1LWM4ODMtNGU0My05ZTZiLTY4MDdhNzcwNThjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNTUsXG4gICAgICAyMjEsXG4gICAgICA3OSxcbiAgICAgIDE1NyxcbiAgICAgIDEzLFxuICAgICAgMTUxLFxuICAgICAgMjQ5LFxuICAgICAgMTQyLFxuICAgICAgMzMsXG4gICAgICAxMDAsXG4gICAgICAxNjEsXG4gICAgICAyMzgsXG4gICAgICAyNTAsXG4gICAgICAxMDksXG4gICAgICAxOTYsXG4gICAgICAyNTEsXG4gICAgICAyOCxcbiAgICAgIDE3LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMjAwLFxuICAgICAgOTcsXG4gICAgICAyNDAsXG4gICAgICAyNDMsXG4gICAgICAyMzQsXG4gICAgICA3NixcbiAgICAgIDI1NCxcbiAgICAgIDM0LFxuICAgICAgNzUsXG4gICAgICA5MSxcbiAgICAgIDEyNSxcbiAgICAgIDEyMixcbiAgICAgIDEyNixcbiAgICAgIDUsXG4gICAgICAyMDMsXG4gICAgICAyMjEsXG4gICAgICAxNjEsXG4gICAgICAxMzUsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNlNYVFAxUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA2NzAyMDMzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NTI4OTIyMzQ1MDgxOTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKYn+KYnCAg8J2UuPCdlabwnZWk8J2VpfCdlZrwnZWfICDimZnwn5C8XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2Y2dHFRR0VPVG43TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJldFE4cHU0VzIySWoyKzY1U1JIWEhieEszTWlMa0RuU3I5TVl0N2R6U2tZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVsRmJBZkpNV0syZ2V0WkRVa0VQMG9hZDRPaHBHRUh2VktGT0habysyVklnVGh1UDFYVkwrY1FmL2hpRDhTMVhmYlR1VlFhVk9NbW05cTYxSk8yUURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInN6UExmRmFCNHg3MzlGVEoya3daMExpK0xkWXpLc3hud3NmUHc1OGdJUFBaZlE2Q21nMnVFUjFORnlwZ1QvUEN2c2ZvVFE4TWVWQkY3UHNUM2pUOWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNjcwMjAzMzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MTU1OTQzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
