function spiralOrder(matrix) {
    let minColumn = 0;
    let maxColumn = matrix[0].length - 1;

    let minRow = 0;
    let maxRow = matrix.length - 1;

    let flatArrLength = matrix.flat().length - 1;

    let resultArr = [];

    while (flatArrLength > 0) {
        // while(minColumn <= maxColumn || minRow < maxRow){
        for (let i = minColumn; i <= maxColumn; i++) {
            resultArr.push(matrix[minRow][i]);
            flatArrLength--;
        }
        minRow++;

        for (let i = minRow; i <= maxRow; i++) {
            resultArr.push(matrix[i][maxColumn]);
            flatArrLength--;
        }
        maxColumn--;

        for (let i = maxColumn; i >= minColumn; i--) {
            resultArr.push(matrix[maxRow][i]);
            flatArrLength--;
        }
        maxRow--;

        for (let i = maxRow; i >= minRow; i--) {
            resultArr.push(matrix[i][minColumn]);
            flatArrLength--;
        }
        minColumn++;
    }

    return resultArr;
}

module.exports = spiralOrder;