const authors = [
    {
        name: "JK Rowling",
        age: 50,
        books: [ "Harry Potter", "Curse child" ]

    },
    {
        name: "George RR Martin",
        age: 70,
        books: [ "Game of Thrones", "A song of ice and fire" ]

    }
];

const resolvers = {
    Query: {
        author: () => {
            return authors;
        }
    }
};
export default resolvers;