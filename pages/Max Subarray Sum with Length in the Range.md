- The following code snippet finds the maximum subarray sum with length in the range [a, b] in `O(n)` time complexity.
- ```python
  from collections import deque
  from itertools import accumulate
  
  
  # Example:
  # a = 2, b = 4
  # Assume we have the following arr and prefix sum array
  # 1, 2, 3, 4,  5
  # 0, 1, 3, 6, 10, 15
  #
  #
  # we define the sliding window as following:
  # 1            2         3     4     5
  # 0            1,        3,    6,    10,   15
  # subarray_lo          win_lo       win_hi
  #
  # 1. pre_sum[win_hi] - pre_sum[subarray_lo] = 1 + 2 + 3 + 4
  # 2. the sliding window ends when win_lo passed the final element in pre_sum
  #   - win_lo <= n
  #   - win_hi = win_lo + win_len <= n + win_len
  #
  # For each sliding window, we need to know the largest prefix_sum[i] for win_lo <= i <= win_hi.
  # Then, prefix_sum[win_lo] - prefix_sum[subarray_lo] is one answer candidate.
  def max_subarray_sum_with_len_range(self, arr: List[int], a, b: int) -> int:
      n = len(arr)
      win_len = b - a
  
      pre_sum = list(accumulate(arr, initial=0))  # prefix sum before i (exclusive)
  
      dq = deque()
      _max = -float("inf")
  
      for win_hi in range(a, n + win_len + 1):
          if dq and dq[0] < win_hi - win_len:
              dq.popleft()
  
          if win_hi <= n:
              while dq and pre_sum[dq[-1]] <= pre_sum[win_hi]:
                  dq.pop()
              dq.append(win_hi)
  
          if win_hi >= b:
              _max = max(_max, pre_sum[dq[0]] - pre_sum[win_hi - b])
  
      return int(_max)
  
  
  ```