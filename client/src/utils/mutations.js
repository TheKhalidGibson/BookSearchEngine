import {gql} from '@apollo/client'
export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      username
      _id
    }
  }
}

`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }


`;

export const SAVE_BOOK = gql `
mutation saveBook($bookData: bookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }

`;





export const REMOVE_BOOK = gql `
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      bookCount
      email
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }

`;

export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};