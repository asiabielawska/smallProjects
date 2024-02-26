// function toUnderscore(string) {
//   let tab = string.toString().split("");
//   let addingFloor = tab.map((element, index) => {
//     if (
//       element === element.toUpperCase() &&
//       index !== 0 &&
//       !"0123456789".includes(element)
//     ) {
//       return "_" + element;
//     } else {
//       return element;
//     }
//   });
//   let lowerElements = addingFloor.join("").toLowerCase();
//   return lowerElements;
// }

// toUnderscore("HelloWord");

function toUnderscore(string) {
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
}

toUnderscore("HelloWord");
