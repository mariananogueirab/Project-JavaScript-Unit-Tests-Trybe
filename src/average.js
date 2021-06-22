/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const averageArray = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
    } if (array[index] === 0) {
      return 0;
    } 
      sum += array[index];
  }
  return sum;
};

const average = (array) => {
  let averageNum = 0;
  let sum = 0;
  sum = averageArray(array);
  if (array.length === 0 || typeof sum !== 'number') return undefined;
  averageNum = sum / array.length;
  return Math.round(average);
};

console.log(average([3, 4, 5]));
module.exports = average;
