function loadTextFileXHR() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/sample')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    });
}

console.log(loadTextFileXHR());