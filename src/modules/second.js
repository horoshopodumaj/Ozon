import getData from './getData'
import postData from './postData'


let second = () => {
    const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        console.log(data)
    })
}

export default second