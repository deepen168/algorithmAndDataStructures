
const movies = [1.90, 1.04, 1.25, 2.5, 1.05]

function findDaysToComplete(arr) {
    let days = 0;
    while(arr.length) {
        const watching = arr.shift();
        const findPair = findClosestNumber( 3 - watching, arr);
        if(findPair) {
            arr.map(val => val !== findPair );
            days++;
        }
    }
    return days;
}

function findClosestNumber(min, arr){
    let mindiff = min;
    let minVal;
        arr.forEach(val => {
            if(val <= min && min-val <= mindiff){
                mindiff = min-val;
                minVal = val;
            }
        })
        return minVal;
}

findDaysToComplete(b)