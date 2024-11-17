Feature: API Testing with Playwright and Cucumber
   @api
   Scenario: Fetch user details
    Given I1 send a GET request to "https://jsonplaceholder.typicode.com/posts/2"
    Then I should receive a 200 status code