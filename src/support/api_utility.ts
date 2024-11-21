import axios, { AxiosResponse } from 'axios';

interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers?: Record<string, string>; // Optional headers
  body?: Record<string, any>; // Optional body for POST/PUT requests
}

export async function performCRUDOperation(options: RequestOptions): Promise<AxiosResponse> {
  try {
    const { method, url, headers, body } = options;

    // Perform the request based on the method
    const response = await axios({
      method,
      url,
      headers,
      data: body, // Use body only for POST/PUT requests
    });

    console.log('Response Data:', JSON.stringify(response.data, null, 2)); // Debugging the response
    return response; // Return the AxiosResponse for further handling
  } catch (error: any) {
    console.error('Error during CRUD operation:', error.message);
    throw error; // Rethrow the error for the calling function to handle
  }
====

import axios, { AxiosResponse } from 'axios';

export async function performCRUDOperation(options: RequestOptions): Promise<AxiosResponse> {
  try {
    const { method, url, headers, body } = options;

    // Perform the request
    const response = await axios({
      method,
      url,
      headers,
      data: body,
      validateStatus: (status) => true, // Treat all responses as valid to handle non-2xx status codes
    });

    console.log('Response Data:', JSON.stringify(response.data, null, 2));
    return response; // Return the full response for further processing
  } catch (error: any) {
    // Log detailed error information
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Status Code:', error.response.status);
      console.error('Headers:', error.response.headers);
      throw error.response; // Optionally, throw the error response object
    } else if (error.request) {
      console.error('No Response Received:', error.request);
      throw new Error('Network Error: No response received');
    } else {
      console.error('Unexpected Error:', error.message);
      throw new Error(`Unexpected Error: ${error.message}`);
    }
  }
}
