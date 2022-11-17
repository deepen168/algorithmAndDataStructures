// Image -> Labeller -> Reviewer
// Image -> Labeller -> (Introduce a mistake) -> Reviewer -> (did they find the mistake?)

const sample_menu = {
  node_type: "menu",
  name: "root",
  children: [
    {
      node_type: "category",
      name: "Breakfast",
      children: [
        {
          node_type: "category_item",
          name: "Eggs Benedict",
          price: 8.75,
          children: [
            {
              node_type: "item_extra",
              name: "Add-Ons",
              children: [
                {
                  node_type: "extra_option",
                  name: "Add Bacon",
                  price: 1,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const sample_menu2 = {
  node_type: "menu",
  name: "root",
  children: [
    {
      node_type: "category",
      name: "Breakfast",
      children: [
        {
          node_type: "category_item",
          name: "Eggs Benedict",
          price: 8.75,
          children: [
            {
              node_type: "item_extra",
              name: "Add-Ons",
              children: [
                {
                  node_type: "extra_option",
                  name: "Add Bacon",
                  price: 1,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      node_type: "category",
      name: "Lunch",
      children: [
        {
          node_type: "category_item",
          name: "Caesar Salad",
          price: 5.75,
          children: [],
        },
        {
          node_type: "category_item",
          name: "Pastrami Sandwich",
          price: 6.5,
          children: [
            {
              node_type: "item_extra",
              name: "Bread Choice",
              children: [
                {
                  node_type: "extra_option",
                  name: "Rye",
                  price: 2,
                  children: [],
                },
                {
                  node_type: "extra_option",
                  name: "Wheat",
                  price: 3,
                  children: [],
                },
              ],
            },
            {
              node_type: "item_extra",
              name: "Add-Ons",
              children: [
                {
                  node_type: "extra_option",
                  name: "Add Bacon",
                  price: 1,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Write a function corrupt_menu(menu) -> menu with node deleted

// const _ = require('lodash');

const shallowCompare = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every((key) => obj1[key] === obj2[key]);

// function removeNode(menu) {
//   const flat = bfs(menu);
//   // console.log('flat', flat);
//   let randomIndex = Math.floor(Math.random() * flat.length - 1); //10
//   // console.log('randomIndex', randomIndex);
//   let randomNode = flat[randomIndex];

//   function iterateNode(menu) {
//     while (menu['children'].length > 1) {
//       for (let child of menu['children']) {
//         console.log('Main child', child);
//         console.log('random', randomNode);
//         if (shallowCompare(child, randomNode)) {
//           child = null;
//         }
//         console.log('child', child['children']);
//         if(child['children'].length > 1){
//           iterateNode(child);
//         }
//       }
//     }
//   }
//   iterateNode(menu);

//   return JSON.stringify(menu);
// }

// // function removeChildFromParent(child, parent) {
// //   // parent = { children: [ a, b, ... child ... x, y, z ] |

// //   parent['children'].filter((children) => {
// //     if(!_.isEqual(child, children)) {
// //       return children;
// //     }
// //   })
// // }

// let bfs = (menu) => {
//   let flat = [];
//   let queue = [menu];
//   while ( queue.length && queue[0]) {
//       // console.log('queue', queue);
//      const top = queue.pop();
//     //  console.log('top', top);
//      if( top['node_type'] !== 'category' && top['node_type'] !== 'root'){
//        flat.push(top);
//      }
//      for ( const child of top.children) {
//       queue.push(child);
//      }
//   }
//   return flat;
// }

// console.log(removeNode(sample_menu2))

const bfTraverse = (tree, fn) => {
  let queue = [tree];

  while (queue.length) {
    const top = queue.shift();
    fn(top);
    queue.push(...top["children"]);
  }
};

const flatArr = [];

const flatTreeWithoutRootAndCat = (tree) => {
  bfTraverse(tree, (node) => {
    if (node["node_type"] !== "menu" && node["node_type"] !== "category") {
      flatArr.push(node);
    }
  });
};

const getRandomNode = (flat) => {
  const randomInt = Math.floor(Math.random() * (flat.length - 1));
  return flat[randomInt];
};

// const shallowCompare = (obj1, obj2) => {
//   if( Object.keys(obj1).length != Object.keys(obj2).length ) {
//     return false;
//   }

//   for(const key of Object.keys(obj1)) {
//     if(obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

flatTreeWithoutRootAndCat(sample_menu);
const randomNode = getRandomNode(flatArr);

const _ = require("lodash");

const removeElemFromArray = (arr, randomNode) => {
  let swit = false;

  arr = arr.map((elem) => {
    if (_.isEqual(elem, randomNode)) {
      swit = true;
      return null;
    }
    return elem;
  });

  return { foo: arr, changed: swit };
};

const removeNode = (tree, randomNode) => {
  let current = tree["children"];
  let swit = false;

  while (current.length) {
    let { foo, foo2 } = removeElemFromArray(current, randomNode);
    current = foo;
    swit = foo2;

    if (swit) {
      return true;
    }

    removeNode(current["children"], randomNode);
  }

  // console.log('children', top['children']);
  // console.log(top['children'].indexof(randomNode));

  return tree;
};

console.log("flatArr", flatArr);
console.log("randomNode", getRandomNode(flatArr));
console.log("removeNode", JSON.stringify(removeNode(sample_menu, randomNode)));
