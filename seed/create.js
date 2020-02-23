const es = require("../elasticsearch/client").default
import settings from '../config/es-setting.json'
import logger from '../utils/logger/logger'


es.client.indices.exists({
    index: 'products'
}, (err, res, status) => {
    if (res) {
        logger.warn('index already exists');
    } else {
        es.client.indices.create({
            index: 'products',
            body: settings
        }, (err, res, status) => {
            logger.info(err, res, status);
        })
    }
})