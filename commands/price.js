const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;


module.exports = {
	name: 'price',
	description: 'current price',
	execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const price = (response.data.price.rate).toFixed(3);
		message.channel.send(`The current price is ${price} $`);
		});
	},
};
