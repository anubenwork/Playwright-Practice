Feature: Login

  Scenario: Successful login
    Given User is on the login page
    When User enters username "standard_user" and password "secret_sauce"
    Then User should see the dashboard