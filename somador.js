var entrada = 11; // Substitua 11 por outro valor

var soma = (num) => {
  var sum = 0;
  if (!Number.isInteger(num)) {
    throw Error('O número passado não é um número inteiro');
  } else if (num < 0) {
    throw Error('O número passado não é um número positivo');
  } else {
    for (let i = num - 1; i > 0; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

console.log(soma(entrada));