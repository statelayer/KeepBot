const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const StakedropContractAddress = `0x68Eb4dE507C6802D73904A18FB228C7DC2981200`;
const StakingContractAdress = `0x6d1140a8c8e6fac242652f0a5a8171b898c67600`;
const LiquidityContractAddress = `0xbfadac08e7e94e3a5162371bc68b17731048d90b`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;
const UrlToFetchStakeDrop=`https://api.ethplorer.io/getAddressInfo/${StakedropContractAddress}?apiKey=freekey&tokens=${KeepAddress}`;
const UrlToFetchLiquidity=`https://api.ethplorer.io/getAddressInfo/${LiquidityContractAddress}?apiKey=freekey&tokens=${KeepAddress}`;
const UrlToFetchStakingContract=`https://api.ethplorer.io/getAddressInfo/0x6d1140a8c8e6fac242652f0a5a8171b898c67600?apiKey=freekey&tokens=0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;



module.exports = {
	name: 'all',
  description: 'display all info',
  

	execute(message) {
        
    
    axios.all([
            axios.get(UrlToFetch),
            axios.get(UrlToFetchStakeDrop),
            axios.get(UrlToFetchLiquidity),
            axios.get(UrlToFetchStakingContract)
          ])
          .then(responseArr => {

        const price = (responseArr[0].data.price.rate).toFixed(3);
        const volume = ((responseArr[0].data.price.volume24h)/1000000).toFixed(4);
        const nbHolders = responseArr[0].data.holdersCount;

        const staked =((responseArr[3].data.tokens[0].balance)/1000000000000000000000000).toFixed(2);
        const reserveLiquidity = ((responseArr[2].data.tokens[0].balance)/1000000000000000000000000).toFixed(2);
        const reserveStakedrop =((responseArr[1].data.tokens[0].balance)/1000000000000000000000000).toFixed(2);
        const transactionsAmount = responseArr[3].data.countTxs;

        message.channel.send(`
**KEEP network stats**
Price: ${price} $
24h volume:  ${volume} million $
Number of holders:  ${nbHolders}
Amount staked:  ${staked} million KEEP
Amount in stakedrop reserve: ${reserveStakedrop} million KEEP
Amount in liquidity reserve: ${reserveLiquidity} million KEEP
RandomBeacon transactions: ${transactionsAmount}`);


axios({
  url: 'https://api.thegraph.com/subgraphs/name/suntzu93/keepnetwork',
  method: 'post',
  data: {
    query: `
      {
  tokenStakings {
    contractAddress
    totalStaker
    totalTokenStaking
    totalTokenSlash
    members(first: 5, where: {stakingState: STAKED}, orderBy: amount, orderDirection: desc) {
      id
      amount
    }
  }
}

      `
  }
}).then((result) => {
  const nbStakers= result.data.data.tokenStakings[0].totalStaker;
  message.channel.send(`Number of stakers : ${nbStakers} 
Suggestions welcome, just ping me @StateLayer. Data feeds powered by Ethplorer and SunTzu's subgraph. `);
});


          });

          
        
          


  },
  

  
};
