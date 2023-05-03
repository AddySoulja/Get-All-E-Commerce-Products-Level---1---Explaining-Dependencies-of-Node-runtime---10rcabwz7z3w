const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products
const api1 = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Product fetched successfully",
      data: { products: { ...products } },
    });
  } catch (error) {
    res.status(404).json({ message: "Product not found", error });
  }
};
app.get("/api/v1/products", api1);

module.exports = app;
