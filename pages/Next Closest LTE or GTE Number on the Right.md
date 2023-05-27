- Description
	- Given an array nums, for each index of the array, we need to find the **index** of the next closest LTE/GTE number in the right sub array.
		- If there's no LTE/GTE number, set it to n which n is the length of the array.
		- Example
		  ```
		  nums = [1, 1, 5, 3, 4, 2]
		  lte = [1, 6, 4, 5, 5, 6]
		  gte = [1, 5, 6, 4, 6, 6]
		  ```
- Solution
	- LTE
		- ```python
		  def next_closest_lte_num_on_the_right(nums):
		  	n = len(nums)
		  	nxt_lower = [n] * n
		  
		        stack = []
		        for _, i in sorted((-a, i) for i, a in enumerate(arr)):
		            while stack and stack[-1] < i:
		                nxt_lower[stack.pop()] = i
		            stack.append(i)
		  ```
	- GTE
		- ```python
		  def next_closest_gte_num_on_the_right(nums):
		  	n = len(nums)
		  	nxt_higher = [n] * n
		  
		        stack = []
		        for _, i in sorted((a, i) for i, a in enumerate(arr)):
		            while stack and stack[-1] < i:
		                nxt_higher[stack.pop()] = i
		            stack.append(i)
		  ```