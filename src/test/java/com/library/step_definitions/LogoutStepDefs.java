package com.library.step_definitions;

import com.library.pages.LogoutPage;
import com.library.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LogoutStepDefs {

    LogoutPage logoutPage= new LogoutPage();
    @When("user logged out")
    public void user_logged_out() {
     logoutPage.dropdownMenu.click();
     logoutPage.logoutBtn.click();

    }

    @Then("verify user is on the login page")
    public void verify_user_is_on_the_login_page() {
        String actualTitle = Driver.get().getTitle();
        Assert.assertTrue(actualTitle.contains("Login"));
        System.out.println(actualTitle);
    }

}
