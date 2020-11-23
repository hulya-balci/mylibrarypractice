
@users
Feature: Creating user on  users page

  Background:
    Given the user is on the login page
    When user login as "Librarian"
    And navigate to "Users" module

  @EUG16-253 @EUG16-224
  Scenario: Add users with valid info
    And click "Add User"
    And creates new user using following information
      | Full Name  | Mike Smith                       |
      | Email      | mikesmith335@email.com           |
      | Password   | 123456                           |
      | User Group | Students                         |
      | Status     | ACTIVE                           |
      | Start Date | 11-04-2020                       |
      | End Date   | 11-04-2030                       |
      | Address    | 100 Same st, Anytown, USA, 10001 |
    Then the message  "the user has been created" should be displayed

  @EUG16-254 @EUG16-224
  Scenario: Closing the adding user
    And click "Add User"
    Then verify closing the adding
    And click Close

  @EUG16-255 @EUG16-224
  Scenario: Edit user info
    And click "Edit User"
    And do some valid changes
      | Full Name | Smith Mike          |
      | Email     | smithmike@email.com |
    Then verify editing

  @EUG16-256 @EUG16-224
  Scenario: Closing the editing user
    And click "Edit User"
    And verify closing the editing
    Then click Close