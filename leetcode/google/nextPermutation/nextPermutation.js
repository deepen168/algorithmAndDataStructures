function nextPermutation(arr) {
  let i = arr.length - 2;

  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[i] > arr[j]) {
      j--;
    }
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const split = arr.splice(i).reverse();
  const spliced = arr.splice(0, i);
  console.log("*********", [...spliced, ...split]);
  return [...arr.splice(0, i), ...split];
}
module.exports = nextPermutation;
