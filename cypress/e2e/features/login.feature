Feature: Login

    Feature Description

    Background: Entering todo.ly main page login modal
    Given user enters todo.ly main page
    And user clicks on [Login] button on todo.ly main page

    Scenario: Successful login with an existing user 
    
    When user types 'fhr1@fhr1.com' in [Email] textbox
    And types '12345' in [Password] textbox
    And clicks [Login] button on Login modal

    Then [Logout] button should be displayed on the top right of the page

    #  Scenario Outline: Unsuccessful login through invalid credentials

    #  When user types "<email>" in [Email] textbox
    #  And types "<password>" in [Password] textbox
    #  And clicks [Login] button on Login modal

    #  Then user should not be logged in

    #  Examples:
    #  |  email   |   password    |
    #  |  ""      |   12345       |
    #  |  fhr1@fhr1.com   |   ""  |
    #  |  ""  |  ""  |