This is a simple microservices example that uses Node.js + Express to provide a simple Product Quantities Service for tracking onhand inventories of products. Docker support is included for running locally or deploying to services such as [Cloud66](https://www.cloud66.com)

__Note:__ This isn't production-ready code. The service assumes no Mongo username/password, doesn't force SSL, or enforce security best practices. This is for demonstration and learning purposes only. 

# Running locally

Install the required dependencies:

> npm install

Set an environment variable to point to the location of your MongoDB instance (e.g. 127.0.0.01 for localhost, or the specific IP/hostname if not localhost)

> export MONGODB_ADDRESS=127.0.0.1

Run Express:

> npm start

# Running locally using Docker

Use docker-compose to build the service and mongodb containers (takes a few minutes the first time):

> docker-compose build

Then start the the containers:

> docker-compose up

# Deploying to Cloud66

Cloud66 is a Manager Containers as a Service that supports deploying Docker containers onto one or more servers using a bring-your-own-cloud approach.

TODO 

# Interacting with the Products Service

Use [Postman](https://www.getpostman.com) or [cURL](https://curl.haxx.se/) to directly interact with the API. 

Create/update a product's onhand quantity, given the product identifier of 12345:

> curl -X PUT http://127.0.0.1:8080/product_quantities/12345 -d "quantity_onhand=15"

```
{
  "product_id": "12345",
  "quantity_onhand": 15,
  "created_at": "2016-04-11T16:43:29.000Z",
  "_links": {
    "self": {
      "href": "/product_quantities/12345"
    }
  }
}
```

(make the same PUT call to update the onhand quantity at a later time)

Get the current onhand quantity for a product with the identifier 12345:

> curl -X GET http://127.0.0.1:8080/product_quantities/12345

```
{
  "product_id": "12345",
  "quantity_onhand": 15,
  "created_at": "2016-04-11T16:43:29.000Z",
  "_links": {
    "self": {
      "href": "/product_quantities/12345"
    }
  }
}
```

