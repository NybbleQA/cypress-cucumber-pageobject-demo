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

    // BETTER PRACTICES CODE

    typeText(fieldName, text) {
        switch (fieldName) {
          case 'fullName':
            this.elements.fullNameTxtBox().type(text);
            break;
          case 'email':
            this.elements.emailTxtBox().type(text);
            break;
          case 'password':
            this.elements.passwordTxtBox().type(text);
            break;
          default:
            throw new Error(`Field "${fieldName}" not found.`);
        }
      }

}

export const signupModal = new SignupModal();