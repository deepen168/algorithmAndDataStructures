// https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff

const permute = (arr) => {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr;

  let result = [];

  arr.forEach((val, i) => {
    // create a tree starting with 1st value as start point
    const currentVal = val;
    // take remaining values out
    const remainingVal = arr.slice(0, i).concat(arr.slice(i + 1));
    // recursion for permutation
    const remainingPermuted = permute(remainingVal);

    for (let j = 0; j < remainingPermuted.length; j++) {
      // Concat is useful here as it concats two arrays as one array or array and value as one array
      // [1].concat(1) // [1,1]
      // [1].concat([1]) // [1,1]
      const permutedArray = [currentVal].concat(remainingPermuted[j]);
      result.push(permutedArray);
    }
  });

  return result;
};
