async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
}

f();


async function f() {
    await Promise.reject(new Error("Whoops!"));
}

async function f() {
    throw new Error("Whoops!");
}

function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of it) {
    console.log(itItem);
}


Const arr = [0,1,2,3,4,5,6]
arr.slice(2); // [2,3,4,5] Does not modify original array
arr.slice(1,4) // [1,2,3] Does not modify original array
arr.slice(-2) // [5,6] Does not modify original array
arr.slice(2, -1) // [2,3,4,5] Does not modify original array

arr.splice(2) // [2,3,4,5] Modifies the original array
arr.splice(start, deleteCount, item1, item2, item3, ...) // [2,3,4,5] Modifies the original array

const arr = [1,2];
const [a, b] = arr; // a = 1, b = 2

const obj = {a:1, b:2};
const {a1, b1} ] = obj; // a1 = 1, b1 = 2


ARRAY:
Const arr = [0,1,2,3,4,5,6]
arr.indexOf(1) // 1
arr.forEach(() =>)