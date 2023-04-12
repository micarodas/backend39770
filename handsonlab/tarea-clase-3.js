class ProductManager {
    constructor() {
      this.products = [];
      this.ultimoId = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      if (this.products.some(p => p.code === code)) {
        console.error("El código ya está en uso");
        return;
      }
  
      this.ultimoId++;
      this.products.push({
        id: this.ultimoId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.error("Not found");
        return;
      }
  
      
      return product;

      
    }
  }