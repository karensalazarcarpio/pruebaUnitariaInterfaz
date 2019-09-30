class Licencia{
    constructor(){

    }
    existNroPlates(nro){
        cy.get('app-license-plate').should('have.length', nro);
    }
    verificaTipoPlate(titulo, posicion){
        cy.get('app-license-plate:nth-of-type('+posicion+')').contains(titulo).should('be.visible');

    }
    navegarSubMenu(subMenu, msje){
        cy.contains(subMenu).click();
        cy.contains(subMenu).should('be.visible');
        cy.contains(msje).should('be.visible');
    }

}
export default Licencia;