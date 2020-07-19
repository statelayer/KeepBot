const axios = require('axios').default;
const StakedropContractAddress = `0x68Eb4dE507C6802D73904A18FB228C7DC2981200`;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getAddressInfo/${StakedropContractAddress}?apiKey=freekey&tokens=${KeepAddress}`;


module.exports = {
	name: 'stakedropreserve',
	description: 'how many keep in stakedrop reserve',
	async execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const reserve =((response.data.tokens[0].balance)/1000000000000000000000000).toFixed(2)

		message.channel.send(`${reserve} million KEEP are still in the stakedrop reserve`);
		});
	},
};
