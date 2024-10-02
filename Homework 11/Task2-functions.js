export {fetchDataTodo1, fetchUser1};


function fetchDataTodo1() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(response => {
        if (!response.ok) {
            throw new Error('Error fetching todo from JSON');
        }
        return response.json();
    }).catch(error => {
        console.log('Error happened in fetching TODO: ' + error.message);
    })
}

function fetchUser1() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`).then(response => {
        if (!response.ok) {
            throw new Error('Error fetching user from JSON');
        }
        return response.json();
    }).catch(error => {
        console.log('Error happened in fetching user: ' + error.message);
    })
}

