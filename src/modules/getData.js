let getData = (str) => {
    return fetch(`https://test-76682-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then((response) => {
        return response.json()
    })
 
}

export default getData