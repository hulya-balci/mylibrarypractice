package com.library.pages;

import com.library.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutPage {

    public LogoutPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "#navbarDropdown>span")
    public WebElement dropdownMenu;

    @FindBy(css = ".dropdown-item")
    public WebElement logoutBtn;



}
