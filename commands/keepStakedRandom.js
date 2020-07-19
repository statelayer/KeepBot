const axios = require('axios').default;
const querystring = require('querystring');
const StakingContractAdress = `0x6d1140a8c8e6fac242652f0a5a8171b898c67600`;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getAddressInfo/0x6d1140a8c8e6fac242652f0a5a8171b898c67600?apiKey=freekey&tokens=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;


module.exports = {
	name: 'staked',
	description: 'how many transactions since creation',
	async execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const staked =((response.data.tokens[0].balance)/1000000000000000000000000).toFixed(2);

		message.channel.send(`${staked} million KEEP are staked in the random beacon`);
		});
	},
};
