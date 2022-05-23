import getData from './getData'
import renderGoods from './renderGoods'
import { searchFilters } from './filters'

let search = () => {
    let searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (event) => {
        let value = event.target.value;

        getData().then((data) => {
            renderGoods(searchFilters(data, value))
        })
    })
}

export default search