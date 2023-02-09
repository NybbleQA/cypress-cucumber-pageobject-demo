Feature: Projects CRUD

    Basic creation/read/update/delete scenarios for the projects feature

    Background: Existing user already logged in 

    Given user enters todo.ly main page
    And user clicks on [Login] button on todo.ly main page
    And user types 'fhr1@fhr1.com' in [Email] textbox  
    And types '12345' in [Password] textbox  
    And clicks [Login] button on Login modal


     Scenario: Successful creation of a new project
 
     When user clicks [Add New Project] button
     And types a random string in [New Project Name] textbox
     And clicks [Add] button
     Then project should be created
    # And project should be displayed with the random string as name
    
    #

    Scenario: Successful update of a created project

    Given a project is created with "test" as name
    When user clicks [Options] button for the project named "test"
    And clicks [Edit] button on project's options menu
    And types "EDITED_PROJECT" in the project's name textbox
    And clicks [Save] button
    Then the project name should change to "EDITED_PROJECT"

    # #

    Scenario: Delete an existing project successfully

    Given a project is created with "test" as name
    When user clicks [Options] button for the project named "test"
    And clicks [Delete] button on project's option menu
    # And accepts the alert pop-up
    Then the project named "test" should be deleted successfully