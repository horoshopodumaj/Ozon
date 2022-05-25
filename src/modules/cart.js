import renderCart from './renderCart'

let cart = () => {
    let cartBtn = document.getElementById('cart');
    let cartModal = document.querySelector('.cart');
    let cartCloseBtn = cartModal.querySelector('.cart-close');
    let cartTotal = cartModal.querySelector('.cart-total > span');
    let goodsWrapper = document.querySelector('.goods') 
    
     let openCart = () => {
        let cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';

        renderCart(cart)
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
}

export default cart

