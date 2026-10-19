const pool = require('../config/db');

// --- IMPLEMENTED BY LEAD ---
// GET /api/products
exports.getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.status(200).json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// GET /api/products/:id
exports.getProductById = async (req, res) => {
  // TODO: Team Member 1 - Implement fetching a single product by its ID.
  // Hint: Extract req.params.id, write a parameterized SQL query (SELECT * FROM products WHERE id = $1),
  // and handle the case where the product isn't found (404 status).
  res.status(501).json({ success: false, message: 'Not Implemented Yet - Assigned to Team Member 1' });
};

// POST /api/products
exports.createProduct = async (req, res) => {
  // TODO: Team Member 1 - Implement product creation.
  // Hint: Extract name, description, price, and stock from req.body.
  // Validate fields and execute an INSERT INTO query. Return the created product.
  res.status(501).json({ success: false, message: 'Not Implemented Yet - Assigned to Team Member 1' });
};

// --- TEAM TASK 2 ---
// PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  // TODO: Team Member 2 - Implement updating product details or stock quantity.
  // Hint: Check if product exists, then run an UPDATE query based on req.params.id and req.body.
  res.status(501).json({ success: false, message: 'Not Implemented Yet - Assigned to Team Member 2' });
};

// --- TEAM TASK 2 ---
// DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  // TODO: Team Member 2 - Implement product deletion.
  // Hint: Run a DELETE FROM products WHERE id = $1 query and return a success confirmation.
  res.status(501).json({ success: false, message: 'Not Implemented Yet - Assigned to Team Member 2' });
};