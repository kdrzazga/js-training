var Human = function() {
    this.canWalk = true;
    this.canSpeak = true; //
};
Person.prototype.greet = function() {
    if (this.canSpeak) { // checks whether this prototype has instance of speak
        this.name = "Steve"
        console.log('Hi, I am ' + this.name);
    } else{
        console.log('Sorry i can not speak');
    }
};

function personGreets(){
    obj = Object.create(Person.prototype);
    ob.greet();
}
