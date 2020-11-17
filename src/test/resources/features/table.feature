

Feature: User should be able to see table with default titles

  Background:
    Given the user is on the login page

  @EUG16-252 @EUG16-224
  Scenario:Table columns names on books page
    When user login as "Librarian"
    And navigate to "Books" module
    Then verifies books table titles as
      | Actions     |
      | ISBN        |
      | Name        |
      | Author      |
      | Category    |
      | Year        |
      | Borrowed By |

  @table
  Scenario: borrowing book tables name verification
    Given the user is on the login page
    When user login as "Student"
    And navigate to "Borrowing Books" module
    Then verifies borrowed books table titles as
      | Actions             |
      | Book Name           |
      | Borrowed Date       |
      | Planned Return Date |
      | Return Date         |
      | Is Returned ?       |