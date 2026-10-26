# Product Inventory API 📦

A lightweight, robust RESTful API built with **Node.js**, **Express**, and **SQLite3** following the **Model-View-Controller (MVC)** architectural pattern. 

---

## 🚀 Features

* **Full CRUD Functionality**: Retrieve, create, update, and delete inventory items.
* **MVC Architecture**: Clear separation of concerns between database configuration, route handlers, and controller logic.
* **Automated SQLite Setup**: Connects automatically to a local SQLite database (`inventory.db`) and initializes the schema if it doesn't exist.
* **Input Validation**: Ensures required fields (`name`, `price`, `quantity`) are validated before executing queries.
* **Standardized JSON Responses**: Consistent formatting for successful operations, missing resources, and server errors.

---

## 🛠️ Tech Stack

* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: SQLite3
* **Development**: Nodemon / Node native `--watch` mode

---

## 📁 Project Structure

```text
Build Product Inventory API/
│
├── config/
│   └── db.js                 # Database connection & schema setup
├── controllers/
│   └── produController.js    # Business logic & SQL query handlers
├── routes/
│   └── productRoutes.js      # Endpoint route definitions
├── .gitignore                # Ignored files (node_modules, environment variables)
├── inventory.db              # SQLite database file (created automatically)
├── package.json              # Project dependencies & scripts
├── README.md                 # Project documentation
└── server.js                 # Entry point / Express server configuration
```

---

## ⚡ Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone or download the project folder, open your terminal in the root directory, and run:

```bash
npm install
```

### 3. Running the Server

To start the server in development mode:

```bash
npm run dev
```

The server will start on port **5000** (or your specified environment port):

```text
Server running on port 5000
Connected to local SQLite database (inventory.db) ✅
Products table ready ✅
```

---

## 📡 API Endpoints Summary

Base URL: `http://localhost:5000`

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/products` | Fetch all products in inventory | `200 OK` |
| **GET** | `/api/products/:id` | Fetch a single product by ID | `200 OK` / `404 Not Found` |
| **POST** | `/api/products` | Create a new product | `201 Created` / `400 Bad Request` |
| **PUT** | `/api/products/:id` | Update an existing product by ID | `200 OK` / `404 Not Found` |
| **DELETE** | `/api/products/:id` | Delete a product by ID | `200 OK` / `404 Not Found` |

---

## 📝 Request & Response Examples

### 1. Get All Products
* **`GET /api/products`**

**Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "description": "Ergonomic wireless mouse",
      "price": 25.99,
      "quantity": 15,
      "created_at": "2026-10-26 15:58:06"
    }
  ]
}
```

---

### 2. Get Product by ID
* **`GET /api/products/1`**

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse",
    "price": 25.99,
    "quantity": 15,
    "created_at": "2026-10-26 15:58:06"
  }
}
```

---

### 3. Create a Product
* **`POST /api/products`**

**Request Body:**
```json
{
  "name": "Mechanical Keyboard",
  "description": "RGB backlit mechanical keyboard",
  "price": 45.99,
  "quantity": 10
}
```

**Response (`201 Created`):**
```json
{
  "success": true,
  "id": 2
}
```

---

### 4. Update a Product
* **`PUT /api/products/1`**

**Request Body:**
```json
{
  "name": "Wireless Mouse (Updated)",
  "description": "Updated description",
  "price": 29.99,
  "quantity": 25
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product updated successfully"
}
```

---

### 5. Delete a Product
* **`DELETE /api/products/1`**

**Response:**
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```