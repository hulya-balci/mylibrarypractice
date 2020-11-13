$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/logout.feature");
formatter.feature({
  "name": "As a user, I should be able to logout from the library app",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@logout"
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
formatter.scenario({
  "name": "Verify logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    },
    {
      "name": "@EUG16-261"
    },
    {
      "name": "@EUG16-224"
    }
  ]
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
  "name": "user logged out",
  "keyword": "And "
});
formatter.match({
  "location": "com.library.step_definitions.LogoutStepDefs.user_logged_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LogoutStepDefs.verify_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});