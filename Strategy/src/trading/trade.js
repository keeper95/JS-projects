const logger = require('../utils/logger');

async function openPosition(positionType) {
  try {
    // Логика открытия позиции
    logger.info(`Открытие позиции: ${positionType}`);
  } catch (error) {
    logger.error(`Ошибка при открытии позиции: ${error.message}`);
  }
}

async function sell() {
  openPosition('sell');
}

module.exports = { sell };
