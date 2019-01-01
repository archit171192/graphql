// Construct a schema, using GraphQL schema language

const typeDefs = `type Author {
    id: Int
    age: Int
    name: String
    books: [ String ]
}

type Query {
    authors: [ Author ]
    author(id: Int): Author
    author_by_age(age: Int): [ Author ]
}

`;

export default typeDefs;
