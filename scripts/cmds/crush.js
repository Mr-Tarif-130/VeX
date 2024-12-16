module.exports = {
  config: {
    name: "crush",
    version: "7.0",
    author: "𝙭𝟏𝟑𝟎",
    countDown: 5,
    role: 0,
    shortDescription: "all video ðŸ“·",
    longDescription: "",
    category: "Video",
    guide: "{pn}"
  },
   onStart: async function ({ message }) {
   var TARIF= ["https://i.imgur.com/h2LdMXo.mp4",
"https://i.imgur.com/UBGhUg9.mp4",
"https://i.imgur.com/dcneJDj.mp4",
"https://i.imgur.com/Q1mN3kh.mp4",
"https://i.imgur.com/axpoccu.mp4",
"https://i.imgur.com/g83JXzX.mp4",
"https://i.imgur.com/kP59wkj.mp4",
"https://i.imgur.com/Zjjc4Jq.mp4",
"https://i.imgur.com/gE2i22B.mp4",
"https://i.imgur.com/n3f3bpd.mp4",
"https://i.imgur.com/eYcAl58.mp4",
 "https://i.imgur.com/LOJJReh.mp4",
"https://i.imgur.com/vWR0hS3.mp4",
"https://i.imgur.com/vWR0hS3.mp4",
"https://i.imgur.com/aRux5BV.mp4",
"https://i.imgur.com/qZ4KrvM.mp4",
"https://i.imgur.com/t10ATBv.mp4",
"https://i.imgur.com/86jOvKQ.mp4",
"https://i.imgur.com/sRyzonR.mp4",
"https://i.imgur.com/Tuq9F7B.mp4",
"https://i.imgur.com/Xc2e4z7.mp4",
"https://i.imgur.com/HHj5RHm.mp4",
"https://i.imgur.com/o0buUIW.mp4",
"https://i.imgur.com/ogXI3GY.mp4",
"https://i.imgur.com/CxdF8A9.mp4",
]

let msg = TARIF[Math.floor(Math.random()*TARIF.length)]
message.send({
  body: 'sex😻',attachment: await global.utils.getStreamFromURL(msg)
})
}
     }
