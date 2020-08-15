const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;


module.exports = {
	name: 'holders',
	description: 'number of holders',
	execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const nbHolders = response.data.holdersCount;
		message.channel.send(`There are ${nbHolders} Keep holders`);
		console.log("bruh");
		});
	},
};
