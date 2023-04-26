const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./productos.json');

const newProduct = {
  title: 'Nuevo producto',
  description: 'Descripción del nuevo producto',
  price: 100,
  thumbnail: 'https://via.placeholder.com/150',
  code: 'NEWPROD',
  stock: 50,
};

// Para agregar un nuevo producto
productManager.addProduct(newProduct);

// para obtener todos los productos
const products = productManager.getProducts();
console.log(products);

// para obtener un producto por el id
const productId = 1;
const product = productManager.getProductById(productId);
console.log(product);

// para actualizar un producto
const updatedProduct = {
  title: 'Producto actualizado',
  price: 100,
};
productManager.updateProduct(productId, updatedProduct);

// y para eliminar un producto
productManager.deleteProduct(productId);
