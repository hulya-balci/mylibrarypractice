package com.library.step_definitions;

import com.library.pages.BooksPage;
import com.library.pages.DashboardPage;
import com.library.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

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

    @Then("records options have following numbers")
    public void records_options_have_following_numbers(List<String> recordOptions) {
        BrowserUtils.waitFor(2);
        List<WebElement> options = booksPage.bookrecord().getOptions();
        List<String> actualRecordOptions = BrowserUtils.getElementsText(options);
        Assert.assertEquals(recordOptions,actualRecordOptions);

    }


}
