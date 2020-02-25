//import Elasticsearch from 'elasticsearch'
import { Client } from '@elastic/elasticsearch';
import logger from '../utils/logger/logger'

require('dotenv').config({
    path: 'variables.env'
})

let hosts = process.env.ELASTIC_HOSTS.split(',')
hosts = hosts.filter(host => host)


logger.info(`Hosts : ${JSON.stringify(hosts, null, 4)}`)

let client = null

if (hosts && hosts.length > 0) {
    client = new Client({
        nodes:hosts,
        hosts: hosts,
        log: "trace"
    })
} else {
    logger.error("Elastic hosts are undefined")
}

if (!client) {
    logger.error("Elastic connection could not be established")
    process.exit(0)
}


export default {
    client
}