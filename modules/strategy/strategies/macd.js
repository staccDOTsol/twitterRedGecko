const SignalResult = require('../dict/signal_result');
var ts = []
var fs = require('fs');

module.exports = class MACD {
    getName() {
        return 'jare_test_2';
    }

    buildIndicator(indicatorBuilder, options) {
        if (!options.period) {
            throw 'Invalid period';
        }

        indicatorBuilder.add('macd', 'macd', options.period);

        indicatorBuilder.add('sma200', 'sma', options.period, {
            length: 200
        });

        indicatorBuilder.add('ema200', 'ema', options.period, {
            length: 200
        });
    }

    period(indicatorPeriod) {
        return this.macd(
            indicatorPeriod.getPrice(),
            indicatorPeriod.getIndicator('sma200'),
            indicatorPeriod.getIndicator('ema200'),
            indicatorPeriod.getIndicator('macd'),
            indicatorPeriod.getLastSignal(), (indicatorPeriod.indicators._candle.time * 1000),
            indicatorPeriod.strategyContext.symbol.replace('BTC', '')
        );
		}
    }

    async macd(price, sma200Full, ema200Full, macdFull, lastSignal, thets, symbol) {
        if (!macdFull || !ema200Full || macdFull.length < 2 || sma200Full.length < 2 || ema200Full.length < 2) {
            return;
        }
        // remove incomplete candle
        const sma200 = sma200Full.slice(0, -1);
        const ema200 = ema200Full.slice(0, -1);
        const macd = macdFull.slice(0, -1);

        const debug = {
            sma200: sma200.slice(-1)[0],
            ema200: ema200.slice(-1)[0],
            histogram: macd.slice(-1)[0].histogram,
            last_signal: lastSignal,
            thets: thets,
            symbol: symbol
        };

		var winners = JSON.parse(fs.readFileSync('twitter.json', 'utf8'));

        
        for (var t in winners) {
            if (!ts.includes(winners[t].ts) && winners[t].ts < thets) {
                if (symbol == winners[t].coin) {
                    ts.push(winners[t].ts)
                    return SignalResult.createSignal('long', debug);
                }
            }

        }


        const before = macd.slice(-2)[0].histogram;
        const last = macd.slice(-1)[0].histogram;

        // trend change
        if ((lastSignal === 'long' && before > 0 && last < 0) || (lastSignal === 'short' && before < 0 && last > 0)) {
            // return SignalResult.createSignal('close', 'debug');
        }

        // sma long
        let long = price >= sma200.slice(-1)[0];

        // ema long
        if (!long) {
            long = price >= ema200.slice(-1)[0];
        }

        if (long) {
            // long
            if (before < 0 && last > 0) {
                //return SignalResult.createSignal('long', 'debug');
            }
        } else {
            // short

            if (before > 0 && last < 0) {
                //return SignalResult.createSignal('short', 'debug');
            }
        }

        return SignalResult.createEmptySignal(debug);
    }

    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    getOptions() {
        return {
            period: '15m'
        };
    }
};