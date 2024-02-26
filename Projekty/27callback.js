function callWithArgument(fn, arg1, arg2) {
  const result = fn(arg1, arg2);

  return result;
}

function add(x, y) {
  return x + y;
}

const rr = callWithArgument(add, 5, 10);
console.log(rr);
