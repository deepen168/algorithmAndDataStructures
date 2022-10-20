// problem 1: solve maze that has start and end point but the walls take not space. What he meant was dont store wall explicitely.
// problem 2: task creator

// problem 3: convert following paths to tree structure
const keys = [
  "/dist/",
  "/dist/js/",
  "/index.html",
  "/image/screenshots/ios/ipad/temp/",
  "/dist/js/main.js",
  "/dist/css/main.css",
  "/image/hero_2x.png",
  "/image/screenshots/web/dashboard_2x.png",
];

/***** example output *****
  {
    index.html: null,
    dist: {
      js: {
        main.js: null
      },
      css: {
        main.css: null
      }
    },
    image: {
      hero_2x.png: null,
      screenshots: {
        web: {
          dashboard_2x.png: null
        },
        ios: {
          ipad: {
            temp: {}
          }
        }
      }
    }
  }
  ***************************/

const pathsArrToObj = (pathsArr) => {
  let pathArrOfArrs = pathsArr.map((str) =>
    str.split("/").filter((str) => str !== "")
  );
  // ["image","screenshots","web","dashboard_2x.png"]

  let finalPathObj = {};
  pathArrOfArrs.forEach((pathArr) => {
    pathMap(pathArr, finalPathObj);
  });
  console.log("Final", finalPathObj);
};

const pathMap = (pathArr, finalPathObj) => {
  let current = finalPathObj;

  for (let location of pathArr) {
    if (!current[location]) {
      if (location.includes(".")) {
        current[location] = null;
        return finalPathObj;
      }
      current[location] = {};
    }
    current = current[location];
  }

  return finalPathObj;
};


/** Print count every second with setTimeout */
function printEverySec() {
  let count = 0;

  while (count < 100) {
    callSetTimeout(count);
    count++;
  }
}

function callSetTimeout(num) {
  setTimeout(() => {
    console.log('Count: ', num);
  }, num * 1000)
}


/** Print count every second with setInterval */
function foo() {
  let num = 0;
  setInterval(() => {
    console.log('half second passed', num)
    num++;
  }, 2000)
}