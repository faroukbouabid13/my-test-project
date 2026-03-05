export function calculateTotal(items: number[]) {

  let total = 0;

  for (let i = 0; i < items.length; i++) {

    const value = items[i];

    if (value !== undefined) {

      total = total + value;

    } else {

      total = total + 0;

    }

  }

  return total;

}

export function getMax(a: number, b: number) {
  return Math.max(a, b);
}

export function isAdult(age: number) {
  return age >= 18;
}

export function multiply(a: number, b: number) {
  return a * b;
}