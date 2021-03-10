(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{653:function(e,t,s){"use strict";s.r(t);var a=s(51),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"monitor-your-komodo-notary-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitor-your-komodo-notary-node"}},[e._v("#")]),e._v(" Monitor your Komodo Notary Node")]),e._v(" "),s("p",[e._v("When your Komodo Notary Node has been setup, it would be nice to monitor it. Normally I take Zabbix for this, but there is a nicer way then Zabbix. It is called New-Relic. New-Relic is a commercial company, but do offer a free package to monitor your server(s).")]),e._v(" "),s("p",[e._v("So let's grab those until we find a way to monitor the servers in "),s("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord."),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"signup-with-new-relic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signup-with-new-relic"}},[e._v("#")]),e._v(" Signup with New-Relic")]),e._v(" "),s("p",[e._v("Go to "),s("a",{attrs:{href:"https://newrelic.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://newrelic.com/signup"),s("OutboundLink")],1),e._v(" and signup for an account. Verify your email address and log into your account.")]),e._v(" "),s("h2",{attrs:{id:"server-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-setup"}},[e._v("#")]),e._v(" Server Setup")]),e._v(" "),s("p",[e._v("Now we are going to setup your server for it. Remember, this is based on Ubuntu 14.04, but i don't see any problems with 16.04. If so, let me know.")]),e._v(" "),s("p",[e._v("Login as user into your server. If you have setup your server the right way, you can't login with root anymore. When it asks you for your sudo pass, fill in your password")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" username@server.com\n")])])]),s("p",[e._v("Install repo")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'deb http://apt.newrelic.com/debian/ newrelic non-free'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /etc/apt/sources.list.d/newrelic.list\n")])])]),s("p",[e._v("Trust the New Relic GPG key")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -O- https://download.newrelic.com/548C16BF.gpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -\n")])])]),s("p",[e._v("Do an update")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n")])])]),s("p",[e._v("Install New Relic")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" newrelic-sysmond\n")])])]),s("p",[e._v("Now go to your New Relic account and go to Account Settings and find there your License key at the right. Right it down somewhere. Now do this")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" nrsysmond-config --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("license_key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("YOUR_LICENSE_KEY\n")])])]),s("p",[e._v("And after that we do this")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" /etc/init.d/newrelic-sysmond start\n")])])]),s("p",[e._v("Now when you go to the Servers tab in your New-Relic account you will see your server coming in. Give it 30 min to let it synchronise with your server.")]),e._v(" "),s("p",[e._v("Install the New Relic app on your phone and log into it. Now you watch your server all day long without logging in.")])])}),[],!1,null,null,null);t.default=r.exports}}]);