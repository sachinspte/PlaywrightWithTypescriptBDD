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
}
