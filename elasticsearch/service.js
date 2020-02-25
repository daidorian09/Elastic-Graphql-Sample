import logger from '../utils/logger/logger'
const es = require('./client').default
import query from './query'

//#region Healthcheck
es.client.ping({}, function (error) {
    error
      ? logger.error('ElasticSearch cluster is down!')
      : logger.info('ElasticSearch is up&run');
  })
  //#endregion


  export function ElasticSearchClient(body) {
    // perform the actual search passing in the index, the search query and the type
    return es.client.search({index: 'products', body: body});
  }
  
  export function ApiElasticSearchClient(req, res) {
    // perform the actual search passing in the index, the search query and the type
    ElasticSearchClient({...query})
      .then(r => res.send(r.body.hits.hits))
      .catch(e => {
        logger.error(`Error occured on connecting elastic : ${e}`);
        res.send([])
      })
  }