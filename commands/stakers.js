const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`; 


module.exports = {
	name: 'stakers',
	description: 'get total number of stakers',
	execute(message) {
    
    
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
    message.channel.send(`There are ${nbStakers} stakers`);
  });

	},
};
