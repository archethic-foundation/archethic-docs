/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
		{
			type: 'category',
			label: 'Learn',
			items: [
				{
					id: "learn/archethic-intro",
					type: "doc",
					label: "Introduction"
				},
        "learn/uco",
				"learn/ecosystem",
				"learn/transaction-chain",
				{
					type: 'category',
					label: 'ARCH Consensus',
					link: {
						id: "learn/arch-consensus",
						type: "doc"
					},
					items: [
            "learn/arch-consensus/proof-of-work"
					]
				},
				{
          type: "category",
					label: "Sharding",
					link: {
            id: "learn/sharding",
						type: "doc"
					},
					items: [
						{
							label: "BeaconChain",
							type: "category",
							link: {
								type: "doc",
								id: "learn/sharding/beacon-chain"
							},
							items: [
								{ 
									label: "Explorer",
									type: "doc",
									id: "learn/sharding/beacon-chain/explorer"
								}
							]
						},
						"learn/sharding/replication-attestation"
					]
				},
				{
          type: "category",
					label: "P2P",
					link: {
            id: "learn/p2p",
						type: "doc"
					},
					items: [
						"learn/p2p/bootstrapping",
						"learn/p2p/self-repair"
					]
				},
				"learn/oracle-chain",
				"learn/fee",
				{
					type: "category",
					label: "Cryptography",
					link: {
             id: "learn/cryptography",
						 type: "doc"
					},
					items: [
						"learn/cryptography/hardware-root-of-trust"
					]
				}
			]
		},
		{
      type: "category",
			label: "Build",
			items: [
				{
          type: "category",
					label: "Smart-Contracts",
					link: {
            type: "doc",
					 id: "build/smart-contracts"
					},
					items: [
					 { 
					   label: "Language",
						 type: "doc",
						 id: "build/smart-contracts/language"
					 },
					 { 
						 label: "Examples",
             type: "doc",   
						 id: "build/smart-contracts/examples"
					 }
				  ] 
				},
				{
          type: "category",
					label: "SDKs",
					items: [
            "build/sdk/js",
						"build/sdk/dart"
					]
				},
				"build/testnet",
				{
					type: "category",
					label: "Core development",
					link: {
						id: "build/core",
						type: "doc"
					},
					items: [
						{
							type: "category",
							label: "P2P",
							items: [
								{
									id: "build/core/p2p/messaging",
									type: "doc"
								},
								{
									id: "build/core/p2p/node",
									type: "doc"
								}	
							]
						},
						{
							type: "category",
							label: "Cryptography",
							link: {
								id: "build/core/cryptography",
								type: "doc"
							},
							items: [
								{ 
							    id: "build/core/cryptography/tpm",
									type: "doc"
								},
								{
									id: "build/core/cryptography/yubikey",
									type: "doc"
								}
							]
						},
						{
							type: "category",
							label: "OracleChain",
							link: {
								id: "build/core/oracle-chain",
								type: "doc"
							},
							items: [
								{
									id: "build/core/oracle-chain/service",
									type: "doc",
									label: "Service"
								},
								{
									id: "build/core/oracle-chain/scheduler",
									type: "doc",
									label: "Scheduler"
								},
								{
									id: "build/core/oracle-chain/memory-table",
									type: "doc",
									label: "In-Memory table"
								}
							]
						}
					]
				},
				{
					type: "category",
					label: "Client documentation",
					items: [
						"build/clients/wallet-spec",
						{
							type: "category",
							link: {
								id: "build/clients/ledger-wallet",
								type: "doc"
							},
							label: "Ledger application",
							items: [
								{
									label: "API",
									id: "build/clients/ledger-wallet/api",
									type: "doc"
								}
							]
						}
					]
				}
			]
		},
		"contributing"
	]
};

module.exports = sidebars;
