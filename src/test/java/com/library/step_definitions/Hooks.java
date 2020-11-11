package com.library.step_definitions;

import com.library.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {

   @Before
   public void setUp(){
       System.out.println("This is coming from @Before");
   }

   @After
    public void tearDown(Scenario scenario){
       if(scenario.isFailed()){
           final byte[] screenshot=((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
           scenario.attach(screenshot,"image/png","screenshot");
           //for taking screenshot run with maven verify
       }
       Driver.closeDriver();

   }

    @Before("@database")
    public void setUpDB(){
        System.out.println("This is  connecting to database");
    }

    @After("@database")
    public void tearDownDB(){
        System.out.println("This is  disconnecting from database");
    }


}
