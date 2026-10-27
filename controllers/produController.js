// In-memory array storage to satisfy the "without a database" requirement
let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse",
    price: 25.99,
    quantity: 15,
    created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
  }
];
let nextId = 2;

// Get all products
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};

// Get single product by ID
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  
  res.status(200).json({
    success: true,
    data: product
  });
};

// Create a new product
exports.createProduct = (req, res) => {
  const { name, description, price, quantity } = req.body;
  
  if (!name || price === undefined || quantity === undefined) {
    return res.status(400).json({ success: false, message: "Please provide name, price, and quantity" });
  }

  const newProduct = {
    id: nextId++,
    name,
    description: description || "",
    price: parseFloat(price),
    quantity: parseInt(quantity),
    created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    id: newProduct.id,
    message: "Product created successfully"
  });
};

// Update an existing product
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  const { name, description, price, quantity } = req.body;
  
  products[index] = {
    ...products[index],
    name: name !== undefined ? name : products[index].name,
    description: description !== undefined ? description : products[index].description,
    price: price !== undefined ? parseFloat(price) : products[index].price,
    quantity: quantity !== undefined ? parseInt(quantity) : products[index].quantity
  };

  res.status(200).json({
    success: true,
    message: "Product updated successfully"
  });
};

// Delete a product
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  products.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully"
  });
};