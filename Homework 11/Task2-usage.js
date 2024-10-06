import {fetchDataTodo1, fetchUser1} from './Task2-functions.js';

//USAGE OF PROMISE ALL
const allPromises = Promise.all([fetchDataTodo1(), fetchUser1()]);

allPromises.then(([todo, user]) => {
  console.log('Found user:', user);
  console.log('Found todo:', todo);
}).catch(error => {
  console.log('Error happened in fetching ALL promises: ' + error.message);
});

// USAGE OF PROMISE RACE
const racePromises = Promise.race([fetchDataTodo1(), fetchUser1()]);

racePromises.then(result => {
  console.log('First result:', result);
}).catch(error => {
  console.log('Error happened in fetching Race promises: ' + error.message);
});