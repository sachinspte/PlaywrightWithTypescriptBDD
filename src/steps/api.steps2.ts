import { Given } from '@cucumber/cucumber';
import axios from 'axios';
import { performCRUDOperation } from '../support/api_utility'; // Path to the utility function

Given('I send a POST request to {string} with:', async function (url: string, dataTable: any) {
  // const payload = dataTable.rowsHash(); // Convert table to an object
  // const response = await axios.post(url, payload);
  // this.response = response; // Store response in context
  // Create (POST)
  const createResponse = await performCRUDOperation({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: { 'Content-Type': 'application/json' },
    body: { title: 'foo', body: 'bar', userId: 1 },
  });
  this.response = createResponse; // Store response in context
  console.log('Create Response:', createResponse.data);

});

// Given('I send a GET request to {string}', async function (url: string) {
//   const response = await axios.get(url);
//   this.response = response; // Store response in context
// });

Given('I send a PUT request to {string} with:', async function (url: string, dataTable: any) {
  // const payload = dataTable.rowsHash(); // Convert table to an object
  // const response = await axios.put(url, payload);
  // this.response = response; // Store response in context
  // Update (PUT)
  const updateResponse = await performCRUDOperation({
    method: 'PUT',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    headers: { 'Content-Type': 'application/json' },
    body: { title: 'updated title', body: 'updated body', userId: 1 },
  });
  this.response = updateResponse; // Store response in context
  console.log('Update Response:', updateResponse.data);
});

Given('I send a DELETE request to {string}', async function (url: string) {
  // const response = await axios.delete(url);
  // this.response = response; // Store response in context
  // Delete (DELETE)
  const deleteResponse = await performCRUDOperation({
    method: 'DELETE',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
  });
  this.response = deleteResponse; // Store response in context
  console.log('Delete Response:', deleteResponse.status); // Typically no body in DELETE response

});      