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

