Feature: Register

    Feature Description

    Scenario: Successful registration of a new account

    Given user enters todo.ly main page

    When user clicks on [Sign Up Free] button on todo.ly main page
    And types 'test' in [Full Name] textbox
    And types a random string plus '@email.com' in [Email] textbox
    And types '12345' in [Password] signup textbox
    And checks [Terms of Service] checkbox
    And clicks [Signup] button on Signup modal

    Then [Logout] button should be displayed on the top right of the page

    # Scenario Outline: Failed registration attempt through invalid fields

    # Given user enters todo.ly main page

    # When user types "<fullName>" in [Full Name] textbox
    # And types "<email>" in [Email] textbox
    # And types "<password>" in [Password] signup textbox
    # And checks [Terms of Service] checkbox
    # And clicks [Signup] button on Signup modal

    # Then user should not be registered 
    # test throug request->response code