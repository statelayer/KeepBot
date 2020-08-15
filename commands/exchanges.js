const axios = require('axios').default;
const LiquidityContractAddress = `0xbfadac08e7e94e3a5162371bc68b17731048d90b`;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlUniswap = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC&address=0xe6f19dab7d43317344282f803f8e8d240708174a&tag=latest&apikey=S99FHYV5YSBW5KKU4N4AUMR4CBNRZ9FRG5`;
const UrlBalancer =`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC&address=0x3eF9d29cC8a559716cAFF6468a306d1D86400d14&tag=latest&apikey=S99FHYV5YSBW5KKU4N4AUMR4CBNRZ9FRG5`;
const UrlLoopring= `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC&address=0x944644ea989ec64c2ab9ef341d383cef586a5777&tag=latest&apikey=S99FHYV5YSBW5KKU4N4AUMR4CBNRZ9FRG5`;
const UrlMXC=`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC&address=0x75e89d5979e4f6fba9f97c104c2f0afb3f1dcb88&tag=latest&apikey=S99FHYV5YSBW5KKU4N4AUMR4CBNRZ9FRG5`;
const UrlBilaxy=`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC&address=0xcce8d59affdd93be338fc77fa0a298c2cb65da59&tag=latest&apikey=S99FHYV5YSBW5KKU4N4AUMR4CBNRZ9FRG5`;


module.exports = {
	name: 'exchanges',
	description: 'how many keep in liquidity reserve',
	async execute(message) {
		axios.all([
            axios.get(UrlUniswap),
            axios.get(UrlBalancer),
            axios.get(UrlLoopring),
            axios.get(UrlMXC),
            axios.get(UrlBilaxy)
          ])
          .then(responseArr => {
        const Uniswap = (((responseArr[0].data.result)/1000000000000000000000).toFixed(2));
        const Balancer = (((responseArr[1].data.result)/1000000000000000000000).toFixed(2));
        const Loopring = (((responseArr[2].data.result)/1000000000000000000000).toFixed(2));
        const MXC = (((responseArr[3].data.result)/1000000000000000000000).toFixed(2));
        const Bilaxy =(((responseArr[4].data.result)/1000000000000000000000).toFixed(2));


        message.channel.send(`KEEP balances in decentralized exchanges : 
Balancer : ${Balancer}K
Uniswap V2 : ${Uniswap}K
Loopring : ${Loopring}K

KEEP balances in centralized exchanges  : 
MXC : ${MXC}K
Bilaxy : ${Bilaxy}K
Please note that these last two exchanges are little-known and centralized. Mandatory not your keys, not your coins here. ;)
`);
		});
	},
};