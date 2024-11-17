Feature: CRUD operations for a resource

  @apicrud
  Scenario: Create a new resource
    Given I send a POST request to "https://jsonplaceholder.typicode.com/posts" with:
      | title       | foo  |
      | body        | bar  |
      | userId      | 1    |
    Then I should receive a 201 status code
    And the response should contain:
      | title       | foo  |
      | body        | bar  |
      | userId      | 1    |

  @apicrud
  Scenario: Read an existing resource
    Given I send a GET request to "https://jsonplaceholder.typicode.com/posts/1"
    Then I should receive a 200 status code
    And the response should contain:
      | id          | 1    |
  
  @apicrud
  Scenario: Update an existing resource
    Given I send a PUT request to "https://jsonplaceholder.typicode.com/posts/1" with:
      | title       | updated title |
      | body        | updated body  |
      | userId      | 1             |
    Then I should receive a 200 status code
    And the response should contain:
      | title       | updated title |
      | body        | updated body  |
      | userId      | 1             |

  @apicrud 
  Scenario: Delete an existing resource
    Given I send a DELETE request to "https://jsonplaceholder.typicode.com/posts/1"
    Then I should receive a 200 status code
