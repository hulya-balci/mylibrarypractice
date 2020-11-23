$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/users.feature");
formatter.feature({
  "name": "Creating user on  users page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@users"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user login as \"Librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigate to \"Users\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.TableStepDefs.navigate_to_module(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add users with valid info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@users"
    },
    {
      "name": "@EUG16-253"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "click \"Add User\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "creates new user using following information",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.creates_new_user_using_following_information(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the message  \"the user has been created\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.the_message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user login as \"Librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigate to \"Users\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.TableStepDefs.navigate_to_module(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Closing the adding user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@users"
    },
    {
      "name": "@EUG16-254"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "click \"Add User\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify closing the adding",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.verify_closing_the_adding()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Close",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user login as \"Librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigate to \"Users\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.TableStepDefs.navigate_to_module(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Edit user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@users"
    },
    {
      "name": "@EUG16-255"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "click \"Edit User\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "do some valid changes",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.do_some_valid_changes(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify editing",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.verify_editing()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user login as \"Librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigate to \"Users\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.TableStepDefs.navigate_to_module(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Closing the editing user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@users"
    },
    {
      "name": "@EUG16-256"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "click \"Edit User\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify closing the editing",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.UsersStepDefs.verify_closing_the_editing()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Close",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});