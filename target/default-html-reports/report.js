$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchbook.feature");
formatter.feature({
  "name": "As a user ,I should able to search book",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
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
        "War and Peace"
      ]
    },
    {
      "cells": [
        "Leo Tolstoy"
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
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"Librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to the books page",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.BookRecordsStepDefs.go_to_the_books_page()"
});
formatter.result({
  "status": "passed"
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
  "name": "verify the search with following \"War and Peace\" information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.SearchBookStepDefs.verify_the_search_with_following_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"Librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to the books page",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.BookRecordsStepDefs.go_to_the_books_page()"
});
formatter.result({
  "status": "passed"
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
  "name": "verify the search with following \"Leo Tolstoy\" information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.SearchBookStepDefs.verify_the_search_with_following_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});