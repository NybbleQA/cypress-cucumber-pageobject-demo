class SignupModal
{
    //ELEMENTS LOCATED INSIDE THIS PAGE
    elements =
    {
        fullNameTxtBox: () => cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName'),
        emailTxtBox: () => cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail'),
        passwordTxtBox: () => cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword'),
        termsCheckbox: () => cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms'),
        signUpBtn: () => cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup')
    }

    //METHODS RELATED TO THIS PAGE'S ELEMENTS

    typeFullName(fullname)
    {
        this.elements.fullNameTxtBox().type(fullname)
    }

    typeEmail(email)
    {
        this.elements.emailTxtBox().type(email)
    }

    typePassword(password)
    {
        this.elements.passwordTxtBox().type(password)
    }

    checkTerms()
    {
        this.elements.termsCheckbox().check();
    }

    clickSignUpBtn()
    {
        this.elements.signUpBtn().click();
    }

}

export const signupModal = new SignupModal();