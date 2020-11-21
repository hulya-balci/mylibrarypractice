Feature: See book records on user page

  Background:
    Given the user is on the login page
    When user login as "Student"
    And go to the books page

  Scenario:  default 10 records
    Then the default record shows "10"


  @book
  Scenario: Show records for options
    Then records options have following numbers

      | 5   |
      | 10  |
      | 15  |
      | 50  |
      | 100 |
      | 200 |
      | 500 |

