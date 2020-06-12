Feature: Testing hotel booking and cancellation functionalities in adactin

Background:
    Given the user is logged in
    And goes to landing page

@SignInPage
Scenario Outline: Checking the valid username and password for login functionality
Given User launch  the adactin application
When User enter "<username>" the valid username
And User enter "<password>" the valid password
And User enter the login button
Then It lands to homepage sucessfully
Examples:
|Username|Password|
|Arun|1a1a1a|
|Bala|2a2a2a|
|PavithraN|Pavi@2426|

@SearchHotel
Scenario: User searches the Hotel in the adactin application
When User enter the Location of the Hotel as "Sydney"
And User enter the Hotel name as "Hotel Creek"
And User enter the Room Type as "Deluxe"
And User enter the number of rooms as "2"
And User enter the check in date as "03/06/2020"
And User enter the check out date as "04/06/2020"
And User enter the adults per room as "3"
And User enters the  childs per room as "1"
And User clicks the search button
Then The Hotel is searched sucessfully

@SelectHotel
Scenario: User selects the Hotel
When User verifies and confirms the selected hotel
And User clicks the continue button
Then The Hotel is selected successfully

@BookingHHotel
Scenario: User Books a Hotel
When User enter the first name as "Saravanakumar"
And User enter the last name as "Manohar"
And User enter the billing address as "No:29/79, Agathiyar nagar,Villivakkam, Chennai-49"
And User enter the credit card number as "6589-1238-5634-8945"
And User enter the credit card type as "VISA"
And User enter the expiry month of credit card as "8"
And User enter the expiry year of credit card as "2021"
And User enter the CVV of the credit card as "842"
And User clicks the booknow button
Then It lands to the booking page successfully

@BookConfirmPage
Scenario: User confirms the booked Hotel
When User selects the My Itinerary and confirms the booking
Then It lands to the booking confirm  page successfully

@CanelHotel
Scenario: User cancels the Booked room in Hotel
When User searched the booked room
And User confirms the Hotel which has to be Cancelled
Then It lands to the booking itinerary page successfully

@LogOutPage
Scenario: User logout from adactin application
When User selects the logout option
When User closes the Adactin application
Then User has been loggged out sucessfully


