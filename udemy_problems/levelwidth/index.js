// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let memoryArray = [root, "s"];
  let levels = [0];

  while (memoryArray.length > 1) {
    let removeElement = memoryArray.shift();

    if (removeElement === "s") {
      levels.push(0);
      memoryArray.push("s");
    } else {
      levels[levels.length - 1]++;
      memoryArray.push(...removeElement.children);
    }
  }
  return levels;
}

module.exports = levelWidth;
