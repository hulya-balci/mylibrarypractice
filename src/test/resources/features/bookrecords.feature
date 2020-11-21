Feature: See book records on user page

  Scenario:  default 10 records
    Given the user is on the login page
    When user login as "Student"
    And go to the books page
    Then the default record shows "10"

  @book
  Scenario: Show records for options
    Given the user is on the login page
    When user login as "Student"
    And go to the books page
    Then records options have following numbers

      | 5   |
      | 10  |
      | 15  |
      | 50  |
      | 100 |
      | 200 |
      | 500 |

