
# Elastic-Graphql-Sample
Elasticsearch is an open-source, RESTful, distributed search and analytics engine built on Apache Lucene. GraphQL is designed to make APIs fast, flexible, and developer-friendly. As an alternative to REST, GraphQL lets developers construct requests that pull data from multiple data sources in a single API call. This app demonstrates quick look how to get along with your elastic search queries thru graphql

# Getting Started

These instructions below get you started running app

# Clone

 Clone this repo to your local machine using ```https://github.com/daidorian09/Elastic-Graphql-Sample.git```

# Installation

 Make sure to have docker installed in your local environment orelse install based on your local environment ```https://docs.docker.com/install/```

# Up & Run

 - Open your CLI and run this command below
    ```docker-compose up -d ``` This command hides all installation steps and displays only container(s) status

 - Set your environment variables in root folder as variables.env

 -  Run npm command for required node modules in your CLI
    ```npm i```
    
 - Create index for elastic in your CLI
   ```npm run es:create```

  - Go to endpoint with port that will be defined in variables.env e.g http://localhost:your-port-number/graphql or http://localhost:your-port-number/search
  
  - Run graphql query on http://localhost:your-port-number/graphql
        ```{
      getAll{
        id,
        businessUnitData {
          id,
          name
        },
        legalRequirement,
        categories {
          id,
          name,
          hierarchy
        },
        brand {
          id,
          name
        }
      }
    }```
  
