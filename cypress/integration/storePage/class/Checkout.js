class Checkout{
    validarParametros(){
        cy.contains('Checkout').click();
        cy.contains('Submit').should('not.be.visible');
        cy.get("[name='firstname']").type('Karen');
        cy.get("[name='lastname']").type('Salazar');
        cy.contains('Submit').should('not.be.visible');
        cy.get("[name='zip']").type('78956');
        cy.get("[name='cc']").type('1258967999');
        cy.contains('Submit').should('be.visible');
    }
}
export default  Checkout;