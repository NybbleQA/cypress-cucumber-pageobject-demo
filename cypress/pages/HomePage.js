class HomePage
{
    elements =
    {
        logoutBtn: () => cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout'),
        projectsList: () => cy.get('#mainProjectList'),
        xpath_projectsList: () => cy.xpath(),
        addProjectBtn: () => cy.get('.AddProjectLiDiv > .ProjItemTable > tbody > tr > .ProjItemContent'),
        newProjectTextbox: () => cy.get('#NewProjNameInput'),
        addConfirmationBtn: () => cy.get('#NewProjNameButton')
    }

    // clickLogoutBtn()
    // {
    //     this.elements.logoutBtn().click()
    // }

    // clickAddProjectBtn()
    // {
    //     this.elements.addProjectBtn().click()
    // }

    // clickAddConfirmationBtn()
    // {
    //     this.elements.addConfirmationBtn().click()
    // }

    //FUNCTION TO GET THE BTN NAME AS STRING



    clickButton(buttonName) 
    {

        switch (buttonName) 
        {
            case 'logout':
                this.elements.logoutBtn().click();
                break;
            case 'addProject':
                this.elements.addProjectBtn().click();
                break;
            case 'addConfirmation':
                this.elements.addConfirmationBtn().click();
                break;
            default:
                throw new Error(`Button "${buttonName}" not found.`);
        }
    }
      
    typeText(fieldName, text)
    {
        switch(fieldName)
        {
            case 'newProjectTextbox':
                this.elements.newProjectTextbox().type(text)
                break;
        }
    }

    findElement()
    {
        //USE XPATH || CSS TO FIND AND COMPARE AN ELEMENT LOCATOR
    }

    searchLastMatchingProject(projectName)
    {   
        return cy.xpath("(//ul//li//td[text()='"+ projectName +"'])[last()]")
    }

}

export const homePage = new HomePage();