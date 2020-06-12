package com.adactin.stepdefinition;

import org.junit.Test;

import com.adactinhotel.pom.SignInPage;
import com.cucumber.baseclass.BaseClass;
import org.openqa.selenium.WebDriver;

import com.adactinhotel.pom.BookingItenerary;
import com.adactinhotel.pom.CancelHotel;
import com.adactin.runner.Runner;
import com.adactin.utilities.ConfigurationReader;
import com.adactinhotel.pom.BookingConfirmPage;
import com.adactinhotel.pom.BookingHotel;
import com.adactinhotel.pom.Logout;
import com.adactinhotel.pom.SearchHotel;
import com.adactinhotel.pom.SelectHotel;
import com.adactinhotel.pom.SignInPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {
	
	public static WebDriver driver= Runner.driver; 
	
	@Given("^the user is logged in$")
	public void the_user_is_logged_in() throws Throwable {
	    System.out.println("Logged in");
	}

	@Given("^goes to landing page$")
	public void goes_to_landing_page() throws Throwable {
	    System.out.println("Successfully landed in homepage");
	}

	
	@Given("^User launch  the adactin application$")
	public void user_launch_the_adactin_application() throws Throwable {
		ConfigurationReader con=new ConfigurationReader();
		getUrl(con.getUrl());
	    
	}

	@When("^User enter \"([^\"]*)\" the valid username$")
	public void user_enter_the_valid_username(String username) throws Throwable {
		SignInPage sp = new SignInPage(driver);
	    inputValuestoWebelement(sp.getUsername(), "PavithraN");
	   
	}

	@When("^User enter \"([^\"]*)\" the valid password$")
	public void user_enter_the_valid_password(String Password) throws Throwable {
		SignInPage sp = new SignInPage(driver);
	    inputValuestoWebelement(sp.getPassword(), "Pavi@2426");
	}


	@When("^User enter the login button$")
	public void user_enter_the_login_button() throws Throwable {
		SignInPage sp = new SignInPage(driver);
		clickonWebelement(sp.getLogin());
	    
	}

	@Then("^It lands to homepage sucessfully$")
	public void it_lands_to_homepage_sucessfully() throws Throwable {
		System.out.println("Homepage loaded");
	    
	}
	@When("^User enter the Location of the Hotel as \"([^\"]*)\"$")
	public void user_enter_the_Location_of_the_Hotel_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getLocation(), "value", "Sydney");
	}

	@When("^User enter the Hotel name as \"([^\"]*)\"$")
	public void user_enter_the_Hotel_name_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getHotels(), "value", "Hotel Creek");
	}

	@When("^User enter the Room Type as \"([^\"]*)\"$")
	public void user_enter_the_Room_Type_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getRoom(), "value", "Deluxe" );
	}

	@When("^User enter the number of rooms as \"([^\"]*)\"$")
	public void user_enter_the_number_of_rooms_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getRoomno(), "value", "2");
	}

	@When("^User enter the check in date as \"([^\"]*)\"$")
	public void user_enter_the_check_in_date_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		inputValuestoWebelement(sh.getCheckin(), "03/06/2020");
	}

	@When("^User enter the check out date as \"([^\"]*)\"$")
	public void user_enter_the_check_out_date_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		inputValuestoWebelement(sh.getCheckin(), "04/06/2020");
	}

	@When("^User enter the adults per room as \"([^\"]*)\"$")
	public void user_enter_the_adults_per_room_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getAdult(), "value" , "3");
	}

	@When("^User enters the  childs per room as \"([^\"]*)\"$")
	public void user_enters_the_childs_per_room_as(String arg1) throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getChild(), "value" ,"1");
	}


	@When("^User clicks the search button$")
	public void user_clicks_the_search_button() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		clickonWebelement(sh.getSubmit());

	}

	@Then("^The Hotel is searched sucessfully$")
	public void the_Hotel_is_searched_sucessfully() throws Throwable {
		System.out.println("Hotel is searched");
	    
	}
	@When("^User verifies and confirms the selected hotel$")
	public void user_verifies_and_confirms_the_selected_hotel() throws Throwable {
		SelectHotel s = new SelectHotel(driver);
		clickonWebelement(s.getRadiobtn());
	}
	
	@When("^User clicks the continue button$")
	public void user_clicks_the_continue_button() throws Throwable {
		SelectHotel s = new SelectHotel(driver);
		clickonWebelement(s.getContinuebtn());
	    
	}

	@Then("^The Hotel is selected successfully$")
	public void the_Hotel_is_selected_successfully() throws Throwable {
		System.out.println("Hotel is booked");
	    
	}
	@When("^User enter the first name as \"([^\"]*)\"$")
	public void user_enter_the_first_name_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValuestoWebelement(bh.getFname(), "Saravanakumar");
	}

	@When("^User enter the last name as \"([^\"]*)\"$")
	public void user_enter_the_last_name_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValuestoWebelement(bh.getLname(), "Manohar");
	}

	@When("^User enter the billing address as \"([^\"]*)\"$")
	public void user_enter_the_billing_address_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValuestoWebelement(bh.getAddress(), "No:29/79, Agathiyar nagar,Villivakkam, Chennai-49");
	}

	@When("^User enter the credit card number as \"([^\"]*)\"$")
	public void user_enter_the_credit_card_number_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValuestoWebelement(bh.getCcnum(), "6589-1238-5634-8945");
	}

	@When("^User enter the credit card type as \"([^\"]*)\"$")
	public void user_enter_the_credit_card_type_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		selectDropDownOption(bh.getCctype(), "value", "VISA");
	}

	@When("^User enter the expiry month of credit card as \"([^\"]*)\"$")
	public void user_enter_the_expiry_month_of_credit_card_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		selectDropDownOption(bh.getCcmonth(), "value", "8");
	}

	@When("^User enter the expiry year of credit card as \"([^\"]*)\"$")
	public void user_enter_the_expiry_year_of_credit_card_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		selectDropDownOption(bh.getCcyear(), "value", "2021");
	}

	@When("^User enter the CVV of the credit card as \"([^\"]*)\"$")
	public void user_enter_the_CVV_of_the_credit_card_as(String arg1) throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		inputValuestoWebelement(bh.getCccvv(), "842");
	}

	@When("^User clicks the booknow button$")
	public void user_clicks_the_booknow_button() throws Throwable {
		BookingHotel bh = new BookingHotel(driver);
		clickonWebelement(bh.getBook());

	}

	@Then("^It lands to the booking page successfully$")
	public void it_lands_to_the_booking_page_successfully() throws Throwable {
		System.out.println("Booking Page loaded");
	  
	}

	@When("^User selects the My Itinerary and confirms the booking$")
	public void user_selects_the_My_Itinerary_and_confirms_the_booking() throws Throwable {
		BookingConfirmPage bp= new BookingConfirmPage(driver);
		clickonWebelement(bp.getItinerary());
	    
	}

	@Then("^It lands to the booking confirm  page successfully$")
	public void it_lands_to_the_booking_confirm_page_successfully() throws Throwable {
		System.out.println("Booking confirmation");
	   
	}

	@When("^User searched the booked room$")
	public void user_searched_the_booked_room() throws Throwable {
		BookingItenerary bi= new BookingItenerary(driver);
		clickonWebelement(bi.getCheckbox1());
	
	}

	@When("^User confirms the Hotel which has to be Cancelled$")
	public void user_confirms_the_Hotel_which_has_to_be_Cancelled() throws Throwable {
		BookingItenerary bi= new BookingItenerary(driver);
		clickonWebelement(bi.getCheckbox1());
	     
	}

	@Then("^It lands to the booking itinerary page successfully$")
	public void it_lands_to_the_booking_itinerary_page_successfully() throws Throwable {
		CancelHotel ch= new CancelHotel(driver);
		confirmAlert(ch.getCancel(), "accept");
	}

	@When("^User selects the logout option$")
	public void user_selects_the_logout_option() throws Throwable {
		Logout lo=new Logout(driver);
	    clickonWebelement(lo.getLogout());
	    
	}
	
	@When("^User closes the Adactin application$")
	public void user_closes_the_Adactin_application() throws Throwable {
		browserClose("close");
	}

	@Then("^User has been loggged out sucessfully$")
	public void user_has_been_loggged_out_sucessfully() throws Throwable {
		System.out.println("Homepage logged out");
	    
	}

	
	
}

	
	