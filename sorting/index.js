// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i< arr.length; i++){
        let tempVal;
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                tempVal = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tempVal;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minValIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minValIndex]) {
                minValIndex = j;
            }
        }
            if(minValIndex !== i){
                let tempVal = arr[minValIndex];
                arr[minValIndex] = arr[i];
                arr[i] = tempVal;
            }
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };