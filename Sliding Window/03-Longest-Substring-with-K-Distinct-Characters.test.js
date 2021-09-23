//Given a string, find the length of the longest substring in it with no more than K distinct characters

const longest_substring_with_k_distinct = function(str, k) {
  let [distinct, windowStart, longest] = [{}, 0, 0]

  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd]
    
    !!distinct[char] ? distinct[char] += 1 : distinct[char] = 1

    while (Object.keys(distinct).length > k) {
      const leftChar = str[windowStart]
      distinct[leftChar] -= 1

      if (distinct[leftChar] === 0) delete distinct[leftChar] 

      windowStart++
    }
    longest = Math.max(longest, windowEnd - windowStart + 1)
  }
  
  return longest;
};

describe("Find the length of the longest substring in it with no more than K distinct characters", () => {
  
  // Input: String="araaci", K=2 
  // Output: 4
  // Explanation: The longest substring with no more than '2' distinct characters is "araa"
  it("K = 2 and string = 'araaci'", () => {
    expect(
      longest_substring_with_k_distinct("araaci", 2)
    ).toEqual(4)
  })

  // Input: String="araaci", K=1 
  // Output: 2
  // Explanation: The longest substring with no more than '1' distinct characters is "aa"
  it("K = 1 and string = 'araaci'", () => {
    expect(
      longest_substring_with_k_distinct("araaci", 1)
    ).toEqual(2)
  })

  // Input: String="cbbebi", K=3 
  // Output: 5
  // Explanation: The longest substring with no more than '3' distinct characters are "cbbeb" & "bbebi"
  it("K = 3 and string = 'cbbebi'", () => {
    expect(
      longest_substring_with_k_distinct("cbbebi", 3)
    ).toEqual(5)
  })

  // Input: String="cbbebi", K=10
  // Output: 6
  // Explanation: The longest substring with no more than '10' distinct characters is "cbbebi"
  it("K = 10 and string = 'cbbebi'", () => {
    expect(
      longest_substring_with_k_distinct("cbbebi", 10)
    ).toEqual(6)
  })
})