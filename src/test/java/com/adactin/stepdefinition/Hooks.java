package com.adactin.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.remote.server.handler.GetScreenOrientation;

import com.cucumber.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
	@Before
	public void beforeHooks(Scenario scenario) {
		System.out.println(scenario.getName() );
	}

	@After
	public void afterHooks(Scenario scenario) throws IOException {
        System.out.println("Status:" +scenario.getStatus());
        getScreenShot(scenario.getId());
	}
}
