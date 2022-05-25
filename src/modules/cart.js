import renderCart from './renderCart'
import postData from './postData'

let cart = () => {
    let cartBtn = document.getElementById('cart');
    let cartModal = document.querySelector('.cart');
    let cartCloseBtn = cartModal.querySelector('.cart-close');
    let cartTotal = cartModal.querySelector('.cart-total > span');
    let cartSendBtn = cartModal.querySelector('.cart-confirm');
    let goodsWrapper = document.querySelector('.goods');
    let cartWrapper = document.querySelector('.cart-wrapper');
    
     let openCart = () => {
        let cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';

        renderCart(cart);

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }

    cartBtn.addEventListener('click', openCart);

    cartCloseBtn.addEventListener('click', () => {
        cartModal.style.display = '';
    })

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')){
            let card = event.target.closest('.card');
            let key = card.dataset.key;
            let goods= JSON.parse(localStorage.getItem('goods'));
            let cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];
            let goodItem = goods.find((item) => {
                return item.id === +key;
            })

            cart.push(goodItem);

            localStorage.setItem('cart', JSON.stringify(cart));
   
        }
    })

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')){
            let cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];

            let card = event.target.closest('.card');
            let key = card.dataset.key;
            let index = cart.findIndex((item) => {
                return item.id === +key
            });

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart(cart);
        
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0);

        }
    })

    cartSendBtn.addEventListener('click', () => {
        let cart = localStorage.getItem('cart') ? 
            JSON.parse(localStorage.getItem('cart')) : [];

            postData(cart).then(() => {
                localStorage.removeItem('cart');

                renderCart([]);

                cartTotal.textContent = 0;
            })
    })

}

export default cart

