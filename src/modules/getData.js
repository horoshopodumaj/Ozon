let getData = (str) => {
    return fetch(`https://test-76682-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
        return response.json()
    })
 
}

// ?${str ? `search=${str}` : ''}

export default getData