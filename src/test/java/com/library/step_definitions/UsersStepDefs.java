package com.library.step_definitions;

import com.library.pages.UsersPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;
import java.util.Map;

public class UsersStepDefs {

    UsersPage usersPage=new UsersPage();

    @When("click {string}")
    public void click(String string) {

        usersPage.goToFeature(string);

    }

    @When("creates new user using following information")
    public void creates_new_user_using_following_information(List<Map<String,String>> userInfo) {





    }

    @Then("the message  {string} should be displayed")
    public void the_message_should_be_displayed(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("verify closing the adding")
    public void verify_closing_the_adding() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


    @When("do some valid changes")
    public void do_some_valid_changes(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new io.cucumber.java.PendingException();
    }

    @Then("verify editing")
    public void verify_editing() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("verify closing the editing")
    public void verify_closing_the_editing() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("click Close")
    public void click_Close() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }








}
