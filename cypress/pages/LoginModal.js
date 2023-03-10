class LoginModal
{
    elements =
    {
        emailTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
        passwordTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
        loginBtn: () => cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin')
    }

    typeEmail(email)
    {
        this.elements.emailTextbox().type(email);
    }

    typePassword(password)
    {
        this.elements.passwordTextbox().type(password)
    }

    clickLoginBtn()
    {
        this.elements.loginBtn().click({force:true});
    }

    submitLogin()
    {
        this.elements.emailTextbox().type(email);
        this.elements.passwordTextbox().type(password);
        this.elements.loginBtn().click();
    }
    
    //////////////////////////////
    typeRegisteredEmail()
    {
      this.elements.emailTextbox().type(Cypress.env('registered_email'))
    }

    typeRegisteredPassword()
    {
      this.elements.passwordTextbox().type(Cypress.env('registered_password'))
    }

    //////////////////////////////
    typeText(fieldName, text) 
    {
        switch (fieldName) 
        {
          case 'email':
            this.elements.emailTextbox().type(text);
            break;
          case 'password':
            this.elements.passwordTextbox().type(text);
            break;
          default:
            throw new Error(`Field "${fieldName}" not found.`);
        }
    }

}

export const loginModal = new LoginModal();