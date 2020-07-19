const axios = require('axios').default;
const LiquidityContractAddress = `0xbfadac08e7e94e3a5162371bc68b17731048d90b`;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getAddressInfo/${LiquidityContractAddress}?apiKey=freekey&tokens=${KeepAddress}`;


module.exports = {
	name: 'liquidityreserve',
	description: 'how many keep in liquidity reserve',
	async execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const reserve = ((response.data.tokens[0].balance)/1000000000000000000000000).toFixed(2)
		message.channel.send(`${reserve} million KEEP are still in the liquidity reserve`);
		});
	},
};
