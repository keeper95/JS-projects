// src/strategies/macdRsiStrategy.js

const { getKlines, ATR, volatility } = require('../api/api');
const { buy, sell } = require('../trading/trade'); // Импортируем логику торговли
const config = require('../../config/config');

// Пример параметров для стратегии
const atrPeriod = config.strategy.atrPeriod;
const rsiPeriod = config.strategy.rsiPeriod; // Параметр RSI

async function executeMacdRsiStrategy(symbol, interval, limit) {
  try {
    // Получаем данные о свечах
    const klines = await getKlines(symbol, interval, limit);

    // Логика MACD и RSI здесь
    console.log('Стратегия MACD-RSI выполнена.');
  } catch (error) {
    console.error('Ошибка в стратегии MACD-RSI:', error);
  }
}

// Убедитесь, что вы экспортируете функцию правильно
module.exports = {
  executeMacdRsiStrategy,
};
