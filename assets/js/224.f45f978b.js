(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{532:function(t,s,a){"use strict";a.r(s);var e=a(51),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"enabling-electrum-wallet-coins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-electrum-wallet-coins"}},[t._v("#")]),t._v(" Enabling Electrum Wallet Coins")]),t._v(" "),a("p",[t._v("To enable SPV wallets, also known as Electrum Wallets, just edit the "),a("code",[t._v("./electrum")]),t._v(" script to add the command for the prefered coin. A list of all available electrum servers for various coins is available "),a("RouterLink",{attrs:{to:"/mmV1/coin-integration/electrum-servers-list.html"}},[t._v("here.")])],1),t._v(" "),a("h2",{attrs:{id:"copy-electrum-to-dexscripts-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-electrum-to-dexscripts-directory"}},[t._v("#")]),t._v(" Copy "),a("code",[t._v("./electrum")]),t._v(" to "),a("code",[t._v("../dexscripts")]),t._v(" directory:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" `"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("/KomodoPlatform/iguana/echanges"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ./electrum "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/dexscripts\n")])])]),a("h2",{attrs:{id:"open-electrum-to-add-a-coin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-electrum-to-add-a-coin"}},[t._v("#")]),t._v(" Open "),a("code",[t._v("./electrum")]),t._v(" to add a coin:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/dexscripts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" electrum\n")])])]),a("p",[t._v("Will show:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" userpass\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{"')]),t._v("userpass"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("electrum"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("coin"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("BTC"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("ipaddr"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("173.212")]),t._v(".225.176"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("port"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":50001}"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("Add any curl command from "),a("RouterLink",{attrs:{to:"/mmV1/coin-integration/electrum-servers-list.html"}},[t._v("here")]),t._v(" to the file.")],1),t._v(" "),a("li",[t._v("Hit "),a("code",[t._v("CTRL+X")]),t._v(" then "),a("code",[t._v("Y")]),t._v(" then "),a("code",[t._v("ENTER")]),t._v(" to save the file and exit")]),t._v(" "),a("li",[t._v("Execute: "),a("code",[t._v("./electrum")])]),t._v(" "),a("li",[a("strong",[t._v("Now electrum coins specified will be active and available for trading.")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);