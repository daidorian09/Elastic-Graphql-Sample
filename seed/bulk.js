import logger from '../utils/logger/logger'
const es = require('../elasticsearch/client').default
const PRODUCTS = require('./product.json').products;

/**
 * Bulk insert example
 */
let initialBulk = {
  index: {
    _index: "products"
  }
};
let collectionBulk = [];

for (const product in PRODUCTS) {
  collectionBulk = [
    ...collectionBulk,
    initialBulk,
    PRODUCTS[product]
  ]
}

es.client.bulk({
  body: collectionBulk
}, function (err, r) {
  if (err) {
    logger.error(`Failed Bulk operation`, err);
  } else {
    logger.info(`${collectionBulk.length} items successfully imported`);
  }
});