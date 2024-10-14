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

  const atr = SMA(tr, period);
  return atr;
}

// Функция для вычисления скользящей средней (SMA)
function SMA(data, period) {
  if (data.length < period) return null;
  const sum = data.slice(-period).reduce((acc, val) => acc + val, 0);
  return sum / period;
}

// Функция для вычисления экспоненциальной скользящей средней (EMA)
function EMA(data, period) {
  if (data.length < period) return null;

  const k = 2 / (period + 1); // Коэффициент EMA
  let ema = SMA(data.slice(0, period), period); // Начальное значение EMA равно SMA за период

  for (let i = period; i < data.length; i++) {
    ema = data[i] * k + ema * (1 - k); // Формула EMA
  }

  return ema;
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

// Функция для вычисления волатильности на основе стандартного отклонения
function volatility(data, period) {
  const closes = data.map(item => parseFloat(item[4])); // Используем цены закрытия
  if (closes.length < period) return null;
  const sd = standardDeviation(closes.slice(-period));
  return sd; // Возвращаем стандартное отклонение как меру волатильности
}

// Функция для вычисления индекса относительной силы (RSI)
function RSI(data, period) {
  if (data.length < period) return null;

  let gains = 0;
  let losses = 0;

  for (let i = 1; i < period; i++) {
    const change = data[i][4] - data[i - 1][4]; // Используем цены закрытия
    if (change > 0) {
      gains += change;
    } else {
      losses += Math.abs(change);
    }
  }

  const averageGain = gains / period;
  const averageLoss = losses / period;

  const rs = averageGain / averageLoss;
  const rsi = 100 - 100 / (1 + rs);

  return rsi;
}

// Функция для вычисления индикатора MACD
function MACD(data, shortPeriod = 12, longPeriod = 26, signalPeriod = 9) {
  if (data.length < longPeriod) return null;

  const closes = data.map(item => parseFloat(item[4])); // Цены закрытия
  const shortEMA = EMA(closes, shortPeriod);
  const longEMA = EMA(closes, longPeriod);

  const macdLine = shortEMA - longEMA;
  const signalLine = EMA(closes.slice(-signalPeriod), signalPeriod); // Сигнальная линия

  return {
    macdLine,
    signalLine,
    histogram: macdLine - signalLine // Разница между MACD и сигнальной линией
  };
}

module.exports = {
  ATR,
  SMA,
  EMA,
  volatility,
  RSI,
  MACD,
  standardDeviation
};
