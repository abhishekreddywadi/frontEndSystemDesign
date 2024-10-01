const state = {
  users: [
    {
      id: 1,
      name: "John Doe",
      post: [
        {
          id: 1,
          title: "Post 1",
          content: "This is the first post",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      post: [
        {
          id: 2,
          title: "Post 2",
          content: "This is the second post",
        },
      ],
    },
  ],
};
// normalize the state

const normalizedState = {};

function normalizeUsers(users) {
  const normalizedUsers = {};
  users.forEach((user) => {
    normalizedUsers[user.id] = user;
    user.post.forEach((post) => {
      normalizedUsers[post.id] = post;
    });
  });
  return normalizedUsers;
}

normalizedState.users = normalizeUsers(state.users);

console.log(normalizedState.users);
