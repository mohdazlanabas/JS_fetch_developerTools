// console.log('hello world')
//console.log(fetch('https://reqres.in/api/users'))

/*
fetch('https://reqres.in/api/users')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('Not Successful')
        }
    })
    .then(data => console.log(data))
    .catch(erroe => console.log('ERROR'))
*/

fetch ('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify ({
        name: 'User 1'
    })
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(erroe => console.log('ERROR'))
