# Book Search

Book Search is a react app that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The purpose of this application is to allow a user to search for and save book data (title, author, description) to their library database from Google's Book API. It is a single page application that uses react and Google Books API to search for and save books to a database. The deployed project can be found on Heroku [here](https://radiant-cliffs-59967.herokuapp.com/).

## Functionality

The app allows a user to view the books they have stored in their MongoDB and read short descriptions about them as well as view the Google Books page for the book. They can switch to the "Search" page via the navbar and search for books by title and save any of the results to their library database.

## Notes

All functionality is taking place without the page being refreshed. Using React and state management, the updated DOM elements are redrawn from React's 'virtual DOM'. React-Router is also being used to maintain links and gives the applciation a more standard behavior similar to another website including directly going to a particular URL.

## Getting Started

1. `npm install`
2. `npm run start`
3. Search for books
4. Save book
5. View saved books

## Languages
- HTML 5
- CSS 3
- Bootstrap
- JavaScript
- NPM
- React.js
- Node.js
- Axios
- Express.js
- RESTful API's
- MongoDB
- Mongoose
- Heroku
- Google Books API

## Future Enhancements
Future enhancements would allow for the user to easily search through the books they have saved to their library as well as exclude API search results if the book already exists in the database.
