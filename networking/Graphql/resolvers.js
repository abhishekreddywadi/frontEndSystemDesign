export const resolvers = {
  Query: {
    getAuthors: () => {
      return [
        {
          id: 1,
          name: "John Doe",
        },
      ];
    },
    getBooks: () => {
      return [
        {
          id: 2,
          title: "hello, world",
        },
      ];
    },
  },
};
