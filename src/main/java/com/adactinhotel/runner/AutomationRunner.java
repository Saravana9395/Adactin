package com.adactinhotel.runner;

import org.junit.Test;
import org.openqa.selenium.WebDriver;

import com.adactinhotel.pom.BookingConfirmPage;
import com.adactinhotel.pom.BookingHotel;
import com.adactinhotel.pom.BookingItenerary;
import com.adactinhotel.pom.CancelHotel;
import com.adactinhotel.pom.Logout;
import com.adactinhotel.pom.SearchHotel;
import com.adactinhotel.pom.SelectHotel;
import com.adactinhotel.pom.SignInPage;
import com.cucumber.baseclass.BaseClass;

public class AutomationRunner extends BaseClass{
	
		public  WebDriver driver;

		@Test
		public void testing() throws Exception
	{
		
		driver=browserLaunch("chrome");
		driver.get("https://adactinhotelapp.com");
		
		SignInPage sp = new SignInPage(driver);
		inputValuestoWebelement(sp.getUsername(), "PavithraN");
		inputValuestoWebelement(sp.getPassword(), "Pavi@2426");
		clickonWebelement(sp.getLogin());
		
		SearchHotel sh= new SearchHotel(driver);
		selectDropDownOption(sh.getLocation(), "value", "Sydney");
		selectDropDownOption(sh.getHotels(), "value", "Hotel Creek");
		selectDropDownOption(sh.getRoom(), "value", "Deluxe" );
		selectDropDownOption(sh.getRoomno(), "value", "2");
		inputValuestoWebelement(sh.getCheckin(), "24/05/2020");
		inputValuestoWebelement(sh.getCheckout(), "25/05/2020");
		selectDropDownOption(sh.getAdult(), "value" , "3");
		selectDropDownOption(sh.getChild(), "value", "1");
		clickonWebelement(sh.getSubmit());

		
		SelectHotel s = new SelectHotel(driver);
		clickonWebelement(s.getRadiobtn());
		clickonWebelement(s.getContinuebtn());
		
		BookingHotel bh = new BookingHotel(driver);
		inputValuestoWebelement(bh.getFname(), "Saravanakumar");
		inputValuestoWebelement(bh.getLname(), "Manohar");
		inputValuestoWebelement(bh.getAddress(), "No:29/79, Agathiyar nagar,Villivakkam, Chennai-49");
		inputValuestoWebelement(bh.getCcnum(), "6589-1238-5634-8945");
		selectDropDownOption(bh.getCctype(), "value", "VISA");
		selectDropDownOption(bh.getCcmonth(), "value", "8");
		selectDropDownOption(bh.getCcyear(), "value", "2021");
		inputValuestoWebelement(bh.getCccvv(), "842");
		clickonWebelement(bh.getBook());
		
		BookingConfirmPage bp= new BookingConfirmPage(driver);
		clickonWebelement(bp.getItinerary());
		
		
	    BookingItenerary bi= new BookingItenerary(driver);
	    clickonWebelement(bi.getCheckbox1());
	    
	    
	    CancelHotel ch= new CancelHotel(driver);
	    clickonWebelement(ch.getCancel());
	    confirmAlert(ch.getCancel(), "accept");
	    
	    Logout lo=new Logout(driver);
	    clickonWebelement(lo.getLogout());
	    
	    browserClose("close");
				
	}
}
