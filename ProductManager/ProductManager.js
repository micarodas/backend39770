const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  getProducts() {
    const data = fs.readFileSync(this.path, 'utf-8');
    return JSON.parse(data);
  }

  getProductById(productId) {
    const products = this.getProducts();
    return products.find(product => product.id === productId);
  }

  addProduct(product) {
    const products = this.getProducts();
    const lastId = products.length > 0 ? products[products.length - 1].id : 0;
    product.id = lastId + 1;
    products.push(product);
    fs.writeFileSync(this.path, JSON.stringify(products));
  }

  updateProduct(productId, updatedProduct) {
    const products = this.getProducts();
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex >= 0) {
      products[productIndex] = {
        ...products[productIndex],
        ...updatedProduct,
        id: productId,
      };
      fs.writeFileSync(this.path, JSON.stringify(products));
    }
  }

  deleteProduct(productId) {
    const products = this.getProducts();
    const updatedProducts = products.filter(product => product.id !== productId);
    fs.writeFileSync(this.path, JSON.stringify(updatedProducts));
  }
}

module.exports = ProductManager;
