- Calculate the max subarray sum after exactly one `nums[i] = nums[i] * nms[i]` operation.
- ```python
  # dp[i][0] means max sum for nums[:i + 1] without any modification
  # dp[i][1] means max sum for nums[:i + 1] with exactly one modification
  #
  # dp[0][0] = max(0, nums[0])
  # dp[0][1] = nums[0] * nums[0]
  
  # dp[i][0] = max(nums[0], nums[0] + dp[i - 1][0]) -> Kadane's Algorithm
  # dp[i][1] = max(
  #                   nums[0] * nums[0],
  #                   nums[0] * nums[0] + dp[i - 1][0],
  #                   nums[0] + dp[i - 1][1]
  #               )
  def maxSumAfterOperation(self, nums: List[int]) -> int:
        # local_max:        local_max without any modification
        # local_max_alt:    local_max with exactly one modification
        local_max = local_max_alt = global_max = 0
        for num in nums:
            # WARN:
            # local_max_alt depends on local_max, so we need to calculate the local_max_alt first.
            # Otherwise, local_max might be updated first.
            local_max_alt = max(num * num, num * num + local_max, num + local_max_alt)
            local_max = max(num, num + local_max)
  
            # After done all calculation, local_max_alt will always >= local_max
            global_max = max(global_max, local_max_alt)
  
        return global_max
  ```