const car1 = {
  brand: 'BMW',
  model: 'M4',
  year: 2022
};

const car2 = {
  brand: 'VW',
  model: 'Golf',
  owner: 'Ihor Holubtsov'
};

const car3 = {...car1, ...car2};

console.log(car3);

