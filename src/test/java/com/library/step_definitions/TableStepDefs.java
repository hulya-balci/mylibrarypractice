package com.library.step_definitions;

import com.library.pages.DashboardPage;
import com.library.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class TableStepDefs {
    DashboardPage dashboardPage=new DashboardPage();


    @When("navigate to {string} module")
    public void navigate_to_module(String moduleName) {
        BrowserUtils.waitFor(2);
       dashboardPage.goToModule(moduleName);
       // dashboardPage.BorrowingBooksModule.click();
    }

    @Then("verifies books table titles as")
    public void verifies_books_table_titles_as(List<String> expectedHeaders) {
       List<WebElement> headers=dashboardPage.Headers;
       List<String> actualHeaders= BrowserUtils.getElementsText(headers);
        Assert.assertEquals(expectedHeaders,actualHeaders);

    }


    @Then("verifies borrowed books table titles as")
    public void verifies_borrowed_books_table_titles_as(List<String> expectedHeaders) {
        BrowserUtils.waitFor(3);
        List<WebElement> headers=dashboardPage.Headers;
        List<String> actualHeaders= BrowserUtils.getElementsText(headers);
        Assert.assertEquals(expectedHeaders,actualHeaders);
    }






}
