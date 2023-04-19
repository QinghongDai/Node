import calculator from './calculator.js';
import input from './input.json' assert { type: 'json' };

const output = calculator(input);
console.log(output);
