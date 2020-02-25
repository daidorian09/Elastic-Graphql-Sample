const typeDefs = `

#BusinessUnit Output Type
type BusinessUnit{
  #Business Unit Id
  id : Int!
  #Business Unit Name
  name : String!
}

#Brand Output Type
type Brand{
  #Brand Id
  id : Int!
  #Brand Name
  name : String!
}

#Category Output Type
type Category {
  #Category Id
  id : Int!
  #Category Name
  name : String!
  #Category hierarchy
  hierarchy : String!
}

#Variant Value Output Type
type VariantValue {
  #Attribue Id
  attributeId : Int!
  #Attribue Name
  attributeName : String!
  #Attribue Value
  attributeValue : String!
}

#Variant Output Type
type Variant {
  #Variant Item Number
  itemNumber : Int!
  #Variant Sku
  barcode : String!
  #Variant Values
  values : [VariantValue]
  #Variant Listings
  listings : [Listing]
}

#ListingPrice Output Type
type ListingPrice {
  #Listing Selling Price
  sellingPrice : Float!
  #Listing Buying Price
  buyingPrice : Float!
  #Listing Original Price
  originalPrice : Float!
  #Listing Discounted Price
  discountedPrice : Float!
}

#Listing Output Type
type Listing{
  #Listing Id
  id : String!
  #Listring Fullfilment Type
  fulfilmentType : String!
  #Listing Merchant Id
  merchantId : Int!
  #Listing Carge Status
  freeCargo : Boolean!
  #Listing Winner Status
  winner : Boolean!
  #Listing Price Data
  price : ListingPrice
}

#Product Output Type
type Product{
  #Product Id
  id : Int!
  #Product Name
  name : String!
  #Product Sku
  productCode : String
  #Product Stock Status
  inStock : Boolean!
  #Product Color
  dsmColor : String!
  #Product Installment Count
  installmentCount : Int!
  #Product Business Unit
  businessUnit : String!
  #Product Business Unit Data
  businessUnitData : BusinessUnit!
  #Product UX Layout
  uxLayout : String!
  #Product Group Id
  productGroupId : Int!
  #Product Images
  images : [String]
  #Product Url
  url : String!
  #Product Brand
  brand : Brand!
  #Product Categories
  categories : [Category]
  #Product Variants
  variants : [Variant]
  #Product Legal Status
  legalRequirement : Boolean!
}
`

export default {
    typeDefs,
    query: [
      'getAll : [Product]',
      'getByVariantSize(size:String!) : [Product]'
    ]
  }