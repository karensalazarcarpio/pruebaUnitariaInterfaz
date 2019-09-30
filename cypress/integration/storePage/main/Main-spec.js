import Licencia from "../class/Licencia";
import Cart from "../class/Cart";
import Checkout from "../class/Checkout";

describe('Pruebas License Plate Store', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Verifica existencia de 8 Licencias', () => {
        let licencia = new Licencia();
        licencia.existNroPlates(8);
        
    });
    
    it('Verifica la existencia de la primera licencia', () => {
        let licencia = new Licencia();
        licencia.verificaTipoPlate('2008 Georgia license plate',1);
        
        
    });
    
    
    it('Verifica resultado de presionar la opcion MyCart', () => {
        let licencia = new Licencia();
        licencia.navegarSubMenu('My cart', 'Your current cart contents');
        
    });

    it('Adiciona una licencia al carrito',()=>{
        let cart=new Cart();
        cart.adicionarLicenciaAlCarro();
    });
    
    
    it('Valida parametros llenados para luego mostrar el boton Submit',()=>{
        let checkout=new Checkout();
        checkout.validarParametros();
    });

});