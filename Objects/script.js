let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation
person.name = 'Thiago';

// Bracket notation
let selection = 'age';
person[selection] = '20';

console.log(person.name);
console.log(person.age);