import { sum } from "..";

test("undefinedSum", () => {
  expect(sum()).toBe(0);
});

test("integerSum", () => {
  expect(sum(1, 2)).toBe(3);
});
