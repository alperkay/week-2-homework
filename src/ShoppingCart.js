class ShoppingCart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(itemName,quantity,price) {
    const newItem = {name: itemName, quantity: quantity, pricePerUnit: price}
    this.items.push(newItem)
  }

  clear() {
    this.items = []
  }

  clone() {
    const cartClone = new ShoppingCart()
    this.items.map(item => cartClone.addItem(item.name, item.quantity, item.pricePerUnit))
    return cartClone
  }

}

module.exports = ShoppingCart
