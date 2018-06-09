class ShoppingCart {
  constructor() {
    this.items = []
  }
  getItems() {
    return this.items
  }
  addItem(itemName,quantity,price) {
    this.name = itemName
    this.quantity = quantity
    this.price = price
    const newItem = {name: this.name, quantity: this.quantity, pricePerUnit: this.price}
    this.items.push(newItem)
  }
  clear() {
    this.items = []
    return this.items
  }
  clone() {
    const cloned = new ShoppingCart()
    cloned.items = [...this.items] //it's a separate copy but i'm still getting test error
    return cloned
  }
}

module.exports.ShoppingCart = ShoppingCart
