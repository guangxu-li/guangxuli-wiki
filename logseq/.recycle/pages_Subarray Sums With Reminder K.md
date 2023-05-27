- Counting all subarray that achieves this: `nums[i:j] % p = k`.
- Empty subarray is not allowed.
- ```python
  # prefix_sum[i] = m * p + a
  # prefix_sum[j] = n * p + b
  #
  # subarray_sum = prefix_sum[j] - prefix_sum[i] = (m - n) * p + (b - a)
  # subarray_sum % p = prefix_sum[j] % p - prefix_sum[i] % p = (b - a) % p
  #
  # Meanwhile:
  # subarray_sum % p = rem
  #   -> (b - a) % p = rem
  #   -> a = (b - rem) % p
  def minSubarray(self, nums: List[int], p: int, k: int) -> int:
    pre_sum = list(accumulate(nums, initial=0))
  
  	counter, cnt = Counter(), 0
    for i, b in enumerate(pre_sum):
        b %= p
        a = (b - k) % p
  
        # we need to put it into the dict first to cover the empty subarray solution.
        # For example: nums: [1], p: 1
  	  cnt += counter[a]
        counter[b] += i
  
    return _min if _min < len(nums) else -1
  ```