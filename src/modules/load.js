import getData from './getData'
import renderGoods from './renderGoods'


let load = () => {
    
    getData().then((data) => {
        renderGoods(data)
    })
}

export default load