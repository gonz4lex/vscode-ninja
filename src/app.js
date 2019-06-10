// * Syntax highlighting!
// ! Code snippets!
// ? Automated documentation!
// // Nothing to see here...
// TODO: lots of extensions!

class User {

    inventory = [1, 2, 3, 4, 5]

    getItems() {
        for (let i = 0; i < inventory.length; i++) {
            var items = this.inventory[i];
        }
        console.log(items); // use `cl` snippet
    }
}


/**
 * Multiplies two numbers.
 * @param {number} a Some number.
 * @param {number} b Another number.
 */
function multiply(a, b) {
    return a * b
}
