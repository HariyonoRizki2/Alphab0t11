const infobot = (latensii, totalchat, giid, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *B O T  S T A T I S T I C*

👨‍💻 *Owner : @${ownerNumberrr.split('@')[0]}*
👨‍👨‍👧‍👦 *Group Chat : ${giid.length}*
👥 *Personal Chat : ${totalchat.length - giid.length}*
👨‍👩‍👧‍👧 *Total Chat : ${totalchat.length}*
🍃 *Speed : ${latensii.toFixed(4)} Second (s)* 
🌾 *Runtime : ${kyun(runtime)}*


ℒ⃝👨‍💻 *C O N N E C T  W I T H  M E*

⛎ Api : api.alphabot.herokuapp.com
♈ YouTube : youtube.com/c/zeeoneofc
♉ Github : HariyonoRizki2.github.io
♊ Instagram : instagram.com/hariyonorizki_
♋ Tiktok : tiktok.com/@hariyonorizki_
♌ Telegram : t.me/hariyonorizki_
♎ Ch Telegram : t.me/kibotz
♏ WhatsApp : wa.me/628563225307
`}

exports.infobot = infobot
 
