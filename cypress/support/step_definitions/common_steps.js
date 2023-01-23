import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/HomePage";

Given("user enters todo.ly main page", () => 
{
    cy.visit("/"); // "/" refers to base URL (setted in .config.js)
    //cy.visit("https://todo.ly/");
});

Then("[Logout] button should be displayed on the top right of the page", () => 
    {
        homePage.elements.logoutBtn().should('be.visible')
    });