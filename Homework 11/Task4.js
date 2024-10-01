import {fetchDataTodo1, fetchUser1} from "./Task2-functions.js";


//CREATING CLASSES
class TodoFetcher {
    static async fetch() {
        return await fetchDataTodo1();
    }
}

class UserFetcher {
    static async fetch() {
        return await fetchUser1();
    }
}

//USAGE OF CLASSES
async function fetchDataUsingClasses() {
    try {
        const todo = await TodoFetcher.fetch();
        const user = await UserFetcher.fetch();
        console.log('Todo from class:', todo);
        console.log('User from class:', user);
    } catch (error) {
        console.error('Error fetching data using classes:', error);
    }
}

fetchDataUsingClasses();