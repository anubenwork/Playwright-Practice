Feature: Invalidlogin
@Validation //custom tag used for all invalid or negative test cases
  Scenario: Invalid Credential Login
    Given User is on the login page
    When User logs in with invalid credentials "standarduser" and "secret_sauce"
    Then Verify Error with text "Epic sadface: Username and password do not match any user in this service" is displayed