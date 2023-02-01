Feature: Projects CRUD

    Basic creation/read/update/delete scenarios for the projects feature

    Background: Existing user already logged in 

    Given user enters todo.ly main page
    And user clicks on [Login] button on todo.ly main page
    And types 'fhr1@fhr1.com' in [Email] textbox  
    And types '12345' in [Password] textbox  
    And clicks [Login] button on Login modal

    # Scenario Outline: Scenario Outline name
    
    # Given  
    # When 
    # And 
    # Then 

    #

     Scenario: Successful creation of a new project
 
     When user clicks [Add New Project] button
     And types a random string in [New Project Name] textbox
     And clicks [Add] button
     Then project should be created
    # And project should be displayed with the random string as name
    
    #

    # Scenario: Successful update of a created project

    # Given 
    # When 
    # And 
    # Then 

    # #

    # Scenario: Delete an existing project successfully

    # When 
    # And 
    # Then 