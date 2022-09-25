'use strict';

// 1. printIndices
function printIndices(items) {
  // """Print each item in the list, followed by its index."""

  for (const item in items) {
    console.log(items[item], item);
  }

}
// printIndices(['apple', 'berry', 'cherry'])




// 2. everyOtherItem
function everyOtherItem(items) {
  // """Print a list of every other item in `items`"""

  const result = []

  // for (let index = 0; index < items.length; index++) {
  //   console.log(items[index]);
  // }
  
  for (let index in items) {
    if (index %2 == 0) {
      result.push(items[index])     
    }
  }
  console.log(result);

}

// everyOtherItem(['apple', 'berry', 'cherry', 'banana', 'kiwi'])

// 3. smallestNItems
function smallestNItems(items, n) {
  // """Print a list of the `n` smallest integers in `items`""""

  let sorted_items = items.sort((a, b) => a - b);
  // console.log(sorted_items)
  let sorted_n_items = sorted_items.slice(0, n);
  console.log(sorted_n_items)  
}
smallestNItems([1, 30, 4, 21, 100000], 5)
