package com.adactin.runner;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.server.handler.SendKeys;

import com.adactinhotel.pom.SearchHotel;
import com.adactinhotel.pom.SelectHotel;
import com.adactinhotel.pom.SignInPage;
import com.cucumber.baseclass.BaseClass;

public class TestScript extends BaseClass {
	@Test
	public void testAdactin() throws Exception {
		
		driver = browserLaunch("chrome");
		getUrl("http://adactinhotelapp.com/");
		
		SignInPage sp =new SignInPage(driver);
		inputValuestoWebelement(sp.getUsername(), "PavithraN");
		inputValuestoWebelement(sp.getPassword(), "Pavi@2426");
		doubleClickMeth(sp.getLogin());
		
		SearchHotel sh = new SearchHotel(driver);
	    selectDropDownOption(sh.getLocation(), "value", "Sydney");
	    selectDropDownOption(sh.getHotels(), "value", "Hotel Creek");
	    selectDropDownOption(sh.getRoom(), "value", "Standard");
	    selectDropDownOption(sh.getRoomno(), "value", "1");
	    inputValuestoWebelement(sh.getCheckin(), "21/05/2020");
	    inputValuestoWebelement(sh.getCheckout(), "22/05/2020");
	    selectDropDownOption(sh.getAdult(), "value", "2");
	    selectDropDownOption(sh.getChild(), "value", "0");
	    clickonWebelement(sh.getSubmit());
	    
	    SelectHotel sl = new SelectHotel(driver);
	    clickonWebelement(sl.getRadiobtn());
	    clickonWebelement(sl.getContinuebtn());
	    
		
			}

	

}
