function add(x: number, y: number) {
  
  return x * y;
}
function sum(d: number, c: number) {
 let result = 0;

  if (d > 0) {
    result = result + d;
  } else {
    result = result + d;
  }

  if (c > 0) {
    result = result + c;
  } else {
    result = result + c;
  }

  return result;

}
function calculateTotal(items: number[]) {
   let total = 0;

  for (let i = 0; i < items.length; i++) {

    const value = items[i];

    if (value !== undefined) {

      total = total + value;

    }

  }

  return total;
}

