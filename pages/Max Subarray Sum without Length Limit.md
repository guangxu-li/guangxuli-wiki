- ```python
  from typing import List
  
  def max_sum_subarray(nums: List[int]) -> int:
    local_max = global_max = -float("inf") # if allow to choose empty subarray, then set to 0
    for num in nums:
        local_max = max(num, num + local_max)
        global_max = max(global_max, local_max)
  
    return int(global_max)
  ```
-