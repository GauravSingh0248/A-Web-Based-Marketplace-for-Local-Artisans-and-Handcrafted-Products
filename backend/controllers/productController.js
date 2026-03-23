// Temporary product storage (later DB will come)
let products = [];

// GET all products
const getProducts = (req, res) => {
  res.json(products);
};

// ADD new product
const addProduct = (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and price are required"
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
};

module.exports = {
  getProducts,
  addProduct
};