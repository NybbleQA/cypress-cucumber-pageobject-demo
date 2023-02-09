class HomePage
{
    elements =
    {
        logoutBtn: () => cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout'),
        projectsList: () => cy.get('#mainProjectList'),
        xpath_projectsList: () => cy.xpath(),
        addProjectBtn: () => cy.get('.AddProjectLiDiv > .ProjItemTable > tbody > tr > .ProjItemContent'),
        newProjectTextbox: () => cy.get('#NewProjNameInput'),
        addConfirmationBtn: () => cy.get('#NewProjNameButton'),
        editProjectTextbox: () => cy.xpath("//td[@class]//input[@id='ItemEditTextbox']"),
        saveProjectBtn: () => cy.xpath("//td[@class]//img[@id='ItemEditSubmit']"),

        //PROJECT MENU BUTTONS
        editProjectBtn: () => cy.xpath("//ul[@id='projectContextMenu']//a[@href='#edit']"),
        deleteProjectBtn: () => cy.xpath("//ul[@id='projectContextMenu']//a[@href='#delete']")
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
            case 'editProject':
                this.elements.editProjectBtn().click();
                break;
            case 'saveProject':
                this.elements.saveProjectBtn().click();
                break;
            case 'deleteProject':
                this.elements.deleteProjectBtn().click();
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
            case 'editProjectTextbox':
                this.elements.editProjectTextbox().type(text)
                break;
            default:
                throw new Error(`Button "${buttonName}" not found.`);
        }
    }

    clearText(fieldName)
    {
        switch(fieldName)
        {
            case 'newProjectTextbox':
                this.elements.newProjectTextbox().clear();
                break;
            case 'editProjectTextbox':
                this.elements.editProjectTextbox().clear();
                break;
            default:
                throw new Error(`Button "${buttonName}" not found.`);
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

    searchProjectMenuBtn(projectName)
    {
        return cy.xpath("//li[last()]//td[text()='" + projectName + "']//following-sibling::td//img")
    }

}

export const homePage = new HomePage();