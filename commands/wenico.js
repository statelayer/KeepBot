const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;


module.exports = {
	name: 'wen',
	description: 'wen ico??',
	execute(message) {
		message.channel.send(
        `There was no ICO and there will be no ICOs in the future. 
Earn KEEP by participating in the stakedrop or Playing for Keeps. :) `) 
},
};
