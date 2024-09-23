const users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 15 },
];
const sortAccordingToAge = () => {
  return users.sort((a, b) => a.age - b.age);
};
console.log(sortAccordingToAge());
module.exports = sortAccordingToAge;
