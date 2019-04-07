// Example 6: Subclassing built-in classes and DOM
// ===============================================================

// Extend Date built-in
class MyDate extends Date {
    constructor() {
        super();
        this.logger = document.getElementById("output");
    }

    getFormattedDate() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' +
            this.getFullYear();
    }
}

function myDateDemo1() {
    const aDate = new MyDate();
    aDate.logger.value += aDate.getTime();
    aDate.logger.value += aDate.getFormattedDate();
}

// Extend Uint8Array
class ExtendedUint8Array extends Uint8Array {
    constructor() {
        super(10);
        this[0] = 255;
        this[1] = 0xFFA;
        this.logger = document.getElementById("output");
    }
}

function ExtendedUint8ArrayDemo() {
    const eua = new ExtendedUint8Array();
    eua.logger += eua.byteLength;
}

// Extend DOM Audio element
class MyAudio extends Audio {
    constructor() {
        super();
        this._lyrics = '';
        this.logger = document.getElementById("output");
    }

    get lyrics() {
        return this._lyrics;
    }

    set lyrics(str) {
        this._lyrics = str;
    }
}

function MyAudioDemo() {
    const player = new MyAudio();
    player.controls = true;
    player.lyrics = 'Never gonna give you up';
    document.querySelector('body').appendChild(player);
    player.logger.value += player.lyrics;

// Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
// Subclassing arrays supported in Chrome 43.
}

class Stack extends Array {
    constructor() {
        super();
        this.logger = document.getElementById("output");
    }

    top() {
        return this[this.length - 1];
    }
}

function myDateDemo2() {
    const stack = new Stack();
    stack.push('world');
    stack.push('hello');
    stack.logger.value += stack.top();
    stack.logger.value += stack.length;
}
