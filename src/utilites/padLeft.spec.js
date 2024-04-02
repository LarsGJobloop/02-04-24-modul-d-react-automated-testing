import { padLeft } from "./padLeft";
import { expect, test } from "vitest";

test("It should ensure the length is atleast as long as the given length", () => {
  // Arrange
  const str = "hello"
  const length = 10

  // Act
  const result = padLeft(str, length)

  // Assert
  expect(result.length).toBeGreaterThanOrEqual(length)
})

test("It should ensure the length is atleast as long as the given length", () => {
  // Arrange
  const str = "kim"
  const length = 10
  const expected = "       kim"

  // Act
  const result = padLeft(str, length, " ")

  // Assert
  expect(result).toEqual(expected)
})