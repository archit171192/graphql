import mongoose from 'mongoose';
import authorModel from './models/author.js';

// Provide resolver functions for schema fields

const resolvers = {
    Query: {
        authors: () => {
            return authorModel.find({});
        },
        author: (root, {id}) => {
            return authorModel.findOne({id : id});
        },
        author_by_age: (root, {age}) => {
            return authorModel.find({age : age});
        }
    },
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({name: name, age: age, books: books});
            return author.save();
        },
        deleteAuthor: (root, { id }) => {
            return authorModel.findOneAndRemove({id: id});
        },
        updateAuthor: (root, {id, name}) => {
            console.log(id, name);
            return authorModel.findOneAndUpdate({id: id}, {name: name});
        }
    }
};
export default resolvers;