export class TestIterable {
  constructor() {
    this.list = [];
  }
  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
  }
}

//# sourceMappingURL=/Users/abdulsat/Projects/angular/modules/angular2/test/change_detection/iterable.map

//# sourceMappingURL=./iterable.map