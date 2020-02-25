import esb from 'elastic-builder'

const variantSizeQuery = function buildVariantSizeQuery(variantSize) {
    return esb.requestBodySearch()
        .from(0)
        .size(50)
        .query(
            esb.boolQuery()
            .must(esb.matchQuery('variants.values.attributeValue', variantSize))
            .should(esb.termQuery('dsmColor', "Siyah"))
            .filter(esb.rangeQuery('variants.listings.price.originalPrice').gte(50).lte(150))
        )
        .toJSON()
}

export default variantSizeQuery