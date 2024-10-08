import axios from 'axios';
import objPayloadGenerator from "./helper_finctions.js";


// PREPARATIONS

const axiosInstance = axios.create({
  baseURL: 'https://api.restful-api.dev',
  validateStatus: () => true,
});

// Generated payload for POST tests
const generatedObj = objPayloadGenerator();


const objectsPositiveCasesGET = [
  ['Should check that the full list of objects can be fetched', '', 200],
  ['Should check that the specific objects can be fetched', '/5', 200, ]
];

// These will fail because of the typo in the error message ("Oject...")
const objectsNegativeCasesGET = [
  ['Should check that the EP handle non existing id', '982ww34623234234nnwd74833', 404],
  ['Should check that the EP handle incorrect types of data passed to id', 'string', 404],
  ['Should check that the EP handle id 0', '0', 404]
];

const objectsPositiveCasesPOST = [
  ['Should check that the EP creates object with valid data', generatedObj, 200],
  ['Should check that the EP creates object with name only', {name: generatedObj.name}, 200]
];

// Rules like "empty name", invalid data types and 50 chars limit are taken from my head, In normal project this validations should exist
// These will fail because now EP allows creating the empty object + objects with empty invalid data types
const objectsNegativeCasesPOST = [
  ['Should check that the EP handles request without payload', null, 415],
  ['Should check that the EP handles empty name', {name: ''}, 404],
  ['Should check that the EP handles invalid data type in name', {name: false}, 404],
  ['Should check that the name field validation (50 chars)', {name: 'Name over 50 chars ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef'}, 404]
];

// Here is stored IDs of all created objects in the POST tests
let createdObjects =[];


// TESTS
describe('Objects API Tests', () => {

  afterAll(async () => {
    // CLEANUP OF CREATED ENTITIES
    try {
      while (createdObjects.length > 0) {
        const id = createdObjects.pop();
        const response = await axiosInstance.delete(`/objects/${id}`);
        expect(response.status).toBe(200);
      }
    }
    catch (error) {
      console.log('Error happened in cleanup: ' + error.message);
    }
  });

  objectsPositiveCasesGET.forEach(async ([caseName, id, status ]) => {
    try {
      test(`${caseName}`, async () => {
        const response = await axiosInstance.get(`/objects${id}`);
        if (!id) {
          expect(response.status).toBe(status);
          expect(response.data[0]).toHaveProperty('id');
          expect(response.data[0]).toHaveProperty('name');
          expect(response.data[0]).toHaveProperty('data');
        } else {
          expect(response.status).toBe(status);
          expect(response.data).toHaveProperty('id');
          expect(response.data).toHaveProperty('name');
          expect(response.data).toHaveProperty('data');
        }
      });}
    catch (error) {
      throw new Error('Error happened in checking positive cases GET: ' + error.message);
    }
  });

  objectsNegativeCasesGET.forEach(async ([caseName, id, status ]) => {
    try {
      test(`${caseName}`, async () => {
        const response = await axiosInstance.get(`/objects/${id}`);
        expect(response.status).toBe(status);
        expect(response.data.error).toBe(`Object with id=${id} was not found.`);
      });}
    catch (error) {
      throw new Error('Error happened in checking negative cases GET: ' + error.message);
    }
  });

  objectsPositiveCasesPOST.forEach(async ([caseName, payload, status ]) => {
    try {
      test(`${caseName}`, async () => {
        const response = await axiosInstance.post('/objects', payload);
        expect(response.status).toBe(status);
        createdObjects.push(response.data.id);
      });
    }
    catch (error) {
      throw new Error('Error happened in checking positive cases POST: ' + error.message);
    }

  });


  objectsNegativeCasesPOST.forEach(async ([caseName, payload, status ]) => {
    try {
      test(`${caseName}`, async () => {
        const response = await axiosInstance.post('/objects', payload);
        expect(response.status).toBe(status);
      });
    }
    catch (error) {
      throw new Error('Error happened in checking negative cases POST: ' + error.message);
    }
  });


});






