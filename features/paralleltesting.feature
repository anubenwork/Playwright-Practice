Feature: login Verification with invalid credentials
  @Validation
  Scenario: Invalid Credential Login
    Given User is on the login page
    When User logs in with invalid credentials "standarduser" and "secret_sauce"
    Then  User should see the error message


  @EndtoEnd
  Scenario: Successful checkout and order confirmation
    Given User is on the login page
    When User logs in with valid credentials
    And User selects a product and moves to cart
    And User proceeds to checkout with personal details
    Then User should see the order confirmation message