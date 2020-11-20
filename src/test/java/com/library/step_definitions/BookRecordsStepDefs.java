package com.library.step_definitions;

import com.library.pages.BooksPage;
import com.library.pages.DashboardPage;
import com.library.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class BookRecordsStepDefs {

    BooksPage booksPage = new BooksPage();

    @When("go to the books page")
    public void go_to_the_books_page() {
        BrowserUtils.waitFor(2);
        new DashboardPage().booksModule.click();

    }

    @Then("the default record shows {string}")
    public void the_default_record_shows(String string) {
        String firstSelectedOption = booksPage.bookrecord().getFirstSelectedOption().getText();
        System.out.println(firstSelectedOption);
        Assert.assertEquals(string, firstSelectedOption);
    }

    @Then("records options have {int} numbers")
    public void records_options_have_numbers(Integer int1) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
