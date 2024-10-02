import {fetchDataTodo1, fetchUser1} from "./Task2-functions.js";


async function fetchData() {
    try {
        const todo = await fetchDataTodo1()
        const user = await fetchUser1()
        console.log('Found todo:', todo);
        console.log('Found user data:', user);
    } catch (error) {
        console.log('Error happened in async fetching', error)
    }
}

fetchData()
