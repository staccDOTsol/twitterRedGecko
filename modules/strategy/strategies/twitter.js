var Twitter = require('twitter');
var fs = require('fs')
var symbols = [

	"ETH", "LTC", "BNB", "NEO", "BCC", "GAS", "HSR", "MCO", "WTC", "LRC", "OMG", "ZRX", "STRAT", "SNGLS", "BQX", "KNC", "FUN", "SNM", "IOTA", "LINK", "XVG", "SALT", "MDA", "MTL", "SUB", "EOS", "SNT", "ETC", "MTH", "ENG", "DNT", "ZEC", "BNT", "AST", "DASH", "OAX", "ICN", "BTG", "EVX", "REQ", "VIB", "TRX", "POWR", "ARK", "XRP", "MOD", "ENJ", "STORJ", "VEN", "KMD", "RCN", "NULS", "RDN", "XMR", "DLT", "AMB", "BAT", "BCPT", "ARN", "GVT", "POE", "BTS", "XZC", "LSK", "TNT", "FUEL", "MANA", "BCD", "DGD", "ADX", "ADA", "PPT", "XLM", "LEND", "WABI", "TNB", "WAVES", "GTO", "ICX", "OST", "ELF", "AION", "NEBL", "BRD", "EDO", "WINGS", "NAV", "LUN", "TRIG", "APPC", "VIBE", "RLC", "INS", "PIVX", "IOST", "CHAT", "STEEM", "NANO", "VIA", "Z", "AE", "RPX", "NCASH", "POA", "ZIL", "ONT", "STORM", "XEM", "WAN", "WPR", "QLC", "SYS", "GRS", "CLOAK", "GNT", "LOOM", "BCN", "REP", "ZEN", "CVC", "THETA", "IOTX", "QKC", "AGI", "NXS", "DATA", "SC", "NPXS", "KEY", "NAS", "MFT", "DENT", "ARDR", "HOT", "VET", "DOCK", "POLY", "PHX", "HC", "GO", "PAX", "RVN", "DCR", "MITH", "BCHABC", "BCHSV", "REN", "BTT", "ONG", "FET", "CELR", "MATIC", "ATOM", "PHB", "TFUEL", "ONE", "FTM", "B", "ALGO", "ERD", "DOGE", "DUSK", "ANKR", "WIN", "COS", "COCOS", "TOMO", "PERL", "XTZ", "HBAR", "NKN"
]

var client = new Twitter({
	consumer_key: 'x7MhuNjGTxr8BMqzZColiOf3k',
	consumer_secret: 'LbilCl1vQjWW4dqq26TCuu2nrilZzTjPk3PH6uxHApI5yzbofK',
	access_token_key: '4352022141-6INanvZ5qTmHIXg78kOPrUQRgW4AY1TvTeOEsi3',
	access_token_secret: '4dLk3rMjAoDa9kTe0SR1BLIrJS3ITIqk7g0WYkBATsLJQ'
});


var accounts5 = [
	"binance",
	"coinbase",
	"officialmcafee",
	"elonmusk",
	"CryptoCobain",
	"cz_binance",
	"justinsuntron"
]

var accounts4 = [

	"BitMEXdotcom",
	"OKEx",
	"HuobiGlobal",
	"bitfinex",
	"BittrexExchange",
	"BithumbOfficial",
	"ThisIsNuse",
	"CryptoHayes",
	"needacoin",
	"hitbtc",
	"CryptoDonAlt",
	"CryptoCred",
	"CryptoCoyote",
	"anambroid",
	"crypto_rand",
	"kucoincom",

	"Ripple",
	"ethereum",
	"chainlink",
	"OntologyNetwork",
	"vechainofficial",
	"AttentionToken",
	"holochain",
	"zilliqa",
	"renprotocol"
]

var accounts3 = [


	"krakenfx",
	"notsofast",
	"IamNomad",
	"Cryptopathic",
	"brian_armstrong",
	"upbitglobal",
	"FCoinOfficial",
	"idexio",
	"coinexcom",
	"BluesCrypto",
	"SalsaTekila",
	"TheCryptoDog",
	"cryptostardust",
	"inversebrah",
	"ActualAdviceBTC",
	"stormXBT",
	"Socal_crypto",
	"Crypto_Bitlord",
	"bennydoda01",
	"Coin_Shark",
	"Hotbit_news",
	"Poloniex",
	"Bilaxy_exchange",
	"latokens",

	"tezos",
	"Dashpay",
	"monero",
	"StellarOrg",
	"Cardano",
	"eth_classic",
	"iotatoken",
	"MakerDAO",
	"decentraland",
	"omise_go",
	"Ravencoin",
	"PolymathNetwork",
	"NeblioTeam"
]



var accounts2 = [

	"loomdart",
	"ErikVoorhees",
	"barrysilbert",
	"SatoshiLite",
	"RNR_0",
	"VitalikButerin",
	"IOHK_Charles",
	"zooko",
	"aantonop",
	"VentureCoinist",
	"MoonOverlord",
	"CryptoGainz1",
	"CryptoYoda1338",
	"cryptodemedici",
	"york780",
	"crypto_core",
	"MustStopMurad",
	"moonshilla",

	"NEO_Blockchain",
	"hedgetradehq",
	"Bytom_Official",
	"EnigmaMPC",
	"Cindicator"
]


var accounts1 = [

	"fluffypony",
	"JoelKatz",
	"BitMEXResearch",
	"__tm3k",
	"DanDarkPill"

]

var accounts = []
for (var a in accounts5) {
	accounts.push(accounts5[a])
}

for (var a in accounts4) {
	accounts.push(accounts4[a])
}
for (var a in accounts3) {
	accounts.push(accounts3[a])
}
for (var a in accounts2) {
	accounts.push(accounts2[a])
}
for (var a in accounts1) {
	accounts.push(accounts1[a])
}
var kw5 = [

	"is live",
	"going live",
	"will launch",
	"pump",
	"listing"

]


var kw4 = [
	"buy",
	"buys",
	"bull",
	"bullish",
	"buywall",
	"buy wall",
	"target",
	"say hello",
	"breaks",
	"loading",
	"up"
]


var kw3 = [
	"massive",
	"big",
	"incoming",
	"flag",
	"close"
]


var kw2 = [
	"sell",
	"sells",
	"bear",
	"bearish",
	"sellwall",
	"sell wall",
	"downtrend",
	"scary",
	"exit",
	"exited",
	"wait",
	"waiting"
]


var kw1 = [
	"scam",
	"fake",
	"exit",
	"dump"
]

var tickers = {

	"justinsuntron": "$TRX",

	"Ripple": "$XRP",
	"ethereum": "$ETH",
	"chainlink": "$LINK",
	"OntologyNetwork": "$ONT",
	"vechainofficial": "$VEN",
	"AttentionToken": "$BAT",
	"holochain": "HOLO",
	"zilliqa": "$ZIL",
	"renprotocol": "$REN",
	"Blockchain_Data": "$DATA",
	"taelpay": "$WABI",
	"tezos": "$XTZ",
	"Dashpay": "$DASH",
	"monero": "$XMR",
	"StellarOrg": "$LUM",
	"Cardano": "$ADA",
	"eth_classic": "$ETC",
	"iotatoke": "$IOTA",
	"MakerDAO": "$DAO",
	"decentraland": "$MANA",
	"omise_go": "$OMG",
	"Ravencoin": "$RVN",
	"PolymathNetwork": "$POLY",
	"NeblioTeam": "$NEBL",

	"NEO_Blockchain": "$NEO",
	"hedgetradehq": "$HEDG",
	"Bytom_Official": "$BTM",
	"EnigmaMPC": "$ENG",
	"Cindicator": "$CND"

}
var tids = []
var winners = []
function loadTwitter(i){
	
	var params = {
		screen_name: accounts[i],
		count: 100
	};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var t in tweets) {
				var text = tweets[t].text
				var ts = new Date(tweets[t].created_at).getTime();
				if (tickers.hasOwnProperty(accounts[i])) {
					text += ' ' + tickers[accounts[i]]
				}
				// kw5 iw 1, kw4 is 0.5, kw3 is 0.0, kw2 is -0.5, kw1 is -1
				var neg = 0
				var pos = 0
				var count = 0
				for (var w in kw5) {
					if (text.indexOf(kw5[w]) != -1) {
						pos++
						pos++
						count++
					}
				}
				for (var w in kw4) {
					if (text.indexOf(kw4[w]) != -1) {
						pos++
						count++
					}
				}
				for (var w in kw2) {
					if (text.indexOf(kw2[w]) != -1) {
						neg++
						count++
					}
				}
				for (var w in kw1) {
					if (text.indexOf(kw1[w]) != -1) {
						neg++
						count++
						neg++
					}
				}
				var score = 5
					// 2 4 0.5 1 4 0.25 1 10 0.1 4 2 2
				for (var an = 0; an < pos; an++) {
					score = score * 1.1
				}
				for (var an = 0; an < neg; an++) {
					score = score * 0.9
				}
				if (accounts5.includes(accounts[i])) {
					score = score * 1.1
				}
				if (accounts4.includes(accounts[i])) {
					score = score * 1.05
				}
				if (accounts2.includes(accounts[i])) {
					score = score * 0.95
				}
				if (accounts1.includes(accounts[i])) {
					score = score * 0.9
				}
				if (pos > 1 || neg > 1) {

				}
				var split = text.split(' ')
				for (var s in split) {
					if (symbols.includes(split[s].toUpperCase().replace('$', '').replace('#', ''))) {
						if (score > 6.3 && !tids.includes(tweets[t].id)) {
							console.log('scores high...')
							tids.push(tweets[t].id)
							if (new Date().getTime() - ts < 1000 * 60 * 60) {
								winners.push({
									'score': score,
									'ts': ts,
									'coin': split[s].toUpperCase().replace('$', '').replace('#', '')
								})
								console.log(winners)
							}
						}
					}
				}
			}
		}
		else {
			console.log(error)
		}
		console.log(i)
		setTimeout(function(){
			if (i + 1 == accounts.length - 1){
				fs.writeFile(

				'./twitter.json',

				JSON.stringify(winners),

				function (err) {
					if (err) {
						console.error('Crap happens');
					}
					
				});
				
					winners = []					
					loadTwitter(0)
			

				
			}
			else {
				loadTwitter(i+1)
			}
		}, 865)
	})
}
loadTwitter(0)