import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  {mainPage} from "../../pages/MainPage"
import { loginModal } from "@pages/LoginModal";
import { homePage } from "@pages/HomePage";
import { genericMethods } from "cypress/utils/GenericMethods";

randomProjectName = "cy.project_" + genericMethods.makeid(5);


When("user clicks [Add New Project] button", () =>
{
    homePage.clickButton("addProject");
})

When("types a random string in [New Project Name] textbox", () =>
{
    homePage.typeText('newProjectTextbox' ,randomProjectName);
})

When("clicks [Add] button", () =>
{
    homePage.clickButton('addConfirmation');
})

Then("project should be created", () =>
{
    homePage.searchLastMatchingProject(randomProjectName).should('be.visible');

    //homePage.elements.projectsList()
    //1)
    //.find('childElement')
    //.contains(randomProjectName)
    //.last()
    //.should('have.text', randomProjectName)
    //2)
    //.its('childElementCount')
    //.should('equal', initialCount + 1);
})

//Scenario: Successful update of a created project

Given("a project is created with {string} as name", function(string)
{
    homePage.clickButton("addProject");
    homePage.typeText('newProjectTextbox' ,string);
    homePage.clickButton('addConfirmation');
})

When("user clicks [Options] button for the project named {string}",function(string)
{
    homePage.searchProjectMenuBtn(string).click({force: true});
})

When("clicks [Edit] button on project's options menu", function()
{
    homePage.clickButton('editProject');
})

When("types {string} in the project's name textbox", function(string)
{
    homePage.clearText('editProjectTextbox');
    homePage.typeText('editProjectTextbox', string);
})

When("clicks [Save] button", function()
{
    homePage.clickButton("saveProject");
})

Then("the project name should change to {string}", function(string)
{
    homePage.searchLastMatchingProject(string).should('be.visible');
})


//Scenario: Delete an existing project successfully

When("clicks [Delete] button on project's option menu", function()
{
    homePage.clickButton('deleteProject');
})

// When("accepts the alert pop-up", function()
// {

// })

Then("the project named {string} should be deleted successfully", function(string)
{
    //homePage.searchLastMatchingProject(string).should('not.be.visible');
})