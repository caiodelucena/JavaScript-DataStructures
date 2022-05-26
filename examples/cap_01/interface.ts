interface Person {
  name: string;
  age: number;
}

function printName(person: Person){
  console.log(person.name)
}

const john = { name: 'John', age: 21 };
// const mary = { name: 'Mary', age: 23, phone: '84991110065' };
printName(john);
// printName(mary);