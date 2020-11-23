$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchbook.feature");
formatter.feature({
  "name": "As a user ,I should able to search book",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@search"
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
  "name": "user login as \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to the books page",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.BookRecordsStepDefs.go_to_the_books_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "searching book with different categories",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "categories list should have following names:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "searching a specific book by column names",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "verify the search with following \"\u003ccolumnInfo\u003e\" information",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "columnInfo"
      ]
    },
    {
      "cells": [
        "The Idiot"
      ]
    },
    {
      "cells": [
        "Fyodor Dostoevsky"
      ]
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
  "name": "user login as \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to the books page",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.BookRecordsStepDefs.go_to_the_books_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "searching a specific book by column names",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "verify the search with following \"The Idiot\" information",
  "keyword": "Then "
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
  "name": "user login as \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to the books page",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.BookRecordsStepDefs.go_to_the_books_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "searching a specific book by column names",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "verify the search with following \"Fyodor Dostoevsky\" information",
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