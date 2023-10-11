export type FizzBuzzOutput = 'Fizz' | 'Buzz' | 'FizzBuzz' | ''

export type FizzBuzzResult = {
  input: number
  output: FizzBuzzOutput
}

export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  const results: FizzBuzzResult[] = [];

  for (let i = start; i <= end; i++) {
    let output: FizzBuzzOutput = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    results.push({
      input: i,
      output: output as FizzBuzzOutput,
    });
  }

  return results;
};
