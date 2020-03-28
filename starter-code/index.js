class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.length < pos) throw new Error("OutOfBounds");

    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;