// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copy = cats.slice()
    copy.push(name);
    return copy;
}

function prependCat(name) {
    const prepend = cats.slice()
    prepend.unshift(name);
    return prepend;
}

function removeLastCat() {
    const lastGone = cats.slice();
    lastGone.pop();
    return lastGone;
}

function removeFirstCat() {
    const firstGone = cats.slice();
    firstGone.shift();
    return firstGone;
}