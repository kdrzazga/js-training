function differentVariables() {
    let myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
    let myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
    let myFloat = 5.5; // 32-bit floating-point number (decimal)
    let myDouble = 9310141419482.22; // 64-bit floating-point number
    let myBoolean = true; // 1-bit true/false (0 or 1)
    let myBoolean2 = false;
    let myNotANumber = NaN;
    let NaN_Example = 0 / 0; // NaN: Division by Zero is not possible
    let notDefined; // undefined: we didn't define it to anything ye

    alert("Check console");

    log(myInteger);
    log(myLong);
    log(myFloat);
    log(myDouble);
    log(myBoolean);
    log(myBoolean2);
    log(myNotANumber);
    log(NaN_Example);
    log(notDefined);

    function log(variable) {
        try {
            console.log(variable.toString() + " has type " + typeof variable);
        } catch (e) {
            console.error(e.message);
        }
    }
}

function differentArrays() {
    let favoriteFruits = ["apple", "orange", "strawberry"];
    let employees = ["Billy", "Bob", "Joe"];
    let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let randomVariables = [2, "any type works", undefined, null, true, 2.51];

    favoriteFruits.forEach(fruit => console.log(fruit));
    ["Toyota", "Ferrari", "Lexus"].forEach(car => console.log(car));

    myArray = ["John Doe", "Billy"];
    elementNumber = 1;
    window.alert(myArray[elementNumber]); // Billy

    myArray = ["zero", "one", "two"];
    window.alert(myArray[0]); // 0 is the first element of an array
    // in this case, the value would be "zero"
}

function equalInTypeAndValue() {
    var doubleEqual = 77 == '77';
    var tripleEqual = 77 === '77';

    var null2EqUndefined = null == undefined;
    var null3EqUndefined = null === undefined;

    alert("77 == '77' is " + doubleEqual);
    alert("77 === '77' is " + tripleEqual);

    alert("null == undefined is " + null2EqUndefined);
    alert("null === undefined is " + null3EqUndefined);
}

function checkingNaNs() {
    alert("Results in console");

    console.log("isNan(NaN)  " + isNaN(NaN));// true
    console.log("isNaN(NaN); " + isNaN(1));// false: 1 is a number
    console.log("isNaN(1); " + isNaN(-2e-4));// false: -2e-4 is a number (-0.0002) in scientific notation
    console.log("isNaN(-2e-4); " + isNaN(Infinity));// false: Infinity is a number
    console.log("isNaN(Infinity); " + isNaN(true));// false: converted to 1, which is a number
    console.log("isNaN(true) " + isNaN(false));// false: converted to 0, which is a number
    console.log("isNaN(false) " + isNaN(null));// false: converted to 0, which is a number
    console.log("isNaN(null) " + isNaN(""));// false: converted to 0, which is a number
    console.log("isNaN(\"\") " + isNaN(" "));// false: converted to 0, which is a number
    console.log("isNaN(\" \") " + isNaN("45.3"));// false: string representing a number, converted to 45.3
    console.log("isNaN(\"45.3\") " + isNaN("1.2e3"));// false: string representing a number, converted to 1.2e3
    console.log("isNaN(\"1.2e3\") " + isNaN("Infinity"));// false: string representing a number, converted to Infinity
    console.log("isNaN(\"Infinity\") " + isNaN(new Date));// false: Date object, converted to milliseconds since epoch
    console.log("isNaN(new Date) " + isNaN("10$"));// true : conversion fails, the dollar sign is not a digit
    console.log("isNaN(\"10$\") " + isNaN("hello"));// true : conversion fails, no digits at all
    console.log("isNaN(\"hello\") " + isNaN(undefined));// true : converted to NaN
    console.log("isNaN(undefined) " + isNaN());// true : converted to NaN (implicitly undefined)
    console.log("isNaN() " + isNaN(function () {
    }));// true : conversion fails
    console.log("isNaN(function(){}) " + isNaN({}));// true : conversion fails
    console.log("isNaN({}) " + isNaN([1, 2]));// true : converted to "1, 2", which can't be converted to a number
}

function testingInfinity() {
    alert("Results in console");

    console.log("Infinity > 123192310293; // true " + Infinity > 123192310293); // true
    console.log("-Infinity < -123192310293; // true  " + -Infinity < -123192310293); // true
    console.log("1 / 0; " + 1 / 0); // Infinity
    console.log("Math.pow(123123123, 9123192391023);  " + Math.pow(123123123, 9123192391023)); // Infinity
    console.log("Number.MAX_VALUE * 2; " + Number.MAX_VALUE * 2); // Infinity
    console.log("23 / Infinity; " + 23 / Infinity); // 0
    console.log("-Infinity -Infinity " + -Infinity);
    console.log("-Infinity === Number.NEGATIVE_INFINITY " + -Infinity === Number.NEGATIVE_INFINITY); // true
    console.log("-0 = " + -0 );// -0 , yes there is a negative 0 in the language
    console.log("0 === -0 " +  0 === -0); // true
    console.log("1 / -0" + -Infinity);
    console.log("1 / 0 === 1 / -0 ",  1 / 0 === 1 / -0); // false
    console.log("Infinity + Infinity; " + Infinity + Infinity); // Infinity
    var a = 0, b = -0;
    console.log("a === b; " + a === b); // true
    console.log("1 / a === 1 / b " + 1 / a === 1 / b); // false
}
