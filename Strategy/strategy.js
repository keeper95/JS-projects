// strategy.js

const { getKlines, ATR, volatility } = require('./src/api/api');
const { buy, sell } = require('./src/trading/trade');
const config = require('./config/config');
const { executeMacdRsiStrategy } = require('./src/strategies/macdRsiStrategy'); // Проверьте этот путь
const { backtestStrategy } = require('./src/backtest'); // Импорт функции бектеста

// Пример параметров для стратегии                                                      
const symbol = config.trade.symbol;
const interval = '1h';
const limit = 100;

async function executeStrategy() {
  try {
    // Загрузка исторических данных
    console.log(`Загрузка исторических данных для ${symbol} с интервалом ${interval}...`);
    const historicalData = await getKlines(symbol, interval, limit);
    console.log('Данные загружены:', historicalData);

    // Выполнение бектеста
    const backtestResults = await backtestStrategy(historicalData, executeMacdRsiStrategy, { /* параметры стратегии */ });
    console.log('Результаты бектеста:', backtestResults);

    // Добавляем логику для разных стратегий
    if (config.strategy.type === 'MACD-RSI') {
      await executeMacdRsiStrategy(symbol, interval, limit); // Убедитесь, что функция доступна
    } else {
      // Ваши предыдущие стратегии
    }
  } catch (error) {
    console.error('Ошибка в выполнении стратегии:', error);
  }
}

// Запускаем стратегию
executeStrategy();
