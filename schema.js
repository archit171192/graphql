// Construct a schema, using GraphQL schema language

const typeDefs = `type Author {
    id: String
    age: Int
    name: String
    books: [ String ]
}

type Query {
    authors: [ Author ]
    author(id: String): Author
    author_by_age(age: Int): [ Author ]
},
type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]!): Author
    deleteAuthor(id: String!): Author
    updateAuthor(id: String!, name: String!): Author
}

`;

export default typeDefs;
