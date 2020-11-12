$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "As a user, I should be able to login to the library app",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EUG16-259"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "user enter \"\u003cemail\u003e\" and enter \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user logged in page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "student70@library",
        "FPEDLRY3"
      ]
    },
    {
      "cells": [
        "student91@library",
        "c4vlSAqZ"
      ]
    },
    {
      "cells": [
        "student92@library",
        "7kPVRH29"
      ]
    },
    {
      "cells": [
        "librarian18@library",
        "rKG2sP88"
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
formatter.scenario({
  "name": "verify login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-259"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "user enter \"student70@library\" and enter \"FPEDLRY3\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_enter_and_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_logged_in_page()"
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
formatter.scenario({
  "name": "verify login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-259"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "user enter \"student91@library\" and enter \"c4vlSAqZ\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_enter_and_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_logged_in_page()"
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
formatter.scenario({
  "name": "verify login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-259"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "user enter \"student92@library\" and enter \"7kPVRH29\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_enter_and_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_logged_in_page()"
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
formatter.scenario({
  "name": "verify login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-259"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "user enter \"librarian18@library\" and enter \"rKG2sP88\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_enter_and_enter(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.user_logged_in_page()"
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
formatter.scenario({
  "name": "verify role login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-257"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "user login as “Student”",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "title contains “page”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.title_contains(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Enter with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EUG16-264"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "Users login with invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error \"\u003cmessage\u003e\" displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "student91@library",
        "invalid",
        "Sorry, Wrong Email or Password"
      ]
    },
    {
      "cells": [
        "invalid",
        "c4vlSAqZ",
        "Please enter a valid email address."
      ]
    },
    {
      "cells": [
        "ABC",
        "",
        "Please enter a valid email address."
      ]
    },
    {
      "cells": [
        "",
        "c4vlSAqZ",
        "This field is required."
      ]
    },
    {
      "cells": [
        "student91@library",
        "",
        "Sorry, Wrong Email or Password"
      ]
    },
    {
      "cells": [
        "",
        "",
        "This field is required."
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
formatter.scenario({
  "name": "Enter with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-264"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "Users login with invalid \"student91@library\" and \"invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.users_login_with_invalid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error \"Sorry, Wrong Email or Password\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.error_displayed(java.lang.String)"
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
formatter.scenario({
  "name": "Enter with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-264"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "Users login with invalid \"invalid\" and \"c4vlSAqZ\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.users_login_with_invalid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error \"Please enter a valid email address.\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.error_displayed(java.lang.String)"
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
formatter.scenario({
  "name": "Enter with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@EUG16-264"
    },
    {
      "name": "@EUG16-224"
    }
  ]
});
formatter.step({
  "name": "Users login with invalid \"ABC\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.users_login_with_invalid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error \"Please enter a valid email address.\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.library.step_definitions.LoginStepDefs.error_displayed(java.lang.String)"
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
