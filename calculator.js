class Calculator {
    sum(a , b){
        this.c = a + b;
        return this.c;
    }
    subtract (a, b) {
        this.c = a - b;
        return this.c;
    }

    divide(a, b) {
        this.c = a / b;
        return this.c;
    }

    multiply (a, b) {
        this.c = a * b;
        return this.c;
    }
}

module.exports = Calculator