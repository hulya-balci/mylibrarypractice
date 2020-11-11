package com.library.step_definitions;

import com.library.pages.BasePage;
import com.library.pages.DashboardPage;
import com.library.pages.LoginPage;
import com.library.utilities.BrowserUtils;
import com.library.utilities.ConfigurationReader;
import com.library.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.concurrent.TimeUnit;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();
    DashboardPage dashboardPage = new DashboardPage();


    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);

    }

    @When("user enter {string} and enter {string}")
    public void user_enter_and_enter(String email, String password) {

        loginPage.login(email, password);


    }

    @Then("user logged in page")
    public void user_logged_in_page() {
        BrowserUtils.waitFor(2);
        String title = Driver.get().getTitle();
       // String actualSubtitle = dashboardPage.getPageSubTitle();
        Assert.assertEquals("Library", title);
        //System.out.println("actualSubtitle = " + actualSubtitle);

    }


    @When("user login as “usertype”")
    public void user_login_as_usertype() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("title contains “page”")
    public void title_contains_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("Users login with invalid {string} and {string}")
    public void users_login_with_invalid_and(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Error message {string} display")
    public void error_message_display(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
