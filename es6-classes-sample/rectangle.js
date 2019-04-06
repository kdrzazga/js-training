// Example 4: Subclassing methods of a parent class
// ===============================================================

class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = 'Rectangle';
        this.logger = document.getElementById("output");
    }

    // Here, sayName() is a subclassed method which
    // overrides their superclass method of the same name.
    sayName() {
        this.logger.value += 'Sup! My name is ' + this.name + '.';
        super.sayHistory();
    }
}

function rectangleDemo() {
    let r = new Rectangle(50, 60);
    r.sayName();
}
