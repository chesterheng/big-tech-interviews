const { encode, decode } = require("./encodeDecodeStrings");

test("encodeDecodeStrings", () => {
  expect(encode(["lint", "code", "love", "you"])).toBe(
    "4#lint4#code4#love3#you"
  );
  expect(decode("4#lint4#code4#love3#you")).toEqual([
    "lint",
    "code",
    "love",
    "you",
  ]);
});
