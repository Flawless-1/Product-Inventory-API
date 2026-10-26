const db = require('../config/db');

// GET /api/products
exports.getAllProducts = (req, res) => {
  const sql = 'SELECT * FROM products ORDER BY created_at DESC';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows
    });
  });
};

// GET /api/products/:id
exports.getProductById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM products WHERE id = ?';

  db.get(sql, [id], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }
    if (!row) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({
      success: true,
      data: row
    });
  });
};

// POST /api/products
exports.createProduct = (req, res) => {
  const { name, description, price, quantity } = req.body;

  if (
    !name ||
    price === undefined || price === null || price === '' ||
    quantity === undefined || quantity === null || quantity === ''
  ) {
    return res.status(400).json({
      success: false,
      error: 'name, price and quantity are required'
    });
  }

  const sql = `
    INSERT INTO products (name, description, price, quantity) 
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [name, description, price, quantity], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }

    res.status(201).json({
      success: true,
      id: this.lastID
    });
  });
};

// PUT /api/products/:id
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;

  if (
    !name ||
    price === undefined || price === null || price === '' ||
    quantity === undefined || quantity === null || quantity === ''
  ) {
    return res.status(400).json({
      success: false,
      error: 'name, price and quantity are required'
    });
  }

  const sql = `
    UPDATE products 
    SET name = ?, description = ?, price = ?, quantity = ? 
    WHERE id = ?
  `;

  db.run(sql, [name, description, price, quantity, id], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully'
    });
  });
};

// DELETE /api/products/:id
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM products WHERE id = ?';

  db.run(sql, [id], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  });
};