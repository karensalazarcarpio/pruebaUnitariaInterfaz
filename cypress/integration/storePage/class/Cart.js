class Cart{

    adicionarLicenciaAlCarro(){
        cy.get(`app-license-plate:nth-of-type(3)`)
            .contains('Add to cart').click();
        cy.contains('My cart').click();
        cy.contains('Your cart is empty').should('not.be.visible');
        
        cy.get(`app-license-plate:nth-of-type(1)`).contains('Remove from cart');
    }
}
export default Cart;