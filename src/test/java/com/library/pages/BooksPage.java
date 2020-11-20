package com.library.pages;

import com.library.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class BooksPage {
    public BooksPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(name="tbl_books_length")
    public WebElement bookRecords;

    public Select bookrecord(){
        return new Select(bookRecords);
    }
}
