require('dotenv').config();

const config = {
  API_KEY: process.env.API_KEY,
  SECRET_KEY: process.env.SECRET_KEY,
  
  // Настройки торговли
  trade: {
    symbol: process.env.TRADE_SYMBOL || 'BTCUSDT', // Пара для торговли
    orderSize: parseFloat(process.env.ORDER_SIZE) || 0.001,  // Размер заказа
    leverage: parseInt(process.env.LEVERAGE, 10) || 10,      // Плечо
  },
  
  // Настройки стратегии
  strategy: {
    type: process.env.STRATEGY_TYPE || 'ATR-Volatility',  // Тип стратегии (ATR-Volatility или MACD-RSI)
    atrPeriod: parseInt(process.env.ATR_PERIOD, 10) || 14, // Период ATR
    smaPeriod: parseInt(process.env.SMA_PERIOD, 10) || 50, // Период SMA
    macd: {
      fastPeriod: parseInt(process.env.MACD_FAST_PERIOD, 10) || 12,  // Период быстрой EMA для MACD
      slowPeriod: parseInt(process.env.MACD_SLOW_PERIOD, 10) || 26,  // Период медленной EMA для MACD
      signalPeriod: parseInt(process.env.MACD_SIGNAL_PERIOD, 10) || 9, // Период сигнальной линии для MACD
    },
    rsi: {
      period: parseInt(process.env.RSI_PERIOD, 10) || 14,  // Период RSI
      overbought: parseFloat(process.env.RSI_OVERBOUGHT) || 70,  // Уровень перекупленности для RSI
      oversold: parseFloat(process.env.RSI_OVERSOLD) || 30,     // Уровень перепроданности для RSI
    },
  },
};

module.exports = config;
