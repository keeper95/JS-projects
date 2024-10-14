// src/backtest.js

async function backtestStrategy(historicalData, strategyFunction, params) {
  let profit = 0;
  let trades = [];

  for (let i = 0; i < historicalData.length; i++) {
    const dataPoint = historicalData[i];
    const signal = await strategyFunction(dataPoint, params); // Получаем сигнал от стратегии

    if (signal === 'buy') {
      // Логика покупки
      trades.push({ type: 'buy', price: dataPoint[4] }); // Цена закрытия
    } else if (signal === 'sell' && trades.length > 0) {
      // Логика продажи
      const lastTrade = trades.pop();
      profit += dataPoint[4] - lastTrade.price; // Вычисление прибыли
      trades.push({ type: 'sell', price: dataPoint[4] });
    }
  }

  return { profit, trades };
}

module.exports = { backtestStrategy };
