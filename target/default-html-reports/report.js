$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/bookrecords.feature");
formatter.feature({
  "name": "See book records on user page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "default 10 records",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@book"
    }
  ]
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
  "name": "user login as \"Student\"",
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
formatter.step({
  "name": "the default record shows \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.BookRecordsStepDefs.the_default_record_shows(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});