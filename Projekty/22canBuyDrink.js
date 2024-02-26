const Person = {
  age: 19,
  isDrunk: false,
};

const canBuyDrink = (person) => {
  if (person.age < 18 || person.isDrunk === true) {
    return false;
  } else {
    return true;
  }
};
const x = canBuyDrink(Person);
console.log(x);

// another

const age = 25;
const whatCanBuy = age >= 18 ? "alcohol" : "juice";
console.log(whatCanBuy);

// another

const BeziaBezia = {
  age: 17,
};
const whatCanIDrink = (somePerson) => {
  const drink = somePerson.age >= 18 ? "alcohol" : "juice";
  return `You can buy ${drink}`;
};
console.log(whatCanIDrink(BeziaBezia));
