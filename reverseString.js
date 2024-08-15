const sentence = "NEGIE1";

function reverseString(sentence) {
    let reversed = sentence.split('').reverse().join('');
    let reversedArray = reversed.split('');
    let numbers = [];
    let letters = [];
    reversedArray.forEach((char) => {
        if (isNaN(char)) {
            letters.push(char);
        } else {
            numbers.push(char);
        }
    });
    return letters.join('') + numbers.join('');
}

console.log(sentence);
console.log("Reversed: ");
console.log(reverseString(sentence));