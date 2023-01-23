class HomePage
{
    elements =
    {
        logoutBtn: () => cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout')
    }
}

export const homePage = new HomePage();