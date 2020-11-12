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

    LoginPage loginPage=new LoginPage();
    DashboardPage dashboardPage=new DashboardPage();



    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);

    }

    @When("user enter {string} and enter {string}")
    public void user_enter_and_enter(String email, String password) {

        loginPage.login(email,password );



    }
    @Then("user logged in page")
    public void user_logged_in_page() {

        String actualTitle=Driver.get().getTitle();
        String expectedTitle="Library";

       Assert.assertTrue(actualTitle.contains(expectedTitle));
        System.out.println("actualTitle = " + actualTitle);


    }


    @When("user login as {string}")
    public boolean user_login_as(String usertype) {

        if(usertype.equals("Student")){
            loginPage.loginAsStudent();

        }else if(usertype.equals("Librarian")){
            loginPage.loginAsLibrarian();
        }else{

        }
return false;
    }

    @Then("title contains {string}")
    public void title_contains(String page) {
        if(user_login_as("Student")){
            Assert.assertTrue(dashboardPage.getPageSubTitle().contains("books"));
        } else if(user_login_as("Librarian")){
            Assert.assertTrue(dashboardPage.getPageSubTitle().contains("Dashboard"));
        }
    }

    @When("Users login with invalid {string} and {string}")
    public void users_login_with_invalid_and(String email, String password) {
        loginPage.login(email,password);
        BrowserUtils.waitFor(3);



    }

    @Then("Error {string} displayed")
    public void error_displayed(String expectedMsg) {

        String actualMsg=loginPage.errorMsg.getText();
        Assert.assertEquals(expectedMsg,actualMsg);
        System.out.println("actualMsg = " + actualMsg);
        System.out.println("expectedMsg = " + expectedMsg);

    }



}
