@module
Feature:As a user, I should be able to see several modules once login.



  @EUG16-263 @EUG16-224
  Scenario: Library App See several modules once login
    Given the user is on the login page
    When user login as "Librarian"
    Then librarian see following modules
      | Dashboard |
      | Users     |
      | Books     |


  @EUG16-228 @EUG16-224
  Scenario: Library App See several modules once login
    Given the user is on the login page
    When user login as "Student"
    Then students see following modules
      | Books           |
      | Borrowing Books |


