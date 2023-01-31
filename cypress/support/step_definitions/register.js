import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  {mainPage} from "../../pages/MainPage"
import { signupModal } from "@pages/SignupModal";
import { homePage } from "@pages/HomePage";
import { genericMethods } from "cypress/utils/GenericMethods";

asd = genericMethods.makeid(5) + "@mail.com"


When("user clicks on [Sign Up Free] button on todo.ly main page", () =>
{
    mainPage.clickSignUp();
})

When("types 'test' in [Full Name] textbox", () =>
{
    signupModal.typeText("fullName","test2")
})

When("types a random string plus '@email.com' in [Email] textbox", () =>
{
    signupModal.typeText('email', asd)
})

When("types '12345' in [Password] signup textbox", () =>
{
    signupModal.typeText('password', asd)
})

When("checks [Terms of Service] checkbox", () =>
{
    signupModal.checkTerms();
})

When("clicks [Signup] button on Signup modal", () =>
{
    signupModal.clickSignUpBtn();
})

