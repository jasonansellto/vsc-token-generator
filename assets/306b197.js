(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{627:function(e,t,n){"use strict";n(25),n(35),n(8),n(29),n(275);var r=n(634),o=n.n(r);t.a={methods:{isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(e){return!1}},getParam:function(param){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,n,r){e[n]=void 0!==r?r:""})),param?e[param]?e[param]:null:e},makeToast:function(title,text){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(text,{title:title,variant:e,solid:!0})},promisify:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t,r){e.apply(void 0,n.concat([function(e,n){e?r(e):t(n)}]))}))},getRate:function(a,b){if(isNaN(a)||isNaN(b))return"-";try{var e=Number(a/b);return this.numberToString(e)}catch(e){return"-"}},numberToString:function(e){return!isNaN(e)&&isFinite(e)&&e>0?e.toLocaleString("en-US",{useGrouping:!1,maximumSignificantDigits:10}):"-"},dateConvert:function(e,t){return o()(e).format(t)},gaSend:function(e,t){this.$gtag("event",e,t||{})},fbtrack:function(e,t){this.$fb.track(e,t||{})}}}},628:function(e){e.exports=JSON.parse('{"gaId":"G-JVB81REYZY","googleSite":"jY1I9xJpJgRsED3X5BkUoQVTZpvH19pMiG_Bs7TD2sQ","msSite":"2222C2A799471867FB1E317854E92631","fbPixelId":"640710157028819","facebookDomain":"k1q2e0j9epiupxtlbslr4hrcpjmsvk","bitlyAccessToken":"c8d8486e6abb506102a9d6c4bf1342d4a207959b","infuraProjectId":"9fe12823e65a4f5d8f698c471a898abc","etherscanApiKey":"BZ1CAV5UXW3GNUUTJYH89DI2N8YYEQUHZQ","polygonscanApiKey":"TBJM1F86UH4F14AZHZCA6V9ZNA9QI1V5T7","bscscanApiKey":"R8J4RGHEWZRWAKSD5FZ9YNW929TE5FMG33","snowtraceApiKey":"C412BZF8HA38IX4R2494CUBFZWXZ42BDB2","serviceReceiver":{"ethereum_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","ethereum_goerli":"0x75eee167d2e5cc675f5b07f95d6a93e7088d6c34","ethereum_sepolia":"0x75eee167d2e5cc675f5b07f95d6a93e7088d6c34","bsc_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","bsc_testnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","polygon_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","polygon_mumbai":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","avalanche_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","avalanche_fuji":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34"}}')},630:function(e,t,n){"use strict";var r=n(41),o=(n(101),n(29),n(15),n(30),n(8),n(66),n(75),n(38),n(628)),l=n(627),c=n(631),d=n(632);t.a={mixins:[l.a],data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null,provider:null},blockchains:{ethereum:"Ethereum",bsc:"Binance Smart Chain",polygon:"Polygon Network",avalanche:"Avalanche"},supportedCompiler:{ethereum:"0.8.20",bsc:"0.8.19",polygon:"0.8.19",avalanche:"0.8.19"},network:{current:null,default:"ethereum_mainnet",map:{1:"ethereum_mainnet",5:"ethereum_goerli",56:"bsc_mainnet",97:"bsc_testnet",137:"polygon_mainnet",80001:"polygon_mumbai",43114:"avalanche_mainnet",43113:"avalanche_fuji"},list:{ethereum_mainnet:{id:1,name:"Ethereum - Mainnet",network:"ethereum",tokenType:"ERC20",type:"mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://mainnet.infura.io/v3/"],web3Provider:"https://mainnet.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://etherscan.io",name:"Etherscan"},routerV2:{name:"Uniswap",address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",link:"https://app.uniswap.org/#/swap?outputCurrency=ETH",analytics:"https://app.uniswap.org/#/tokens/ethereum",addLiquidity:"https://app.uniswap.org/#/add/ETH"}},ethereum_goerli:{id:5,name:"Goerli - Testnet",network:"ethereum",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"Ether",symbol:"GoerliETH",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],web3Provider:"https://goerli.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://goerli.etherscan.io",name:"Etherscan"},routerV2:{name:"Uniswap | Goerli - Testnet",address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",link:"https://app.uniswap.org/#/swap?outputCurrency=ETH",addLiquidity:"https://app.uniswap.org/#/add/ETH"}},ethereum_sepolia:{id:11155111,name:"Sepolia - Testnet",network:"ethereum",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"Ether",symbol:"SepoliaETH",decimals:18},rpcUrls:["https://sepolia.infura.io/v3/"],web3Provider:"https://sepolia.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://sepolia.etherscan.io",name:"Etherscan"},routerV2:{name:"Uniswap | Sepolia - Testnet",address:"0x313Ba5Edb064e002f8b68dA4F07dC7c179e54197",link:"https://app.uniswap.org/#/swap?outputCurrency=ETH",addLiquidity:"https://app.uniswap.org/#/add/ETH"}},bsc_mainnet:{id:56,name:"Binance Smart Chain - Mainnet",network:"bsc",tokenType:"BEP20",type:"mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/"],web3Provider:"https://bsc-dataseed.binance.org/",explorer:{link:"https://bscscan.com",name:"BscScan"},routerV2:{name:"PancakeSwap",address:"0x10ED43C718714eb63d5aA57B78B54704E256024E",link:"https://pancakeswap.finance/swap?chain=bsc&outputCurrency=BNB",analytics:"https://pancakeswap.finance/info/tokens",addLiquidity:"https://pancakeswap.finance/add/BNB"}},bsc_testnet:{id:97,name:"Binance Smart Chain - Testnet",network:"bsc",tokenType:"BEP20",type:"testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"],web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorer:{link:"https://testnet.bscscan.com",name:"BscScan"},routerV2:{name:"PancakeSwap | Binance Smart Chain - Testnet",address:"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",link:"https://pancakeswap.finance/swap?chain=bscTestnet&outputCurrency=tBNB",addLiquidity:"https://pancakeswap.finance/add/tBNB"}},polygon_mainnet:{id:137,name:"Polygon - Mainnet",network:"polygon",tokenType:"ERC20",type:"mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],web3Provider:"https://polygon-rpc.com/",explorer:{link:"https://polygonscan.com",name:"PolygonScan"}},polygon_mumbai:{id:80001,name:"Mumbai - Testnet",network:"polygon",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com/"],web3Provider:"https://rpc-mumbai.maticvigil.com/",explorer:{link:"https://mumbai.polygonscan.com",name:"PolygonScan"}},avalanche_mainnet:{id:43114,name:"Avalanche C-Chain",network:"avalanche",tokenType:"ERC20",type:"mainnet",nativeCurrency:{name:"Avalanche",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"],web3Provider:"https://avalanche-mainnet.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://snowtrace.io",name:"SnowTrace"}},avalanche_fuji:{id:43113,name:"Fuji - Testnet",network:"avalanche",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"Avalanche",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/bc/C/rpc"],web3Provider:"https://avalanche-fuji.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://testnet.snowtrace.io",name:"SnowTrace"}}}},serviceReceiver:o.serviceReceiver,contracts:{token:null,service:null},ZERO_ADDRESS:"0x0000000000000000000000000000000000000000",INVALID_SIGNATURE:"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"}},computed:{isMainNetwork:function(){return"mainnet"===this.network.current.type}},methods:{initWeb3:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Object.prototype.hasOwnProperty.call(n.network.list,e)){r.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(n.network.list),"."));case 2:if(!t||void 0===window.ethereum){r.next=18;break}return console.log("injected ethereum"),n.web3Provider=window.ethereum,n.web3=new Web3(n.web3Provider),n.metamask.installed=n.web3Provider.isMetaMask,n.metamask.provider=n.web3Provider,r.next=10,n.promisify(n.web3.eth.getChainId);case 10:if(o=r.sent,n.metamask.netId=o,o===n.network.list[e].id){r.next=16;break}return n.network.current=n.network.list[n.network.map[o]],r.next=16,n.initWeb3(e,!1);case 16:r.next=22;break;case 18:console.log("provided ethereum"),n.network.current=n.network.list[e],n.web3Provider=new Web3.providers.HttpProvider(n.network.list[e].web3Provider),n.web3=new Web3(n.web3Provider);case 22:case"end":return r.stop()}}),r)})))()},initService:function(e){this.contracts.service=new this.web3.eth.Contract(d.abi,this.serviceReceiver[e])},initToken:function(e,t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(633)("./".concat(o.supportedCompiler[t],"/").concat(e,".json"));case 2:o.contracts.token=r.sent,o.contracts.token.stringifiedAbi=JSON.stringify(o.contracts.token.abi);case 4:case"end":return r.stop()}}),r)})))()},getTokenByAddress:function(address){return console.log("init ".concat(address," on ").concat(this.network.current.name)),new this.web3.eth.Contract(c.abi,address)}}}},631:function(e){e.exports=JSON.parse('{"abi":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},632:function(e){e.exports=JSON.parse('{"contractName":"ServiceReceiver","abi":[{"inputs":[{"internalType":"address","name":"signer_","type":"address"},{"internalType":"uint8","name":"discount_","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"serviceName","type":"string"},{"indexed":true,"internalType":"address","name":"serviceAddress","type":"address"}],"name":"Created","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"string","name":"serviceName","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"wallet","type":"address"}],"name":"pay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"string","name":"content","type":"string"}],"name":"isSignatureVerified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"serviceName","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"wallet","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"serviceName","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSigner","type":"address"}],"name":"changeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"newDiscount","type":"uint8"}],"name":"changeDiscount","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},633:function(e,t,n){var map={"./0.8.19/AmazingBEP20.json":[638,25],"./0.8.19/AmazingERC20.json":[639,26],"./0.8.19/AntiWhaleBEP20.json":[640,27],"./0.8.19/AntiWhaleERC20.json":[641,28],"./0.8.19/BurnableBEP20.json":[642,29],"./0.8.19/BurnableERC20.json":[643,30],"./0.8.19/CommonBEP20.json":[644,31],"./0.8.19/CommonERC20.json":[645,32],"./0.8.19/DeflationaryBEP20.json":[646,33],"./0.8.19/DeflationaryERC20.json":[647,34],"./0.8.19/HelloBEP20.json":[648,35],"./0.8.19/HelloERC20.json":[649,36],"./0.8.19/LiquidBEP20.json":[650,37],"./0.8.19/LiquidERC20.json":[651,38],"./0.8.19/MintableBEP20.json":[652,39],"./0.8.19/MintableERC20.json":[653,40],"./0.8.19/PausableBEP20.json":[654,41],"./0.8.19/PausableERC20.json":[655,42],"./0.8.19/PowerfulBEP20.json":[656,43],"./0.8.19/PowerfulERC20.json":[657,44],"./0.8.19/SimpleBEP20.json":[658,45],"./0.8.19/SimpleERC20.json":[659,46],"./0.8.19/StandardBEP20.json":[660,47],"./0.8.19/StandardERC20.json":[661,48],"./0.8.19/SwappableBEP20.json":[662,49],"./0.8.19/SwappableERC20.json":[663,50],"./0.8.19/TaxableBEP20.json":[664,51],"./0.8.19/TaxableERC20.json":[665,52],"./0.8.19/UnlimitedBEP20.json":[666,53],"./0.8.19/UnlimitedERC20.json":[667,54],"./0.8.20/AmazingERC20.json":[668,55],"./0.8.20/AntiWhaleERC20.json":[669,56],"./0.8.20/BurnableERC20.json":[670,57],"./0.8.20/CommonERC20.json":[671,58],"./0.8.20/DeflationaryERC20.json":[672,59],"./0.8.20/HelloERC20.json":[673,60],"./0.8.20/LiquidERC20.json":[674,61],"./0.8.20/MintableERC20.json":[675,62],"./0.8.20/PausableERC20.json":[676,63],"./0.8.20/PowerfulERC20.json":[677,64],"./0.8.20/SimpleERC20.json":[678,65],"./0.8.20/StandardERC20.json":[679,66],"./0.8.20/SwappableERC20.json":[680,67],"./0.8.20/TaxableERC20.json":[681,68],"./0.8.20/UnlimitedERC20.json":[682,69]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=633,e.exports=r},635:function(e,t,n){"use strict";n(275);var r={name:"Loader",components:{PulseLoader:n(688).PulseLoader},props:{loading:{type:Boolean,default:!1},color:{type:String,default:"#ffc107"},size:{type:Number,default:12}}},o=n(74),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.loading?t("PulseLoader",{staticClass:"my-3",attrs:{loading:e.loading,color:e.color,size:e.size}}):e._e()}),[],!1,null,null,null);t.a=component.exports},780:function(e,t,n){"use strict";n.r(t);n(29),n(38),n(60);var r=n(41),o=(n(101),n(88)),l=n(635),c=n(630),d={name:"Create",components:{Loader:l.a},mixins:[c.a],data:function(){return{loaded:!1,loading:!1,currentNetwork:null,blockchain:"",address:"",token:{address:"",name:"",symbol:"",decimals:"",logo:""}}},computed:{tokenType:function(){return this.network.current?this.network.current.tokenType:"ERC20"}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.address=this.getParam("address")||"",this.initDapp()},methods:{changeBlockchain:function(){this.currentNetwork="".concat(this.blockchain,"_mainnet")},initDapp:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.token={address:e.address,name:"",symbol:"",decimals:"",logo:""},e.network.current=e.network.list[e.currentNetwork],t.prev=2,e.blockchain=e.network.current.network,t.next=6,e.initWeb3(e.currentNetwork,!0);case 6:Object(o.c)("eth_address",{message:"Insert a valid token address.",validate:function(t){return e.web3.utils.isAddress(t)}}),""!==e.address&&e.getToken(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),e.makeToast("Some error occurred",t.t0.message,"danger");case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()},getToken:function(){var e=this;this.$refs.searchObserver.validate().then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=25;break}return t.prev=1,e.loaded=!1,e.loading=!0,r=e.getTokenByAddress(e.address),e.token.address=e.address,t.next=8,e.promisify(r.methods.name().call);case 8:return e.token.name=t.sent,t.next=11,e.promisify(r.methods.symbol().call);case 11:return e.token.symbol=t.sent,t.next=14,e.promisify(r.methods.decimals().call);case 14:e.token.decimals=t.sent.valueOf(),e.token.name&&e.token.symbol&&e.token.decimals?e.loaded=!0:(e.loaded=!1,e.makeToast("Some error occurred","It seems that it is not a valid Token or you are on the wrong network","danger"),e.loaded=!1),e.loading=!1,t.next=25;break;case 19:t.prev=19,t.t0=t.catch(1),console.log(t.t0),e.loaded=!1,e.loading=!1,e.makeToast("Some error occurred","It seems that it is not a valid Token or you are on the wrong network","danger");case 25:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.loaded=!1,e.loading=!1,e.makeToast("Some error occurred",t.message,"danger")}))},createTokenPage:function(){var e=this;this.$refs.createObserver.validate().then((function(t){if(t){var n=e.web3.utils.toHex(JSON.stringify({address:e.token.address,logo:e.token.logo}));document.location.href="/token-watcher/page/?hash=".concat(n,"&network=").concat(e.currentNetwork)}})).catch((function(t){console.log(t),e.loaded=!1,e.loading=!1,e.makeToast("Some error occurred",t.message,"danger")}))}}},m=d,y=n(74),component=Object(y.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("b-jumbotron",{staticClass:"mb-0 d-flex flex-column justify-content-center text-center text-white purple-gradient",attrs:{header:"Create your Token Page",fluid:""},scopedSlots:e._u([{key:"lead",fn:function(){return[e._v("\n      Create a dedicated page for your ERC20 or BEP20 Token.\n    ")]},proxy:!0}])}),e._v(" "),t("b-row",{staticClass:"mx-0"},[t("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"12",xl:"10","offset-xl":"1"}},[t("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-card",{staticClass:"mt-3",attrs:{header:"Create your ".concat(e.tokenType," Token Page on ").concat(e.blockchains[e.blockchain]),"header-bg-variant":"dark","header-text-variant":"white"}},[t("p",[e._v("\n                Enter your "),t("b",[e._v(e._s(e.tokenType))]),e._v(" Token details."),t("br"),e._v("\n                Create a page and share it with your customers.\n              ")]),e._v(" "),t("hr"),e._v(" "),t("ValidationObserver",{ref:"searchObserver",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.getToken.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Blockchain","label-for":"blockchain"}},[t("b-form-select",{attrs:{id:"blockchain",size:"lg"},on:{change:e.changeBlockchain},model:{value:e.blockchain,callback:function(t){e.blockchain=t},expression:"blockchain"}},e._l(e.blockchains,(function(n,r){return t("option",{domProps:{value:r}},[e._v("\n                      "+e._s(n)+"\n                    ")])})),0)],1),e._v(" "),t("b-form-group",{attrs:{label:"Network","label-for":"network"}},[t("b-form-select",{attrs:{id:"network",size:"lg"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(n,r){return n.network===e.blockchain?t("option",{domProps:{value:r}},[e._v("\n                      "+e._s(n.name)+"\n                    ")]):e._e()})),0)],1),e._v(" "),t("ValidationProvider",{attrs:{name:"Token Address",rules:{required:!0,eth_address:!0}},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("b-form-group",{attrs:{label:"Token Address","label-for":"tokenAddress"}},[t("b-input-group",[t("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenAddress",name:"tokenAddress",placeholder:"0x123456789...",size:"lg"},model:{value:e.address,callback:function(t){e.address="string"==typeof t?t.trim():t},expression:"address"}}),e._v(" "),t("b-input-group-append",[t("b-button",{attrs:{disabled:e.loading,type:"submit",variant:"success"}},[t("b-icon-search")],1)],1)],1),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                      "+e._s(r[0])+"\n                    ")])],1)]}}])})],1)],1)],1),e._v(" "),e.loading?e._e():t("b-col",{attrs:{md:"6"}},[t("ValidationObserver",{ref:"createObserver",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.createTokenPage.apply(null,arguments)}}},[t("fieldset",{attrs:{disabled:!e.loaded}},[t("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"}},[t("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("b-form-group",{attrs:{label:"Token Name","label-for":"tokenName"}},[t("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your Token name",size:"lg",readonly:""},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                        "+e._s(r[0])+"\n                      ")])],1)]}}],null,!1,1936990830)}),e._v(" "),t("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("b-form-group",{attrs:{label:"Token Symbol","label-for":"tokenSymbol"}},[t("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your Token symbol",size:"lg",readonly:""},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                        "+e._s(r[0])+"\n                      ")])],1)]}}],null,!1,2612049646)}),e._v(" "),t("ValidationProvider",{attrs:{name:"token Decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("b-form-group",{attrs:{label:"Token Decimals","label-for":"tokenDecimals"}},[t("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your Token decimals",size:"lg",type:"number",min:"0",step:"1",readonly:""},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                        "+e._s(r[0])+"\n                      ")])],1)]}}],null,!1,2504023418)}),e._v(" "),t("ValidationProvider",{attrs:{name:"Token Logo"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("b-form-group",{attrs:{label:"Logo (optional)","label-for":"tokenLogo",description:"Suggested: a square SVG or PNG with transparent background (recommended greater than 64x64px)."}},[t("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenLogo",name:"tokenLogo",placeholder:"Your Token logo link",size:"lg"},model:{value:e.token.logo,callback:function(t){e.$set(e.token,"logo","string"==typeof t?t.trim():t)},expression:"token.logo"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                        "+e._s(r[0])+"\n                      ")])],1)]}}],null,!1,2278432482)})],1),e._v(" "),t("b-button",{staticClass:"mt-3 py-3 px-5 text-uppercase",attrs:{variant:"success",size:"lg",block:"",type:"submit"}},[e._v("\n                  Create Token Page\n                ")])],1)])],1),e._v(" "),e.loading?t("b-col",{attrs:{md:"6"}},[t("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"}},[t("Loader",{attrs:{loading:e.loading}})],1)],1):e._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null),f=component.exports,title="Create a page for your ERC20 or BEP20 Token | Token Watcher | SmartContracts Tools",h="Create a dedicated page for your ERC20 or BEP20 Token. Enter your ERC20 or BEP20 Token details, create and share it with your customers.",v={components:{Create:f},head:function(){return{title:title,meta:[{hid:"description",name:"description",content:h},{name:"twitter:title",content:title},{name:"og:title",content:title},{name:"twitter:description",content:h},{name:"og:description",content:h},{name:"og:url",content:"https://www.smartcontracts.tools".concat(this.$router.currentRoute.path)},{name:"og:image",content:"https://www.smartcontracts.tools/assets/images/social/sct-token-watcher.png"},{name:"twitter:image",content:"https://www.smartcontracts.tools/assets/images/social/sct-token-watcher.png"}]}}},k=Object(y.a)(v,(function(){return(0,this._self._c)("Create")}),[],!1,null,null,null);t.default=k.exports}}]);