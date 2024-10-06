const users = [
  {
    name: 'John',
    surname: 'Doe',
    email: 'john@example.com',
    age: 22
  },

  {
    name: 'Alex',
    surname: 'Smith',
    email: 'alex1@example.com',
    age: 24
  },

  {
    name: 'Bruce',
    surname: 'Wayne',
    email: 'bruce@example.com',
    age: 35
  }
];

for (const {name, surname, email, age} of users) {
  console.log(`First name: ${name}, Last name: ${surname}, Email: ${email}, Age: ${age}`);
}