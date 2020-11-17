package com.library.step_definitions;

import com.library.pages.DashboardPage;
import com.library.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ModulesStepDefs {

    DashboardPage dashboardPage=new DashboardPage();

    @Then("librarian see following modules")
    public void librarian_see_following_modules(List<String> expectedModules) {

        BrowserUtils.waitFor(1);
       List<WebElement> modules=dashboardPage.ModulesName;
       List<String> actualModules=BrowserUtils.getElementsText(modules);

        Assert.assertEquals(expectedModules,actualModules);



    }

    @Then("students see following modules")
    public void students_see_following_modules(List<String> expectedModules) {

        BrowserUtils.waitFor(1);
        List<WebElement> modules=dashboardPage.ModulesName;
        List<String> actualModules=BrowserUtils.getElementsText(modules);

        Assert.assertEquals(expectedModules,actualModules);


    }








}
