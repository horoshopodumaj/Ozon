import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter} from './filters'


let filter = () => {
    let maxInput = document.getElementById('max')
    let minInput = document.getElementById('min')

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, minInput.value, maxInput.value))
        })

        
    })

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, minInput.value, maxInput.value))
        })
        
    })

    
}

export default filter