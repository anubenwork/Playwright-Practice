Feature: login Verification with invalid credentials parameterized
  Scenario Outline: Invalid Credential Login with parameterized values
    Given User is on the login url
    When User logs in with invalid "<Username>" and "<Password>"
    Then Verify Error message with text "Epic sadface: Username and password do not match any user in this service" is displayed

    Examples:
        | Username | Password |
        | standarduser | secret_sauce |
        | standard_user | standarduser |
        | standard | standard |