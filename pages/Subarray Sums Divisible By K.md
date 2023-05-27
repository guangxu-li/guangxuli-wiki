- ```python
  from collections import Counter
  from itertools import accumulate
  from math import comb
  from typing import List
  
  
  # First calculate the prefix sum of A
  # Then we need find two points in the prefix sum array that they have the same reminder when dividing by A
  # For example:
  #   A = 7
  #   prefix_sum[lo] = m * A + b
  #   prefix_sum[hi] = n * A + b
  #   sum[lo:hi] = prefix_sum[hi] - prefix_sum[lo] = (m - n) * A -> it's divisible by A.
  #
  # So we can count by reminder of how prefix_sum[i] % A.
  # Group the elements together by the reminder. And the number of subarry inside the group is C(group_size, 2).
  # It means how many combinations to choose two out of the whole group.
  #
  # NOTE:
  # Remember to add one 0 into the counter. Consider this case:
  # A = 7
  # arr = [7]
  class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        return sum(comb(v, 2) for v in Counter(i % k for i in accumulate(nums, initial=0)).values())
  
  ```