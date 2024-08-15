const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

function wordCount(input, query) {
  let result = [];

  for (i = 0; i < query.length; i++) {
    let count = 0;
    for (j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

console.log(wordCount(input, query));
