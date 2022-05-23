import getData from './getData'
import renderGoods from './renderGoods'


let search = () => {
    let searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (event) => {
        let value = event.target.value;

        getData(value).then((data) => {
            renderGoods(data)
        })
    })
}

export default search