package com.library.pages;

import com.library.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DashboardPage extends BasePage {

   @FindBy (xpath = "//h6[text()='Users']")
    public WebElement UsersModule;

    @FindBy (xpath = "//*[text()='Books']")
    public WebElement BooksModule;

    @FindBy (xpath = "//*[text()='Borrowed Books']")
    public WebElement BorrowedBooksModule;

    @FindBy (xpath = "//span[@class='title']")
    public List<WebElement> ModulesName;

    @FindBy (linkText = "Borrowing Books")
    public WebElement BorrowingBooksModule;


    @FindBy(xpath = "//table/thead/tr/th")
    public List<WebElement> Headers;






    public void goToModule(String moduleName){

        Driver.get().findElement(By.xpath("//*[text()='"+moduleName+"']")).click();
    }





}
