// Given a string, find the length of the longest substring, 
// which has all distinct characters

const non_repeat_substring = function(str) {
  let windowStart = 0,
    maxLength = 0,
    characters = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
    const rightChar = str[windowEnd];
    if (rightChar in characters){
      windowStart = Math.max(windowStart, characters[rightChar] + 1);
    }
    characters[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

describe("Find the length of the longest substring which has all distinct characters", () => {
  // Input: String="aabccbb"
  // Output: 3
  // Explanation: The longest substring with distinct characters is "abc"
  it("string = 'aabccbb'", () => {
    expect(
      non_repeat_substring("aabccbb")
    ).toEqual(3)
  })

  // Input: String="abbbb"
  // Output: 2
  // Explanation: The longest substring with distinct characters is "ab"
  it("string = 'abbbb'", () => {
    expect(
      non_repeat_substring("abbbb")
    ).toEqual(2)
  })

  // Input: String="abccde"
  // Output: 3
  // Explanation: Longest substrings with distinct characters are "abc" & "cde"
  it("string = 'abccde'", () => {
    expect(
      non_repeat_substring("abccde")
    ).toEqual(3)
  })
})
