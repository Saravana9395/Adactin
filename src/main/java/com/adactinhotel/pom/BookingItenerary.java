package com.adactinhotel.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingItenerary {
	
	public BookingItenerary(WebDriver driver5) {
		this.driver=driver5;
		PageFactory.initElements(driver5, this);
		
	}

	public static  WebDriver  driver;
	
	

	 
	@FindBy(xpath = "//*[@id=\"booked_form\"]/table/tbody/tr[2]/td/table/tbody/tr[33]/td[1]/input")
	private WebElement checkbox1;
	

	 
	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getCheckbox1() {
		return checkbox1;
	}



	

	
	

}

