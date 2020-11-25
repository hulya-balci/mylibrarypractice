package com.library.pages;

import com.library.utilities.Driver;
import io.cucumber.java.eo.Se;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class BooksPage extends BasePage {

    @FindBy(name="tbl_books_length")
    public WebElement bookRecords;

    @FindBy(id="book_categories")
    public WebElement bookCategories;

    @FindBy(xpath = "//input[@type='search']")
    public WebElement searchBook;

    @FindBy(xpath = "//table/tbody/tr/td[4]")
    public WebElement author;

    @FindBy(xpath = "//table/tbody/tr/td[3]")
    public WebElement book;

    public Select bookcategories(){ return new Select(bookCategories);
    }

    public Select bookrecord(){
        return new Select(bookRecords);
    }
}
