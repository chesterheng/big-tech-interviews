const Monarchy = require("./Monarchy");

test("Monarchy", () => {
  const monarchy = new Monarchy("Jake");
  monarchy.birth("Catherine", "Jake");
  monarchy.birth("Tom", "Jake");
  monarchy.birth("Celine", "Jake");
  monarchy.birth("Peter", "Celine");
  monarchy.birth("Jane", "Catherine");
  monarchy.birth("Farah", "Jane");
  monarchy.birth("Mark", "Catherine");
  expect(monarchy.getOrderOfSuccession()).toEqual([
    "Jake",
    "Catherine",
    "Jane",
    "Farah",
    "Mark",
    "Tom",
    "Celine",
    "Peter",
  ]);

  monarchy.death("Jake");
  monarchy.death("Jane");
  expect(monarchy.getOrderOfSuccession()).toEqual([
    "Catherine",
    "Farah",
    "Mark",
    "Tom",
    "Celine",
    "Peter",
  ]);
});
