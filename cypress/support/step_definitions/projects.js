import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  {mainPage} from "../../pages/MainPage"
import { loginModal } from "@pages/LoginModal";
import { homePage } from "@pages/HomePage";
import { genericMethods } from "cypress/utils/GenericMethods";

randomProjectName = "cy.project_" + genericMethods.makeid(5);
var initialCount;

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
    //homePage.elements.projectsList().its('childElementCount').then(initialCount =>
        //{
            homePage.clickButton('addConfirmation');

        //})
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

