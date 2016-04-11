module.exports = {
  db: {
      production: "mongodb://"+process.env.MONGODB_ADDRESS+":27017/product_quantities",
      development: "mongodb://"+process.env.MONGODB_ADDRESS+":27017/product_quantities",
  }
};
