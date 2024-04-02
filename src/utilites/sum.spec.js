import { sum } from "./sum";
import {expect, test} from 'vitest'

test("sum should return 42 when passed in 10 and 32", () => {
  // Arrange
  const a = 10
  const b = 32
  const expected = 42

  // Act
  const result = sum(a, b)

  // Assert
  expect(result).toEqual(expected)
})
