const express = require("express");
const cors = require("cors");
const products = require("./data/product.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/", (req, res) => {
    res.send("E-Commerce Product API is running...");
});

app.get("/api/categories", (req, res) => {
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

app.listen(5000, () => {
    console.log("Backend server running at http://localhost:5000");
});