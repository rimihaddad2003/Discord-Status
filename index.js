
const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })



client.on('ready', () => {

	client.request('SET_ACTIVITY', {

		pid: process.pid,
		activity: {
			details: "• Vagmemes Discord Owner.", //text under activity name example: https://i.imgur.com/3cpsKjm.png
			state: "- Join Now !! 🔥🔥",
			assets: {
				large_image: "vag", //make sure its all in lower case
				large_text: "Vagmemes.com" // text when you hover over image
			},
			buttons: [{ label: "Join Server", url: "https://discord.gg/vagmemes" }]
		}
	})
})
client.login({ clientId: "871022555845251114" }).catch(console.error);
