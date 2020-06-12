$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing hotel booking and cancellation functionalities in adactin",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Checking the valid username and password for login functionality",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SignInPage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch  the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cusername\u003e\" the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cpassword\u003e\" the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to homepage sucessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;1"
    },
    {
      "cells": [
        "Arun",
        "1a1a1a"
      ],
      "line": 16,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;2"
    },
    {
      "cells": [
        "Bala",
        "2a2a2a"
      ],
      "line": 17,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;3"
    },
    {
      "cells": [
        "PavithraN",
        "Pavi@2426"
      ],
      "line": 18,
      "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 685300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 1675683400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 116000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Checking the valid username and password for login functionality",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SignInPage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch  the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cusername\u003e\" the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cpassword\u003e\" the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to homepage sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 7207453600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 2370275800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 963509800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_login_button()"
});
formatter.result({
  "duration": 1506465800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_homepage_sucessfully()"
});
formatter.result({
  "duration": 137700,
  "status": "passed"
});
formatter.after({
  "duration": 740843200,
  "status": "passed"
});
formatter.before({
  "duration": 300400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 866000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 223400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Checking the valid username and password for login functionality",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SignInPage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch  the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cusername\u003e\" the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cpassword\u003e\" the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to homepage sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 811944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 1028850200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 784483900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_login_button()"
});
formatter.result({
  "duration": 1600366600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_homepage_sucessfully()"
});
formatter.result({
  "duration": 199300,
  "status": "passed"
});
formatter.after({
  "duration": 833789000,
  "status": "passed"
});
formatter.before({
  "duration": 254600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 229200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 176700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking the valid username and password for login functionality",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;checking-the-valid-username-and-password-for-login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SignInPage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch  the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cusername\u003e\" the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cpassword\u003e\" the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "It lands to homepage sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 680289600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 859677100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 1015718700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_login_button()"
});
formatter.result({
  "duration": 1798721300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_homepage_sucessfully()"
});
formatter.result({
  "duration": 122400,
  "status": "passed"
});
formatter.after({
  "duration": 700913200,
  "status": "passed"
});
formatter.before({
  "duration": 355200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 207900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 97200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User searches the Hotel in the adactin application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;user-searches-the-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User enter the Location of the Hotel as \"Sydney\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter the Hotel name as \"Hotel Creek\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter the Room Type as \"Deluxe\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter the number of rooms as \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter the check in date as \"03/06/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enter the check out date as \"04/06/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enter the adults per room as \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters the  childs per room as \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The Hotel is searched sucessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 41
    }
  ],
  "location": "StepDefinition.user_enter_the_Location_of_the_Hotel_as(String)"
});
formatter.result({
  "duration": 701923200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_enter_the_Hotel_name_as(String)"
});
formatter.result({
  "duration": 992295300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deluxe",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enter_the_Room_Type_as(String)"
});
formatter.result({
  "duration": 1513259500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_enter_the_number_of_rooms_as(String)"
});
formatter.result({
  "duration": 948373800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/06/2020",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_enter_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 677287700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/06/2020",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_enter_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 386268300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_enter_the_adults_per_room_as(String)"
});
formatter.result({
  "duration": 995034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_the_childs_per_room_as(String)"
});
formatter.result({
  "duration": 1087450600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1798273800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_Hotel_is_searched_sucessfully()"
});
formatter.result({
  "duration": 205000,
  "status": "passed"
});
formatter.after({
  "duration": 1043193800,
  "status": "passed"
});
formatter.before({
  "duration": 139700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 133900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 120600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User selects the Hotel",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;user-selects-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@SelectHotel"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User verifies and confirms the selected hotel",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The Hotel is selected successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_verifies_and_confirms_the_selected_hotel()"
});
formatter.result({
  "duration": 581109000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_continue_button()"
});
formatter.result({
  "duration": 1801791900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_Hotel_is_selected_successfully()"
});
formatter.result({
  "duration": 187200,
  "status": "passed"
});
formatter.after({
  "duration": 1143550100,
  "status": "passed"
});
formatter.before({
  "duration": 182100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 150200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User Books a Hotel",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;user-books-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@BookingHHotel"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User enter the first name as \"Saravanakumar\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enter the last name as \"Manohar\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enter the billing address as \"No:29/79, Agathiyar nagar,Villivakkam, Chennai-49\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enter the credit card number as \"6589-1238-5634-8945\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enter the credit card type as \"VISA\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enter the expiry month of credit card as \"8\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User enter the expiry year of credit card as \"2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User enter the CVV of the credit card as \"842\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User clicks the booknow button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "It lands to the booking page successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Saravanakumar",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_enter_the_first_name_as(String)"
});
formatter.result({
  "duration": 1162480400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manohar",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enter_the_last_name_as(String)"
});
formatter.result({
  "duration": 922856700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No:29/79, Agathiyar nagar,Villivakkam, Chennai-49",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_enter_the_billing_address_as(String)"
});
formatter.result({
  "duration": 1612324800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6589-1238-5634-8945",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_enter_the_credit_card_number_as(String)"
});
formatter.result({
  "duration": 1148716000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 36
    }
  ],
  "location": "StepDefinition.user_enter_the_credit_card_type_as(String)"
});
formatter.result({
  "duration": 913680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 47
    }
  ],
  "location": "StepDefinition.user_enter_the_expiry_month_of_credit_card_as(String)"
});
formatter.result({
  "duration": 638533000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_enter_the_expiry_year_of_credit_card_as(String)"
});
formatter.result({
  "duration": 1150146400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "842",
      "offset": 42
    }
  ],
  "location": "StepDefinition.user_enter_the_CVV_of_the_credit_card_as(String)"
});
formatter.result({
  "duration": 733604400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_booknow_button()"
});
formatter.result({
  "duration": 680845500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_booking_page_successfully()"
});
formatter.result({
  "duration": 571800,
  "status": "passed"
});
formatter.after({
  "duration": 658188400,
  "status": "passed"
});
formatter.before({
  "duration": 196800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 197000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 178400,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "User confirms the booked Hotel",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;user-confirms-the-booked-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@BookConfirmPage"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "User selects the My Itinerary and confirms the booking",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "It lands to the booking confirm  page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_the_My_Itinerary_and_confirms_the_booking()"
});
formatter.result({
  "duration": 8708723500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_booking_confirm_page_successfully()"
});
formatter.result({
  "duration": 194200,
  "status": "passed"
});
formatter.after({
  "duration": 1035248900,
  "status": "passed"
});
formatter.before({
  "duration": 169700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 164900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 185300,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "User cancels the Booked room in Hotel",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;user-cancels-the-booked-room-in-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@CanelHotel"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "User searched the booked room",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User confirms the Hotel which has to be Cancelled",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "It lands to the booking itinerary page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_searched_the_booked_room()"
});
formatter.result({
  "duration": 798362500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_Hotel_which_has_to_be_Cancelled()"
});
formatter.result({
  "duration": 618359700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.it_lands_to_the_booking_itinerary_page_successfully()"
});
formatter.result({
  "duration": 1077089400,
  "status": "passed"
});
formatter.after({
  "duration": 812063800,
  "status": "passed"
});
formatter.before({
  "duration": 249900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 188500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 152700,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "User logout from adactin application",
  "description": "",
  "id": "testing-hotel-booking-and-cancellation-functionalities-in-adactin;user-logout-from-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@LogOutPage"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "User selects the logout option",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User closes the Adactin application",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "User has been loggged out sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_the_logout_option()"
});
formatter.result({
  "duration": 2129794100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_closes_the_Adactin_application()"
});
formatter.result({
  "duration": 1018871900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_has_been_loggged_out_sucessfully()"
});
formatter.result({
  "duration": 127900,
  "status": "passed"
});
formatter.after({
  "duration": 195128300,
  "error_message": "java.lang.RuntimeException\r\n\tat com.cucumber.baseclass.BaseClass.getScreenShot(BaseClass.java:175)\r\n\tat com.adactin.stepdefinition.Hooks.afterHooks(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});