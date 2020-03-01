const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "case_id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"name": "Event",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_case_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "recordCase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
  
  // Contract: https://rinkeby.etherscan.io/address/0x147be9bf7b398202a7ef4a43610a639a7e5a53b9
  // Deployment tx: https://rinkeby.etherscan.io/tx/0xd3da3f3a25f48767bd7cb88e6483e0188added1af215c21eb09fa6fbe8fedc16
  
  // Contract code:
  // pragma solidity ^0.6.0;
  //
  // contract C {
  //     event Event(string _s);
  //    
  //     constructor() public {
  //         emit Event("asd");
  //     }
  // }
  
  const Web3 = require("web3");
  const contract = require("@truffle/contract");
  const provider = new Web3.providers.HttpProvider(
    "https://kovan.infura.io/v3/2c499aed715a47f5bb77ef88afc5f27d"
  );
  
  const C = contract({ abi });
  C.setProvider(provider);
  
  async function main() {
    const contract = await C.at("0xc74441f508A83767D15BFE98Ae568D71c3dF04DE");
    const events = await contract.getPastEvents("allEvents", {
      fromBlock: 0,
      toBlock: "latest"
    });
  
    console.log(events);
  }
  
  main().catch(console.error);