class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#stringCheck(initialValue);
        this.#value = initialValue;
    }

    #stringCheck(str) {
        if (typeof str !== 'string') {
            throw new TypeError(`expected string but reseived ${typeof str}`);
        }
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#stringCheck(str);
        return this.#value += str;
    }

    padStart(str) {
        this.#stringCheck(str);
        return this.#value = str + this.#value;
    }

    padBoth(str) {
        this.#stringCheck(str);
        return this.#value = str + this.#value + str;
    }
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
