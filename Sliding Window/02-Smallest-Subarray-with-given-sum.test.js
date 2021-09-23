// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0, if no such subarray exists.

const smallest_subarray_with_given_sum = function(s, arr) {
  let [windowStart, windowEnd, windowSum, minLength] = [0, 0, 0, Infinity]

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }

  return minLength === Infinity ? 0 : minLength
};

describe("Find the length of the smallest contiguous subarray whose sum is greater than or equal to S", () => {
  
  // Input: [2, 1, 5, 2, 3, 2], S=7 
  // Output: 2
  // Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2]
  it("S = 7 and array = [2, 1, 5, 2, 3, 2]", () => {
    expect(
      smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])
    ).toEqual(2)
  })

  // Input: [2, 1, 5, 2, 8], S=7 
  // Output: 1
  // Explanation: The smallest subarray with a sum greater than or equal to '7' is [8]
  it("S = 1 and array = [2, 1, 5, 2, 8]", () => {
    expect(
      smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])
    ).toEqual(1)
  })

  // Input: [3, 4, 1, 1, 6], S=8 
  // Output: 3
  // Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6]
  it("S = 8 and array = [3, 4, 1, 1, 6]", () => {
    expect(
      smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])
    ).toEqual(3)
  })
})