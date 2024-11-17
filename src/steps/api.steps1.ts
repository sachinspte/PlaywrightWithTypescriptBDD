import { Given } from '@cucumber/cucumber';
import axios from 'axios';

Given('I1 send a GET request to {string}', async function (url: string) {
  try {
    const response = await axios.get(url);
    this.response = response; // Assign the response to the context
  } catch (error) {
    throw new Error(`Failed to fetch data:`);
  }
});
