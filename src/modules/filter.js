import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter, hotSaleFilter } from './filters'


let filter = () => {
    let maxInput = document.getElementById('max')
    let minInput = document.getElementById('min')
    let checkboxInput = document.getElementById('discount-checkbox')
    let checkboxSpan = document.querySelector('.filter-check_checkmark')

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        })
     });

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        })
    });

    checkboxInput.addEventListener('change', () => {
        if(checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        })
    })
}

export default filter