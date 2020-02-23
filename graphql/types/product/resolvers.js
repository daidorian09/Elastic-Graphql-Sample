import logger from '../../../utils/logger/logger'
import {
    ElasticSearchClient
} from '../../../elasticsearch/service'
import query from '../../../elasticsearch/query';

const resolvers = {

    // #region Query
    Query: {
        getAll(root, args, context, info) {
            return new Promise((resolve, reject) => {
                logger.info('GetAll - Product - Query is called')

                ElasticSearchClient({
                    root
                }).then(resp => {
                    let _source = resp.hits.hits;
                    if (Array.isArray(_source) && _source.length > 0) {
                        _source.map((item, i) => _source[i] = item._source)
                        return resolve(_source)
                    }
                    logger.info(`Search result for ${JSON.stringify(query, null, 4)} is not found`)
                    return resolve([])
                }).catch(err => {
                    logger.error(`GetAll - Product failed: ${JSON.stringify(err.stack, null, 4)}`)
                    return reject(new Error(err))
                })
            })
        }
    }
    // #endregion
}

export default {
    resolvers
}