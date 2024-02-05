// Obtener los primeros 10 números de la serie Fibonacci.
const serieFibonacci = (digitos) => {
  let num1 = 0;
  let num2 = 1;

  console.log(num1);
  console.log(num2);

  for (let i = 2; i < digitos; i++) {
    let res = num1 + num2;
    console.log(res);

    num1 = num2;
    num2 = res;
  }
};

serieFibonacci(10);