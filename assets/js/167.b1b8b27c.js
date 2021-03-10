(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{601:function(e,t,o){"use strict";o.r(t);var a=o(51),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frequently-asked-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),o("p",[o("strong",[e._v("Q: Can I code my own smart contract in Go language and compile it to a library file (example .a file), and use that to compile with komodo source code?")])]),e._v(" "),o("p",[e._v("A: As long as it compiles to a linkable library, the language for the new contract (faucet.cpp equivalent) won't matter. It would just need to be compatible with the C/C++ stack calling convention. It is "),o("code",[e._v("komodod")]),e._v(" that is doing all this. So, it just seems logical to extend "),o("code",[e._v("komodod")]),e._v(". It is a native contract, directly accessing the DB and datastructures.")]),e._v(" "),o("p",[o("strong",[e._v("Q: What exactly is the purpose of these addresses that are in the source code, with privkeys? I just imported RFYE2yL3KknWdHK6uNhvWacYsCUtwzjY3u on a test chain ATEST and spent the .0001 that was in it.")])]),e._v(" "),o("p",[e._v("A: You can only spend the normal funds in those addresses, CC outputs are protected. CC addresses map the CC scriptPubKey to an address, not the pubkey. The purpose of the addresses are to have special addresses that all nodes have the privkey for and are able to sign the CC transaction to release otherwise locked funds. i.e., there are only a limited number of ways the funds in a CC output can be spent (all these are what makes up the code of the contract) and all of them are valid so anyone on the network can sign an output when its unlock condition is satisfied.")]),e._v(" "),o("p",[o("strong",[e._v("Q: what's the purpose of sending coins to these addresses that are in the source code?")])]),e._v(" "),o("p",[e._v("A: Depends on the CC contract")]),e._v(" "),o("ul",[o("li",[e._v("for the faucet contract, the purpose is to have funds for the faucet")]),e._v(" "),o("li",[e._v("for the assets contract, the purpose is to create colored coins")]),e._v(" "),o("li",[e._v("for the rewards contract, the purpose is to have funds for the rewards etc.,")])]),e._v(" "),o("p",[e._v("Contracts usually needs to have funds to operate.")]),e._v(" "),o("p",[o("strong",[e._v("Q: What is the importance of the EVAL codes like the ones in "),o("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/eval.h#L43",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/komodo:src/cc/eval.h@jl777#L43"),o("OutboundLink")],1),e._v(" ?")])]),e._v(" "),o("p",[e._v('A: EVAL codes in eval.h are the CC contract-type ID. e.g. "rewards contract" ID is 0xe5, faucet contract is 0xe4. The goal is to have building blocks of smart contracts. The smart contract "library" or "catalogue" is available to all of komodo. You pick what you need to use for your use of blockchain. If you need something different, you pick the "smart contract of closest fit" and make your changes. If you want, you PR it upstream back to komodo and it is included in the komodo "catalogue of smart contracts".')]),e._v(" "),o("p",[o("strong",[e._v("Q: Can you chain together contracts like IF statements?")])]),e._v(" "),o("p",[e._v("A: As of July 2018, the contracts currently use the absolute simplest possible CryptoConditions. With these, the developer is able to do assets, rewards, faucet and more. There is no reason we can't make a contract that knows about other contracts. If there is a description of what the contract does in terms of utxo, more than likely, it can be done.")]),e._v(" "),o("p",[o("strong",[e._v("Q: What can a Komodo Smart Contract access on the blockchain?")])]),e._v(" "),o("p",[e._v("A: WIP I dont think any other bitcoin protocol blockchain has contracts code with full access to prior blockchain data.")]),e._v(" "),o("p",[o("strong",[e._v("Q: Does each additional contract require a hard fork?")])]),e._v(" "),o("p",[e._v("A: Adding support for a new contract would require a hardfork. It also depends on what you mean, how it was deployed and if any specific CC contracts were done (i.e., some types of changes to existing contracts cause hard forks and others don't). There are plans to make an enable/disable mask for specific contracts. The best ways to deal with varied activations on the different chains are being discussed. We are also working on limited life contracts, so maybe things can be setup so they expire. That would avoid the need for hardforking to change an existing one. but if a chain wants to hardfork, it can and since it is independent, it wont affect other chains in the eco-system. Isolation of code is a time tested method of limiting damage from bugs")]),e._v(" "),o("p",[o("strong",[e._v("Q: How do CyptoConditions help in decision making contracts based on real world events?")])]),e._v(" "),o("p",[e._v("A: You could write a custom eval function that queries oracles and controls behavior based on that. The custom functions are part of the consensus rules as all nodes need to validate the outcomes. Writing consensus code is not for weekend coders, that only leads to trouble. We are making working templates and then allow people to tweak the parameters and not have to do the actual coding. even that is pretty dangerous. Remember that each custom eval function is embedded in a specific independent chain, being an independent chain it is independent of all the other chains. So it can destroy itself and no other chain would even know, except if you were doing atomic swaps with that chain, that is the only impact. Code isolation is key. Having a system that allows anybody to deploy code that affects everybody is pretty brave (or insane). All the chains in a cluster might be running the same contracts, so a bug in any one of them is a bug in all of them anyway or It is possible to run a different set of contracts on different chains in the cluster. So at scale there might be interaction issues if care is not taken to standardise some of the core contracts.")]),e._v(" "),o("p",[o("strong",[e._v("Q: If CryptoConditions is language agnostic, what stops someone from making an infinite loop? or some other code that might damage the node/network/blockchain?")])]),e._v(" "),o("p",[e._v("A: It is a native contract running at native speeds. Just like nothing prevents someone from writing an infinite loop in the coin daemon's source code, there is nothing preventing someone from writing malicious/buggy contracts. But the people running the code are responsible for either checking the code themselves if they have the capacity or have it checked by someone they trust. (i.e., just the usual OpenSource style). There will be some core contracts that are part of the KMD source code that are useful for any asset that is created. Ex: faucets, On-chain exchanges, Rewards based on locking funds for some time to name a few. For any more specific/custom contracts anyone is welcome to fork the codebase and write their own contracts that will run on their own blockchain. If a contract that is written downstream is deemed more-efficient/useful then it can be merged into the main codebase.")]),e._v(" "),o("p",[o("strong",[e._v("Q: Are there any resources to help me understand more about this?")])]),e._v(" "),o("p",[e._v("A: If you have familiarity with programming and have the patience, you can go through the comments in following files: "),o("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/cc/assets.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/komodo:src/cc/assets.cpp@dev"),o("OutboundLink")],1),e._v(" and in the directory "),o("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/cc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/komodo:src/cc/@dev"),o("OutboundLink")],1),e._v(" , start with faucet, then rewards then assets.")]),e._v(" "),o("p",[e._v("CC are a new type of vout using the bitcoin protocol utxo system. The CC contract code adds constraints on the existing vins and vouts and allows us to add rules and describe circumstances where specific utxos can be spent/claimed or remain locked. This can be thought of as an extension of the CLTV and multisig functionality already available in Bitcoin but much more comprehensive and robust allowing for very complex contracts.")]),e._v(" "),o("p",[e._v("CC allows us to create colored utxo and a specific set of new rules that govern these colored utxos.")]),e._v(" "),o("p",[o("strong",[e._v("Didn't find your answer here? Please ask your questions in the "),o("code",[e._v("#cc-general")]),e._v(" channel in")]),e._v(" "),o("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Komodo Discord"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);