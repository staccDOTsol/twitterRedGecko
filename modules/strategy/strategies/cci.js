const SignalResult = require('../dict/signal_result');
[
  { score: 6.050000000000001, ts: 1581660989000, coin: 'VIA' },
  { score: 6.050000000000001, ts: 1581484722000, coin: 'KAVA' },
  { score: 6.050000000000001, ts: 1581697160000, coin: 'STEEM' },
  { score: 6.050000000000001, ts: 1581697160000, coin: 'STEEM' },
  { score: 6.050000000000001, ts: 1581697160000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581689064000, coin: 'TRX' },
  { score: 6.655000000000001, ts: 1581640156000, coin: 'TRX' },
  { score: 6.655000000000001, ts: 1581640093000, coin: 'TRX' },
  { score: 6.655000000000001, ts: 1581640029000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581624824000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581619439000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581548918000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581548918000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581548918000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581542290000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581539447000, coin: 'BTT' },
  { score: 6.050000000000001, ts: 1581539447000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581466150000, coin: 'TRX' },
  { score: 6.655000000000001, ts: 1581445257000, coin: 'TRX' },
  { score: 6.050000000000001, ts: 1581549168000, coin: 'XRP' },
  { score: 6.050000000000001, ts: 1581593693000, coin: 'XTZ' },
  { score: 6.050000000000001, ts: 1581593693000, coin: 'GO' },
  { score: 6.655000000000001, ts: 1581502497000, coin: 'ONE' },
  { score: 6.050000000000001, ts: 1581696633000, coin: 'NEO' },
  { score: 6.050000000000001, ts: 1581629332000, coin: 'ONE' },
  { score: 6.655000000000001, ts: 1581694147000, coin: 'RVN' },
  { score: 6.32225, ts: 1581544832000, coin: 'ETH' }
]
var ts = []
module.exports = class CCI {
  getName() {
    return 'jare_test_3';
  }

  buildIndicator(indicatorBuilder, options) {
    if (!options.period) {
      throw 'Invalid period';
    }

    indicatorBuilder.add('cci', 'cci', options.period);

    indicatorBuilder.add('sma200', 'sma', options.period, {
      length: 200
    });

    indicatorBuilder.add('ema200', 'ema', options.period, {
      length: 200
    });
  }

  period(indicatorPeriod) {
    return this.cci(
      indicatorPeriod.getPrice(),
      indicatorPeriod.getIndicator('sma200'),
      indicatorPeriod.getIndicator('ema200'),
      indicatorPeriod.getIndicator('cci'),
      indicatorPeriod.getLastSignal(), 
	  indicatorPeriod.indicators._candle.time * 1000, 
	  indicatorPeriod.strategyContext.symbol.replace('BTC','')
    );
  }

  async cci(price, sma200Full, ema200Full, cciFull, lastSignal, thets, symbol) {
    if (
      cciFull.length <= 0 ||
      sma200Full.length < 2 ||
      ema200Full.length < 2
    ) {
      return;
    }
    // remove incomplete candle
    const sma200 = sma200Full.slice(0, -1);
    const ema200 = ema200Full.slice(0, -1);
    const cci = cciFull.slice(0, -1);

    const debug = {
      sma200: sma200.slice(-1)[0],
      ema200: ema200.slice(-1)[0],
      cci: cci.slice(-1)[0]
    };
	return SignalResult.createEmptySignal(debug);
    const before = cci.slice(-2)[0];
    const last = cci.slice(-1)[0];

    // trend change
    if (
      (lastSignal === 'long' && before > 100 && last < 100) ||
      (lastSignal === 'short' && before < -100 && last > -100)
    ) {
      return SignalResult.createSignal('close', debug);
    }

    let long = price >= sma200.slice(-1)[0];

    // ema long
    if (!long) {
      long = price >= ema200.slice(-1)[0];
    }

    const count = cci.length - 1;

    if (long) {
      // long

      if (before <= -100 && last >= -100) {
        let rangeValues = [];

        for (let i = count - 1; i >= 0; i--) {
          if (cci[i] >= -100) {
            rangeValues = cci.slice(i, count);
            break;
          }
        }

        const min = Math.min(...rangeValues);
        if (min <= -200) {
          debug._trigger = min;
          return SignalResult.createSignal('long', debug);
        }
      }
    } else if (before >= 100 && last <= 100) {
      const count = cci.length - 1;
      let rangeValues = [];

      for (let i = count - 1; i >= 0; i--) {
        if (cci[i] <= 100) {
          rangeValues = cci.slice(i, count);
          break;
        }
      }

      const max = Math.max(...rangeValues);
      if (max >= 200) {
        debug._trigger = max;
        return SignalResult.createSignal('short', debug);
      }
    }

    return SignalResult.createEmptySignal(debug);
  }

  getBacktestColumns() {
    return [
      {
        label: 'cci',
        value: 'cci',
        type: 'oscillator',
        range: [100, -100]
      }
    ];
  }

  getOptions() {
    return {
      period: '15m'
    };
  }
};
