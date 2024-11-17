import { Given, Then } from '@cucumber/cucumber';
import { request, expect } from '@playwright/test';

let response : any;

Given('I send a GET request to {string}', async (endpoint: string) => {
  const apiRequestContext = await request.newContext();
  response = await apiRequestContext.get(endpoint);
});

Then('I should receive a {int} status code', async (statusCode: number) => {
  expect(response.status()).toBe(statusCode);
});

import { Given, Then } from '@cucumber/cucumber';
import { request, expect } from '@playwright/test';
import axios from 'axios';
import { performCRUDOperation } from '../support/api_utility'; // Path to the utility function

let response : any;

Given('I send a GET request to {string}', async function (url: string) {
  // try {
  //   const response = await axios.get(url);
  //   this.response = response; // Assign the response to the context
  // } catch (error) {
  //   throw new Error(`Failed to fetch data:`);
  // }
  const readResponse = await performCRUDOperation({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
  });
  this.response = readResponse; // Assign the response to the context
  console.log('Read Response:', readResponse.data);
});

