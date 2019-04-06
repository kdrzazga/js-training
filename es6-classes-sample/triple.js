// Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {

    // Using the 'static' keyword creates a method which is associated
    // with a class, but not with an instance of the class.
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

function tripleDemo() {
    let logger = document.getElementById("output");

    logger.value += Triple.triple();
    logger.value += Triple.triple(6);
    logger.value += BiggerTriple.triple(3);
// var tp = new Triple();
// ChromeSamples.log(tp.triple()); tp.triple is not a function
}
