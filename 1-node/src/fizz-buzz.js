/**
 * @param start number
 * @param end number
 * @returns [{
 *   input: number
 *   output: string
 * }]
 */
module.exports = (start, end) => {
  const results = [];

  for (let i = start; i <= end; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    results.push({ input: i, output: output });
  }

  return results;
};