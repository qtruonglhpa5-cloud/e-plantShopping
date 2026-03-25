const axios = require('axios');

const BASE_URL = "http://localhost:3000";

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(BASE_URL + "/");
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Example calls
getAllBooks();
getBookByISBN("9781593279509");
getBooksByAuthor("Marijn Haverbeke");
getBooksByTitle("Eloquent JavaScript");