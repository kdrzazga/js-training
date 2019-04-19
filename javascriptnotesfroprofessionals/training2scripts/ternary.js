function writeIfKittyIsCute() {
    addToOutput(isKittyCute());
}

function isKittyCute() {
    let animal = 'kitty';
    return (animal === 'kitty') ? 'cute' : 'still nice';
}

function addToOutput(caption) {
    document.getElementById('output').innerText += caption;
}

function keyPrototypeDifference() {
    console.log("keyPrototypeDifference clicked");

    function Foo() {
    };

    Foo.style = 'bold';

    var foo = new Foo();
    console.log(Foo.style); // 'bold'
    console.log(foo.style); // undefined

    Foo.prototype.style = 'italic';
    console.log(Foo.style); // 'bold'
    console.log(foo.style); // 'italic'
}

function getOutput() {
    return document.getElementById('output');
}
