package com.library.step_definitions;

import com.library.pages.BooksPage;
import com.library.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class SearchBookStepDefs {

    BooksPage booksPage= new BooksPage();
    @Then("categories list should have following names:")
    public void categories_list_should_have_following_names(List<String> exoectedcategories) {
        List<WebElement> bookCategories = booksPage.bookcategories().getOptions();
        List<String> actualcategory = BrowserUtils.getElementsText(bookCategories);

        Assert.assertEquals(exoectedcategories,actualcategory);

    }

    @Then("verify the search with following {string} information")
    public void verify_the_search_with_following_information(String book) {
        booksPage.searchBook.sendKeys(book);
        BrowserUtils.waitFor(2);

        if(book.equals("War and Peace")){
            Assert.assertEquals("War and Peace",booksPage.book.getText());
        }else if(book.equals("Leo Tolstoy")){
            Assert.assertEquals("Leo Tolstoy",booksPage.author.getText());
        }else{

        }


    }

}
