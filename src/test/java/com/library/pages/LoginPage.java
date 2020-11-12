package com.library.pages;

import com.library.utilities.ConfigurationReader;
import com.library.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

     @FindBy(id = "inputEmail")
    public WebElement emailInput;

     @FindBy(id = "inputPassword")
    public WebElement passwordInput;

     @FindBy(xpath = "//button[@type='submit']")
    public WebElement signinBtn;

     @FindBy(xpath = "//div[@class='alert alert-danger']")
     public WebElement errorMsg;



     public void login(String email,String password){
         emailInput.sendKeys(email);
         passwordInput.sendKeys(password);
         signinBtn.click();
     }

     public void loginAsStudent(){

         String email = ConfigurationReader.get("student_username");
         String password = ConfigurationReader.get("student_password");

         emailInput.sendKeys(email);
         passwordInput.sendKeys(password);
         signinBtn.click();

     }

    public void loginAsLibrarian (){

        String email = ConfigurationReader.get("librarian_username");
        String password = ConfigurationReader.get("librarian_password");

        emailInput.sendKeys(email);
        passwordInput.sendKeys(password);
        signinBtn.click();

    }




}
