const sortAccordingToAge = require("../app");
test("testing the sort feature", () => {
  const sortedData = sortAccordingToAge();
  expect(sortedData[0].name).toBe("Charlie");
});
test("testing the sort feature not returning any undefined", () => {
  const sortedData = sortAccordingToAge();
  expect(sortedData).not.toBeUndefined();
});
