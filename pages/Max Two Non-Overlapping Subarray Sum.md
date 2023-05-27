- [Problem](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/)
- ```python
  # Maintain two window:
  #   1. win_len = first_len = m
  #   2. win_len = second_len = n
  #
  # We can only focus on the fixed window order first.
  #   1. win1 starts from nums[:m] to nums[-m-n:-n]
  #   2. win2 starts from nums[m:m+n] to nums[-n:]
  # We need to maintain the largest win1 sum that we've found for the cur win2 to form a local candidate.
  #
  # Do the above step twice with different window priority.
  def maxSumTwoNoOverlap(self, nums: List[int], m: int, n: int) -> int:
    def max_sum(m: int, n: int) -> int:
        sum_left = sum(nums[:m])
        sum_right = sum(nums[m:m + n])
  
        max_left, _max = sum_left, sum_left + sum_right
        for i in range(m + n, len(nums)):
            sum_left += nums[i - n] - nums[i - m - n]
            sum_right += nums[i] - nums[i - n]
  
            max_left = max(max_left, sum_left)
            _max = max(_max, max_left + sum_right)
        return _max
  
    return max(max_sum(m, n), max_sum(n, m))
  
  ```