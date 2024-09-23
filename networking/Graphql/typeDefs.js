export const typeDefs = `
type Author {
id : ID
name:String
books:[Book]
}
type Book {
id:ID
 title:String
 author:Author
}

type Query {
 getAuthors: [Author]
 getBooks: [Book]
}

`;
