package com.adactinhotel.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Logout {
	
	public static WebDriver driver;
	
	public Logout(WebDriver driver7) {
		this.driver=driver7;
		PageFactory.initElements(driver7, this);
	}

	
	
	@FindBy(id = "logout")
	private WebElement logout;

	public static WebDriver getDriver() {
		return driver;
	}



	public WebElement getLogout() {
		return logout;
	}
	
	
}

