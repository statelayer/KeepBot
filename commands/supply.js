const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;


module.exports = {
	name: 'supply',
	description: 'supply',
	execute(message) {

	message.channel.send(`The total supply is 1,000,000,000. The unlocked supply is 268,240,000. More info at https://messari.io/asset/keep-network/profile`);
},
};
