var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
<<<<<<< HEAD
function accessElementInArray (array, index) {
  return (array[index])
}
function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array, element) {
  array.pop(element)
  return array
}
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}
=======
function accessElementInArray(array, element)
console.log(array[n])
>>>>>>> 8390a11502f8873ac62b6b10300c3c2784028da8
