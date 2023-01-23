import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  {mainPage} from "../../pages/MainPage"
import { signupModal } from "@pages/SignupModal";
import { homePage } from "@pages/HomePage";

When("user clicks on [Sign Up Free] button on todo.ly main page", () =>
{
    mainPage.clickSignUp();
})

When("types 'test' in [Full Name] textbox", () =>
{
    signupModal.typeFullName("test");
})

When("types a random string plus '@email.com' in [Email] textbox", () =>
{
    signupModal.typeEmail("random2@mail.com");
})

When("types '12345' in [Password] signup textbox", () =>
{
    signupModal.typePassword("12345")
})

When("checks [Terms of Service] checkbox", () =>
{
    signupModal.checkTerms();
})

When("clicks [Signup] button on Signup modal", () =>
{
    signupModal.clickSignUpBtn();
})

