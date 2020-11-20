Feature: See book records on user page


  Scenario:  default 10 records
    Given the user is on the login page
    When user login as "usertype"
    And go to the books page
    Then the default record shows 10
  @wip
  Scenario Outline: Show records for <count> options
    Given the user is on the login page
    When user login as "usertype"
    And go to the books page
    Then records options have <count> numbers
    Examples:
      | count |
      | 5     |
      | 10    |
      | 15    |
      | 50    |
      | 100   |
