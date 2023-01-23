class MainPage
{
    elements =
    {
        loginBtn: () => cy.get('.HPHeaderLogin > a > img'),
        signupBtn: () => cy.get('.HPHeaderSignup > a > img')
    }

    clickLogin()
    {
        this.elements.loginBtn().click();
    }

    clickSignUp()
    {
        this.elements.signupBtn().click();
    }


}

export const mainPage = new MainPage();