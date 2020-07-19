const axios = require('axios').default;
const StakingContractAdress = `0x6d1140a8c8e6fac242652f0a5a8171b898c67600`;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getAddressInfo/${StakingContractAdress}?apiKey=freekey`;


module.exports = {
	name: 'beacontransactions',
	description: 'how many transactions since creation',
	execute(message) {
		axios.get(UrlToFetch).then(function (response) {
		const transactionsAmount = response.data.countTxs;
		message.channel.send(`${transactionsAmount} transactions interacting with the random beacon were made ever since its creation.`);
		});
	},
};
