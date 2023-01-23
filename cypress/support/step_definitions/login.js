import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  {mainPage} from "../../pages/MainPage"
import { loginModal } from "@pages/LoginModal";
import { homePage } from "@pages/HomePage";

//const email = Cypress.env('registered_email')   //maybe constants class? --> ENV File 
const email2 = "fhr1@fhr1.com"
const password = "12345"        //''

// --> SENT TO COMMON_STEPS.JS
// Given("user enters todo.ly main page", () => 
//     {
//         cy.visit("/"); // "/" refers to base URL (setted in .config.js)
//         //cy.visit("https://todo.ly/");
//     });

When("user clicks on [Login] button on todo.ly main page", () => 
    {
        mainPage.clickLogin();
    });

When("types 'fhr1@fhr1.com' in [Email] textbox", () => 
    {
        loginModal.typeEmail(email2)
        //loginModal.typeRegisteredEmail(email2)
    })

When("types '12345' in [Password] textbox", () => 
    {
        loginModal.typePassword(password)
        //loginModal.typeRegisteredPassword()
    })

When("clicks [Login] button on Login modal", () => 
    {
        loginModal.clickLoginBtn()
    })

// --> SENT TO COMMON_STEPS.JS
// Then("[Logout] button should be displayed on the top right of the page", () => 
//     {
//         homePage.elements.logoutBtn().should('be.visible')
//     });