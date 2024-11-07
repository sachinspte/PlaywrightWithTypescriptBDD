Feature: API Testing with Playwright and Cucumber
   @api
   Scenario: Fetch user details
    Given I send a GET request to "https://jsonplaceholder.typicode.com/posts/1"
    Then I should receive a 200 status code
    
  @regression @api
  Scenario: Fetch user details1
    Given I send a GET request to "https://jsonplaceholder.typicode.com/posts/1"
    Then I should receive a 200 status code
