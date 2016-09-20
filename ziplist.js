/**
 * Experience E27
 * Created by kenchen on 9/19/16.
 */

const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i += 1) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(test1, test2));

function underzipList(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(underzipList(test1, test2));
