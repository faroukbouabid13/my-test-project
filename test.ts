// bad implementations - needs refactoring

export function findMaximumValue(numbers: number[]) {
  let max = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i = i + 1;
  }
  return max;
}

export function calculateBiggest(numbers: number[]) {
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > result) {
      result = numbers[index];
    }
  }
  return result;
}

export function calculateTotal(items: number[]) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
}