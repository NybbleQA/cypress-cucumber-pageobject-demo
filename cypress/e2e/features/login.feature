Feature: Login

    Feature Description

    Scenario: Successful login with an existing user 

    Given user enters todo.ly main page

    When user clicks on [Login] button on todo.ly main page
    And types 'fhr1@fhr1.com' in [Email] textbox  
    And types '12345' in [Password] textbox  
    And clicks [Login] button on Login modal

    Then [Logout] button should be displayed on the top right of the page