// Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {

    constructor() {
        this.logger = document.getElementById("output");
    }

    getPolyName() {
        this.logger.value += 'Hi. I was created with a Class expression. My name is ' +
            Poly.name;
    }
};

function polyDemo() {
    let inst = new MyPoly();
    inst.getPolyName();
}
