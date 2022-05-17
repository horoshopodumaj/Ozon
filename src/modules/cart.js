
let cart = () => {
    let cartBtn = document.getElementById('cart');
    let cartModal = document.querySelector('.cart');
    let cartCloseBtn = cartModal.querySelector('.cart-close');

    let openCart = () => {
        cartModal.style.display = 'flex';
    }

    cartBtn.addEventListener('click', openCart);

    cartCloseBtn.addEventListener('click', () => {
        cartModal.style.display = '';
    })
}

export default cart

