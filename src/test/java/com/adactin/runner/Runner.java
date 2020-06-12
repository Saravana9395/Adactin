package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.utilities.ConfigurationReader;
import com.cucumber.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)


@CucumberOptions(features="src\\test\\java\\com\\adactin\\feature",
glue="com\\adactin\\stepdefinition",
//tags= {"@SignInPage"},
monochrome=true,
dryRun=false,
strict=true,
plugin= {"html:Report\\CucumberReport","json:Report\\cucumberReport.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report\\extentReport.html"})

public class Runner extends BaseClass  {
public static WebDriver driver;

@BeforeClass
public static void browserOpen() throws Exception {
	ConfigurationReader con = new ConfigurationReader();
	driver = browserLaunch("chrome");

}
    
    
    @AfterClass
    public static void browserClose() {
	driver.close();

}

}