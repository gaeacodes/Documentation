(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{494:function(t,e,a){"use strict";a.r(e);var o=a(51),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"komodo-developer-path-understanding-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komodo-developer-path-understanding-tokens"}},[t._v("#")]),t._v(" Komodo Developer Path | Understanding Tokens")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Each Smart Chain in the Komodo ecosystem can act as a fully tokenizable platform. This provides many opportunities to the developer for creating on-chain assets that represent varying types of value for their users.")]),t._v(" "),a("p",[t._v("For example, tokens can be used to represent real world assets, and users can then trade these tokens using Komodo's "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html"}},[t._v("Token DEX")]),t._v(" and "),a("RouterLink",{attrs:{to:"/basic-docs/atomicdex/atomicdex-tutorials/introduction-to-atomicdex.html"}},[t._v("AtomicDEX")]),t._v(" features. The developer could also create tokens that provide incentives to their audience. Or, tokens can represent collectible assets. These are but a few examples of the usefulness of on-chain tokenization.")],1),t._v(" "),a("h2",{attrs:{id:"conceptualizing-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conceptualizing-tokens"}},[t._v("#")]),t._v(" Conceptualizing Tokens")]),t._v(" "),a("h4",{attrs:{id:"a-token-is-a-satoshi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-token-is-a-satoshi"}},[t._v("#")]),t._v(" A Token is a Satoshi")]),t._v(" "),a("p",[t._v("All Smart Chain coins abide by the Bitcoin-protocol standard wherein 1 coin is divisible for up to eight decimal places: "),a("code",[t._v("1.00000000")]),t._v(". The smallest unit of a Smart Coin therefore is "),a("code",[t._v("0.00000001")]),t._v(' coins. By convention it is called a "satoshi," in honor of the inventor of the Bitcoin protocol.')]),t._v(" "),a("p",[t._v("On a Smart Chain, each individual token is derived from one individual satoshi. Therefore, each coin can be transformed into 100,000,000 tokens.")]),t._v(" "),a("p",[t._v("At the time of the creation of these tokens, the creator can define their properties, grant meta data to them, and establish the nature of their scarcity.")]),t._v(" "),a("p",[t._v("All of this functionality is established and secured through the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html"}},[t._v("Tokens Antara Module")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"fungible-token-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fungible-token-creation"}},[t._v("#")]),t._v(" Fungible Token Creation")]),t._v(" "),a("p",[t._v("With "),a("code",[t._v("0.1")]),t._v(" of our "),a("code",[t._v("TUT1")]),t._v(" tutorial coins, we can create "),a("code",[t._v("10,000,000")]),t._v(" tokens in one creation transaction using the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokencreate"}},[a("b",[t._v("tokencreate")])]),t._v(" RPC.")],1),t._v(" "),a("p",[t._v("In the process of creation we can choose a name for these tokens.")]),t._v(" "),a("p",[t._v("All of the tokens created from this single transaction are fungible one with another, and maintain scarcity across the Smart Chain.")]),t._v(" "),a("p",[a("em",[t._v("(It is even possible with Antara technology to maintain token scarcity across multiple chains, but this is an advanced topic that we do not cover here.)")])]),t._v(" "),a("h4",{attrs:{id:"non-fungible-token-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-fungible-token-creation"}},[t._v("#")]),t._v(" Non-Fungible Token Creation")]),t._v(" "),a("p",[t._v("Alternatively, rather than creating a large collective of many fungible tokens, you could instead create non-fungible tokens. To achieve this, use the "),a("b",[t._v("tokencreate")]),t._v(" RPC to create one token at a time. Each token requires "),a("code",[t._v("1")]),t._v(" satoshi, plus transaction fees.")]),t._v(" "),a("h4",{attrs:{id:"attaching-data-to-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attaching-data-to-tokens"}},[t._v("#")]),t._v(" Attaching Data to Tokens")]),t._v(" "),a("p",[t._v("We can attach meta data to the tokens at their creation.")]),t._v(" "),a("p",[t._v("The maximum size of data that can fit in a single Komodo transaction is "),a("code",[t._v("10000")]),t._v(" bytes. This is enough to include all sorts of data, and even simple images.")]),t._v(" "),a("p",[t._v("The developer is naturally free to use their imagination in the design of this data. For example, you can describe their purpose and add a json data structure that informs other software of the properties of this token.")]),t._v(" "),a("p",[t._v("Advanced developers can even add functionality to allow the tokens to gain new data over time as they are passed through transactions.")]),t._v(" "),a("h2",{attrs:{id:"create-a-token-set-on-tut1-smart-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-token-set-on-tut1-smart-chain"}},[t._v("#")]),t._v(" Create a Token Set on TUT1 Smart Chain")]),t._v(" "),a("p",[t._v("In our guided tutorial, we now create "),a("code",[t._v("50,000")]),t._v(" tokens that we give the name "),a("code",[t._v("GOLD")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("Enter the "),a("code",[t._v("SEED-MENU")])]),t._v(" "),a("li",[t._v("Select the "),a("code",[t._v("TOKENS")]),t._v(" submenu")]),t._v(" "),a("li",[t._v("Select "),a("code",[t._v("CREATE")])]),t._v(" "),a("li",[t._v("Enter the name "),a("code",[t._v("GOLD")])]),t._v(" "),a("li",[t._v("Use "),a("code",[t._v("0.0005")]),t._v(" tokens")]),t._v(" "),a("li",[t._v("For the short description "),a("code",[t._v("Some GOLD tokens")])])]),t._v(" "),a("p",[t._v("This creates 50,000 GOLD tokens by sending 0.0005 TUT1 coins to the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#introduction"}},[t._v("Tokens Antara Module.")])],1),t._v(" "),a("p",[t._v("Wait a minute or so for the transaction to be mined and then use the "),a("code",[t._v("GETINFO")]),t._v(" function to check the balance of our wallet. There are now "),a("code",[t._v("0.0993")]),t._v(" coins remaining from the "),a("code",[t._v("0.1")]),t._v(" coins we had previously.")]),t._v(" "),a("p",[t._v("We used "),a("code",[t._v("0.0005")]),t._v(" coins to create the tokens.")]),t._v(" "),a("p",[t._v("We had a fee paid to the miners of "),a("code",[t._v("0.0001")]),t._v(" coins.")]),t._v(" "),a("p",[t._v("We also had another fee of "),a("code",[t._v("0.0001")]),t._v(' coins that were sent to a special address in the Tokens Antara Module, called the "global address." The transaction for this fee had a small amount of data that permanently tells the entire '),a("code",[t._v("TUT1")]),t._v(" Smart Chain community that we created these tokens. Therefore, if other users or developers want to learn about our "),a("code",[t._v("GOLD")]),t._v(" tokens, they have a starting point in this global address.")]),t._v(" "),a("h2",{attrs:{id:"seed-or-mining-node-rpc-tokenlist-tokeninfo-to-find-details-of-the-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seed-or-mining-node-rpc-tokenlist-tokeninfo-to-find-details-of-the-tokens"}},[t._v("#")]),t._v(" Seed or Mining Node RPC: tokenlist & tokeninfo to find details of the tokens")]),t._v(" "),a("p",[t._v("To see our tokens afterwards, we can use the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokenlist"}},[a("b",[t._v("tokenlist")])]),t._v(" and "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokeninfo"}},[a("b",[t._v("tokeninfo")])]),t._v(" RPC's.")],1),t._v(" "),a("p",[t._v("In our guided tutorial, we have automated functions available to make this simpler.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SEED-MENU")]),t._v(" > "),a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("LIST")])]),t._v(" "),a("li",[a("code",[t._v("SEED-MENU")]),t._v(" > "),a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("INFO")]),t._v(" > "),a("code",[t._v("GOLD")])])]),t._v(" "),a("p",[a("code",[t._v("LIST")]),t._v(" calls the "),a("b",[t._v("tokenlist")]),t._v(' RPC. This returns an array of token ids. A "token id" is the id of the transaction that created the token. We use this token id nearly every time hereafter when we transact with these tokens.')]),t._v(" "),a("p",[a("code",[t._v("INFO")]),t._v(" calls the "),a("b",[t._v("tokeninfo")]),t._v(" RPC. This RPC requires the token id of the token we desire to inspect. In our case, we chose the "),a("code",[t._v("GOLD")]),t._v(" token.")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-1.png"}})]),t._v(" "),a("h2",{attrs:{id:"create-silver-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-silver-tokens"}},[t._v("#")]),t._v(" Create SILVER Tokens")]),t._v(" "),a("p",[t._v("Repeat the process to create "),a("code",[t._v("SILVER")]),t._v(" tokens.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SEED-NODE")]),t._v(" > "),a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("CREATE")])]),t._v(" "),a("li",[t._v("Name: "),a("code",[t._v("SILVER")])]),t._v(" "),a("li",[t._v("Amount: "),a("code",[t._v("0.002")])]),t._v(" "),a("li",[t._v("Description: "),a("code",[t._v("Some SILVER tokens")])])]),t._v(" "),a("p",[t._v("Wait for confirmation and then verify that our "),a("code",[t._v("0.0993")]),t._v(" TUT1 balance is reduced to "),a("code",[t._v("0.0971")]),t._v(".")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-2.png"}})]),t._v(" "),a("h2",{attrs:{id:"create-rock-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-rock-tokens"}},[t._v("#")]),t._v(" Create ROCK Tokens")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("CREATE")])]),t._v(" "),a("li",[t._v("Name: "),a("code",[t._v("ROCK")])]),t._v(" "),a("li",[t._v("Amount: "),a("code",[t._v("0.04")])]),t._v(" "),a("li",[t._v("Description: "),a("code",[t._v("Some ROCK Tokens")])])]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("LIST")]),t._v(" function to find the token id for "),a("code",[t._v("ROCK")]),t._v(", and then use the "),a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("ROCK")]),t._v(" function to retrieve the token's full information. We see the token id included as a part of the returned data.")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-3.png"}})]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-4.png"}})]),t._v(" "),a("h2",{attrs:{id:"create-a-non-fungible-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-non-fungible-token"}},[t._v("#")]),t._v(" Create a Non-Fungible Token")]),t._v(" "),a("p",[t._v("Switch to the mining node.")]),t._v(" "),a("p",[t._v("Recall that to create a non-fungible token, we simply use only one satoshi of the coin.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MINING-MENU")]),t._v(" > "),a("code",[t._v("TOKENS")])]),t._v(" "),a("li",[a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("CREATE")])]),t._v(" "),a("li",[t._v("Name: "),a("code",[t._v("NFT1")])]),t._v(" "),a("li",[t._v("Amount: "),a("code",[t._v("0.00000001")])]),t._v(" "),a("li",[t._v("Description: "),a("code",[t._v("First unique token")])])]),t._v(" "),a("h2",{attrs:{id:"compare-the-tokens-on-one-node-against-the-other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compare-the-tokens-on-one-node-against-the-other"}},[t._v("#")]),t._v(" Compare the Tokens on One Node Against the Other")]),t._v(" "),a("p",[t._v("Check the balance of the "),a("code",[t._v("NFT1")]),t._v(" token on both the "),a("code",[t._v("SEED")]),t._v(" node and the "),a("code",[t._v("MINING")]),t._v(" node.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TOKENS")]),t._v(" > "),a("code",[t._v("BALANCE")]),t._v(" > "),a("code",[t._v("NFT1")])])]),t._v(" "),a("p",[t._v("Note that the balance is different for the two.")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-6.png"}})]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-7.png"}})]),t._v(" "),a("h2",{attrs:{id:"tutorial-series-conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-series-conclusion"}},[t._v("#")]),t._v(" Tutorial Series Conclusion")]),t._v(" "),a("p",[t._v("Thank you for following along on this introductory tutorial.")]),t._v(" "),a("p",[t._v("We have covered many topics using our guided-tutorial software.")]),t._v(" "),a("p",[t._v("To learn more about any particular aspect, visit the links below.")]),t._v(" "),a("p",[t._v("If you are ready to proceed with the next tutorials in our educational series, return to the "),a("RouterLink",{attrs:{to:"/basic-docs/start-here/learning-launchpad/learning-path-outline.html#introduction"}},[a("b",[t._v("Learning Launchpad")])]),t._v(" section.")],1),t._v(" "),a("ul",[a("li",[t._v("Create a new Smart Chain\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html#creating-a-new-smart-chain"}},[a("b",[t._v("Create a Default Smart Chain")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-setup/antara-customizations.html#ac-name"}},[a("b",[t._v("ac_name")])])],1)])]),t._v(" "),a("li",[t._v("Create a coin supply\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-setup/antara-customizations.html#ac-supply"}},[a("b",[t._v("ac_supply")])])],1)])]),t._v(" "),a("li",[t._v("Create and use a faucet\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/faucet.html#introduction"}},[a("b",[t._v("Faucet Antara Module")])])],1)])]),t._v(" "),a("li",[t._v("Mine transactions\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[a("b",[t._v("setgenerate")])])],1)])]),t._v(" "),a("li",[t._v("Create fungible and non-fungible tokens\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#introduction"}},[a("b",[t._v("Tokens Antara Module ")])])],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);