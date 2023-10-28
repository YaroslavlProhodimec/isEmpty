// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
//   Должно работать так:

let schedule = {};

const isEmptyOne = (obj) => {
  return !Object.keys(obj).length;
};
function isEmptyTwo(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmptyOne(schedule)); // true
console.log(isEmptyTwo(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmptyOne(schedule)); // false
console.log(isEmptyTwo(schedule)); // false
