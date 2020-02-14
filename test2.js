var request = require('request');
var exec = require('child_process').exec;
var tosend = '"'
var bins = []
var bfxs = []
request.get('https://api.binance.com/api/v3/ticker/24hr', function (e, r, d){
for (var tick in JSON.parse(d)){
	if (JSON.parse(d)[tick].symbol.substr(JSON.parse(d)[tick].symbol.length - 3, JSON.parse(d)[tick].symbol.length) == 'BTC'){
		var s = JSON.parse(d)[tick].symbol
		bins.push(s)
		
tosend+=(s+'", "')
}
}
console.log(tosend)
})
var tosend2 = '"'
request.get('https://api.bitfinex.com/v1/symbols', function (e, r, d){
	var j = JSON.parse(d)
	for(var sym in j){
		if (j[sym].substr(j[sym].length-3,j[sym].length) == 'btc'){
			if (!j[sym].includes(':')){
				var s = (j[sym]).toUpperCase()
				bfxs.push(s)
				
			
			tosend2+=(s + '", "')
			}
		}
	}
	doBfx(0)
	console.log(tosend2)
})
function doBfx(i){
	var s = bfxs[i]
	exec('node index.js backfill -e bitfinex -p 1m -s ' + s, function callback(error, stdout, stderr){
		exec('node index.js backfill -e bitfinex -p 15m -s ' + s, function callback(error, stdout, stderr){
		
			exec('node index.js backfill -e bitfinex -p 1h -s ' + s, function callback(error, stdout, stderr){
				i++
				if (i<=bfxs.length-1){
					setTimeout(function(){
						doBfx(i)
					}, 500)
				}
			});
		});
	});
}

function doBins(i){
	var s = bins[i]
	exec('node index.js backfill -e bitfinex -p 1m -s ' + s, function callback(error, stdout, stderr){
		exec('node index.js backfill -e bitfinex -p 15m -s ' + s, function callback(error, stdout, stderr){
		
			exec('node index.js backfill -e bitfinex -p 1h -s ' + s, function callback(error, stdout, stderr){
				i++
				if (i<=b.length-1){
					setTimeout(function(){
						doBfx(i)
					}, 500)
				}
			});
		});
	});
}