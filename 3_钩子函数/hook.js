export default class Hook {
    constructor() {
        this.number = 0
    }
    addOne() {
        this.number += 1
    }

    addTwo() {
        this.number += 10
    }
    minusOne() {
        this.number -= 1
    }
}