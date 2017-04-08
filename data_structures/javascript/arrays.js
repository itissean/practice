/**
 * Reverse an array in O(n)
 * @param  {string[]|number[]} originalArray
 * @return {string[]|number[]}
 */
function reverseArray(originalArray) {
  const reversedArray = [];
  const length = originalArray.length;
  let i;
  for (i = length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
  }
  return reversedArray;
}

/**
 * Get the frequency of items in an array in O(n)
 * @param  {string[]|number[]} inputArray
 * @return {string[]|number[]}
 */
function getFrequency(inputArray) {
  const count = {};
  const length = inputArray.length;
  let i;
  for (i = 0; i < length ; i++) {
    const num = inputArray[i];
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  return count;
}

console.log('Reverse array: ', reverseArray([1, 2, 3, 4 ,5]));
console.log('Get frequency of array items: ', getFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4 , 5]));
