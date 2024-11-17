import { Then } from '@cucumber/cucumber';

Then('I should receive a {int} status code', function (statusCode: number) {
  if (!this.response) {
    throw new Error('Response is undefined. Ensure it is set in the previous step.');
  }
  if (this.response.status !== statusCode) {
    throw new Error(`Expected ${statusCode} but received ${this.response.status}`);
  }
});


Then('the response should contain:', function (dataTable: any) {
  const expected = dataTable.rowsHash(); // Convert table to an object
  const actual = this.response.data;
  
// Print the actual JSON response
console.log('Actual JSON Response:', JSON.stringify(actual, null, 2));

// Retrieve and print only the title field
const title = actual.title;
console.log('Title from the response:', title);

  Object.entries(expected).forEach(([key, value]) => {
    if (actual[key] != value) { // Loose equality to handle string vs number mismatches
      throw new Error(`Expected ${key} to be ${value} but got ${actual[key]}`);
    }
  });
});
===

import { Then } from '@cucumber/cucumber';

Then('I should receive a {int} status code', function (statusCode: number) {
  if (!this.response) {
    throw new Error('Response is undefined. Ensure it is set in the previous step.');
  }
  if (this.response.status !== statusCode) {
    throw new Error(`Expected ${statusCode} but received ${this.response.status}`);
  }
});


Then('the response should contain:', function (dataTable: any) {
  const expected = dataTable.rowsHash(); // Convert table to an object
  const actual = this.response.data;
  
// Print the actual JSON response
console.log('Actual JSON Response:', JSON.stringify(actual, null, 2));

// Retrieve and print only the title field
const title = actual.title;
console.log('Title from the response:', title);

  Object.entries(expected).forEach(([key, value]) => {
    if (actual[key] != value) { // Loose equality to handle string vs number mismatches
      throw new Error(`Expected ${key} to be ${value} but got ${actual[key]}`);
    }
  });
});
