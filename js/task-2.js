class Storage {
  #items;

  constructor(params) {
    if (!Array.isArray(params)) {
      throw new TypeError(`expected array but reseived ${typeof params}`);
    } 
    this.#items = params;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    if (typeof newItem !== 'string') {
      throw new TypeError(`expected string but reseived ${typeof newItem}`);
    }
    else if (newItem.trim() === "") {
      throw new Error('expected string but reseived empty field');
    }
    return this.#items.push(newItem.trim()); 
  }

  removeItem(itemToRemove) {
    return this.#items = this.#items.filter(item => item !== itemToRemove.trim());
  }

}

//Перевірки та trim додав керуючись логікою що масив товарів items це масив 
// з назвами товарів які повинні бути рядками.



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
