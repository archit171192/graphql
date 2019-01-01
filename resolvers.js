import mongoose from 'mongoose';
import authorModel from './models/author.js';

const authors = [
    {
        id: 1,
        name: "JK Rowling",
        age: 50,
        books: [ "Harry Potter", "Curse child" ]

    },
    {
        id: 2,
        name: "George RR Martin",
        age: 70,
        books: [ "Game of Thrones", "A song of ice and fire" ]

    },
    {
        id: 3,
        name: "Stephen king",
        age: 60,
        books: [ "The Green Mile", "Carrie" ]

    }
];

// Provide resolver functions for schema fields

const resolvers = {
    Query: {
        authors: () => {
            return authors;
        },
        author: (root, {id}) => {
            return authors.find(author => author.id === id);
        },
        author_by_age: (root, {age}) => {
            return authors.filter(author => author.age > age);
        }
    },
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({name: name, age: age, books: books});
            return author.save();
        }
    }
};
export default resolvers;