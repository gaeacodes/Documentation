(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{579:function(e,a,t){"use strict";t.r(a);var o=t(51),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"number-of-confirmations-displayed-based-on-dpow-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number-of-confirmations-displayed-based-on-dpow-status"}},[e._v("#")]),e._v(" Number of confirmations displayed based on dPoW status")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("A new feature has been added to the Komodo daemon ("),t("code",[e._v("komodod")]),e._v(") that changes the behaviour of the value displayed for "),t("code",[e._v('"confirmations":')]),e._v(" which is output on calling "),t("code",[e._v("gettransaction")]),e._v(", "),t("code",[e._v("getrawtransaction")]),e._v(", "),t("code",[e._v("gettxout")]),e._v(", "),t("code",[e._v("listunspent")]),e._v(" or "),t("code",[e._v("getblock")]),e._v(" through the "),t("code",[e._v("komodo-cli")])]),e._v(" "),t("p",[e._v("The new behaviour is as follows:")]),e._v(" "),t("ul",[t("li",[e._v("0 confirmations means the tx is not confirmed yet")]),e._v(" "),t("li",[e._v("1 confirmation means the tx is confirmed on the network, but not dPoW'd yet (Explorers may show different confirmation values and wouldn't match till atleast one notarization happens. "),t("code",[e._v("rawconfirmations")]),e._v(" value will match, which is only visible if you are quering via CLI.)")]),e._v(" "),t("li",[e._v("any other confirmation number means the tx is secure with dPoW")])]),e._v(" "),t("p",[e._v("This feature is helpful for exchanges mainly and for users who prefer security. This will work automatically for Native mode for KMD or any other assetchain. SPV mode doesn't have this feature implemented and will not show dPoW Conf data. Upon seeing a confirmation number more than 1, exchanges can simply credit the deposit to a user being sure that the transaction is secure and can't be double-spent.")]),e._v(" "),t("h2",{attrs:{id:"a-practical-example-of-how-number-of-confirmations-are-displayed-after-this-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-practical-example-of-how-number-of-confirmations-are-displayed-after-this-update"}},[e._v("#")]),e._v(" A practical example of how number of confirmations are displayed after this update")]),e._v(" "),t("h3",{attrs:{id:"stage-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stage-1"}},[e._v("#")]),e._v(" Stage 1")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"confirmations": 0,')])])]),e._v(" "),t("h3",{attrs:{id:"stage-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stage-2"}},[e._v("#")]),e._v(" Stage 2")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v('"confirmations": 1,')])])]),e._v(" "),t("li",[t("p",[t("code",[e._v('"rawconfirmations": 1')])])])]),e._v(" "),t("h3",{attrs:{id:"stage-3-after-5-blocks-are-added"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stage-3-after-5-blocks-are-added"}},[e._v("#")]),e._v(" Stage 3: After 5 Blocks are added")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v('"confirmations": 1,')])])]),e._v(" "),t("li",[t("p",[t("code",[e._v('"rawconfirmations": 5,')])])])]),e._v(" "),t("h3",{attrs:{id:"stage-4-after-12-blocks-are-added-and-when-a-btc-notarization-happens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stage-4-after-12-blocks-are-added-and-when-a-btc-notarization-happens"}},[e._v("#")]),e._v(" Stage 4: After 12 Blocks are added and when a BTC notarization happens")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v('"confirmations": 12,')])])]),e._v(" "),t("li",[t("p",[t("code",[e._v('"rawconfirmations": 12,')])])])]),e._v(" "),t("p",[e._v("As seen in the above example, the value corresponding to the "),t("code",[e._v('"confirmations":')]),e._v(" is greater than 1 only after the transaction/block is secured by dPoW. So exchanges can just keep track of the value of "),t("code",[e._v('"confirmations":')]),e._v(" and consider the transaction as final when the value is neither "),t("code",[e._v("0 nor 1")]),e._v("; any value greater than "),t("code",[e._v("1")]),e._v(" for the "),t("code",[e._v('"confirmations":')]),e._v(" field means the transaction is dPoW'd and secure.")]),e._v(" "),t("p",[e._v("It has been implemented in such a way that exchanges can integrate this double-spend prevention mechanism with no major code changes if they have been checking for the number of confirmations from "),t("code",[e._v("komodod")]),e._v(" previously. Essentially, confirmations have been made dPOW aware: Confirmations will never go above 1 until a transaction is notarized.")]),e._v(" "),t("p",[e._v("So "),t("code",[e._v("confirmations <= 1")]),e._v(" means not notarized, "),t("code",[e._v("confirmations > 1")]),e._v(" means notarized. Since all exchanges wait for more than "),t("code",[e._v("1 confirmation")]),e._v(", their systems will only work on notarized transactions.")])])}),[],!1,null,null,null);a.default=n.exports}}]);