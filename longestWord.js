const sentence = "Saya sangat senang mengerjakan soal algoritma"

function longest(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';
    words.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return `${longestWord}: ${longestWord.length} characters`;
}

console.log(sentence);
console.log("Longest Word: ");
console.log(longest(sentence));