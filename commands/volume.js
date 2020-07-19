const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;


module.exports = {
	name: 'volume',
	description: 'volume 24h',
	async execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const volume = ((response.data.price.volume24h)/1000000).toFixed(4);
		message.channel.send(`The volume in the last 24 hours was ${volume} million $`);
		});
	},
};
