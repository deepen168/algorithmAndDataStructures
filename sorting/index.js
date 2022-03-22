// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minValIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minValIndex]) {
                minValIndex = j;
            }
        }
        if(i !== minValIndex) {
            const swapVal = arr[i];
            arr[i] = arr[minValIndex];
            arr[minValIndex] = swapVal;
        }
    }
    return arr;
}

function mergeSort(arr) {

    if(arr.length === 1){
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

    let returnArray = [];
    while (left.length && right.length) {
        if(left[0] < right[0]) {
            returnArray.push(left.shift());
        } else {
            returnArray.push(right.shift());
        }
    }

    return [...returnArray, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };