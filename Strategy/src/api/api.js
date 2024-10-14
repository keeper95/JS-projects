const axios = require('axios');
require('dotenv').config(); // Подключаем dotenv для работы с .env
const BASE_URL = 'https://api.binance.com/api/v3/';

// Настройка Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-MBX-APIKEY': process.env.API_KEY, // Используем API_KEY из .env
  },
});

// Функция для получения свечей
async function getKlines(symbol, interval, limit) {
  try {
    const response = await api.get('klines', {
      params: {
        symbol: symbol,
        interval: interval,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных о свечах:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Функция для загрузки исторических данных
async function loadHistoricalData(symbol, interval, limit) {
  console.log(`Загрузка исторических данных для ${symbol} с интервалом ${interval}...`);
  const data = await getKlines(symbol, interval, limit);
  console.log('Данные загружены:', data);
  return data;
}

// Функция для вычисления Average True Range (ATR)
function ATR(data, period) {
  if (data.length < period) return null;
  
  let tr = [];
  for (let i = 1; i < data.length; i++) {
    const highLow = data[i][2] - data[i][3]; // high - low
    const highPrevClose = Math.abs(data[i][2] - data[i - 1][4]); // high - previous close
    const lowPrevClose = Math.abs(data[i][3] - data[i - 1][4]); // low - previous close
    tr.push(Math.max(highLow, highPrevClose, lowPrevClose));
  }

  // Считаем SMA для TR для получения ATR
  const atr = SMA(tr, period);
  return atr;
}

// Функция для вычисления скользящей средней (SMA)
function SMA(data, period) {
  if (data.length < period) return null;
  const sum = data.slice(-period).reduce((acc, val) => acc + val, 0);
  return sum / period;
}

// Функция для вычисления стандартного отклонения
function standardDeviation(data) {
  const avg = data.reduce((acc, val) => acc + val, 0) / data.length;
  const squareDiffs = data.map((value) => {
    const diff = value - avg;
    return diff * diff;
  });
  const avgSquareDiff = squareDiffs.reduce((acc, val) => acc + val, 0) / data.length;
  return Math.sqrt(avgSquareDiff);
}

// Функция для получения волатильности на основе стандартного отклонения
function volatility(data, period) {
  const closes = data.map(item => parseFloat(item[4])); // Используем цены закрытия
  if (closes.length < period) return null;
  const sd = standardDeviation(closes.slice(-period));
  return sd; // Возвращаем стандартное отклонение как меру волатильности
}

module.exports = {
  getKlines,
  loadHistoricalData, // Экспортируем новую функцию
  ATR,
  volatility,
};
