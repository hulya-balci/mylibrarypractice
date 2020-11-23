package com.library.pages;

import com.library.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class UsersPage {

    @FindBy(xpath = "//*[text()=' Add User']")
    public WebElement AddUserBtn;

    @FindBy(xpath = "//*[text()=' Edit User']")
    public WebElement EditUserBtn;

    @FindBy(xpath = "//*[text()='Close']")
    public WebElement CloseBtn;

    @FindBy(name = "full_name")
    public WebElement fullNameInput;

    @FindBy(name = "password")
    public WebElement passwordInput;

    @FindBy(name = "email")
    public WebElement emailInput;

    @FindBy(name = "user_group_id")
    public List<WebElement> userGroupDropdown;

    @FindBy(name = "status")
    public List<WebElement> statusDropdown;









    public void goToFeature(String featureName) {

        Driver.get().findElement(By.xpath("//*[text()=' "+featureName+"']")).click();

    }







}
