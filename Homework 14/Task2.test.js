import axios from 'axios';
import objPayloadGenerator from "../Homework13/helper_finctions.js";

const axiosInstance = axios.create({
  baseURL: 'https://api.restful-api.dev',
  validateStatus: () => true,
});

const generatedObj = objPayloadGenerator();

const makeCustomPOSTRequest = async (customHeaders = {}, queryParams = {}) => {

  return await axiosInstance({
    headers: {
      'Content-Type': 'application/json',
      'Custom-Header': 'test-value',
      ...customHeaders
    },
    method: 'POST',
    url: '/objects',
    params: queryParams,
    data: {
      name: generatedObj.name,
      data: generatedObj.data
    }
  });
}

const makeCustomGETRequest = async (params = {}) => {

  return await axiosInstance({
    method: 'GET',
    url: '/objects',
    params: params,
  });
}


describe('Check that URL headers are sent correctly', () => {
  test('Check that custom headers are sent correctly', async () => {
    const customHeaders = {
      'X-Test-Header': 'test123',
      'API-Version': 'v1'
    };

    const response = await makeCustomPOSTRequest(customHeaders);

    expect(response.status).toBe(200);
    // Headers check
    expect(response.config.headers['X-Test-Header']).toBe('test123');
    expect(response.config.headers['API-Version']).toBe('v1');
    expect(response.config.headers['Content-Type']).toBe('application/json');
  })

  test('Check that URL parameters are sent correctly', async () => {
    const params = {
      'id': 1,
      'page': 0,
      'pageSize': 1
    }

    const response = await makeCustomGETRequest(params);

    // Params check
    expect(response.config.params['id']).toBe(1);
    expect(response.config.params['page']).toBe(0);
    expect(response.config.params['pageSize']).toBe(1);
  })

  })