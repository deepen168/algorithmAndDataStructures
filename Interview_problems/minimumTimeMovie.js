const movies = [1.9, 1.04, 1.25, 2.5, 1.05];
const val1 = [1.01, 2.4, 1.01, 1.01, 1.4]
const val3 = [1.01, 2.4, 1.4, 1.6, 2.6, 1.7]
const val2 = [1.01, 2.4, 1.5, 1.6, 2.6, 1.7]

const finDays = (movies) => {
	const sortedMovieTimes = movies.sort((a,b) => a-b);
	let days = 0;
  let first = 0;
  let last = sortedMovieTimes.length - 1;
  
  while(first <= last) { 
      days++;
  	if(sortedMovieTimes[first] + sortedMovieTimes[last] <= 3 ) { 
        first++;
        last--;
    } else {
        last--;
    }
  }
    return days
}

console.log(finDays(movies))
console.log(finDays(val1))
console.log(finDays(val2))
console.log(finDays(val3))

//****************************************************************************

function findDaysToComplete(arr) {
  let days = 0;
  while (arr.length) {
    const watching = arr.shift();
    const findPair = findClosestNumber(3 - watching, arr);
    if (findPair) {
      arr.map((val) => val !== findPair);
      days++;
    }
  }
  return days;
}

function findClosestNumber(min, arr) {
  let mindiff = min;
  let minVal;
  arr.forEach((val) => {
    if (val <= min && min - val <= mindiff) {
      mindiff = min - val;
      minVal = val;
    }
  });
  return minVal;
}

findDaysToComplete(b);
