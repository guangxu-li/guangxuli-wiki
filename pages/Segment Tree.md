- Use Case
    - Efficiently querying and updating ranges in an array.
        - Sum
        - Max
        - Min
        - etc.
- Data Structure
    - Binary tree
    - Leaf node represents a single element in the array
    - Non-leaf node  represents a range of elements that is combination of the range of its children
- Implementation
  collapsed:: true
    - ```python
      class SegmentTree:
        def __init__(self, arr):
            self.n = len(arr)
            self.tree = [0] * (4 * self.n)
            self.build(arr, 0, self.n - 1, 1)
      
        def build(self, arr, l, r, node):
            if l == r:
                self.tree[node] = arr[l]
                return
      
            mid = (l + r) // 2
            self.build(arr, l, mid, 2 * node)
            self.build(arr, mid + 1, r, 2 * node + 1)
      
            self.tree[node] = max(self.tree[2 * node], self.tree[2 * node + 1])
      
        def query(self, l, r, node, nl, nr):
            if l <= nl and nr <= r:
                return self.tree[node]
      
            mid = (nl + nr) // 2
            if r <= mid:
                return self.query(l, r, 2 * node, nl, mid)
            elif l > mid:
                return self.query(l, r, 2 * node + 1, mid + 1, nr)
            else:
                return max(self.query(l, r, 2 * node, nl, mid), self.query(l, r, 2 * node + 1, mid + 1, nr))
      
      arr = [1, 3, 2, 4, 5, 7, 6, 8]
      segment_tree = SegmentTree(arr)
      print(segment_tree.query(1, 7, 1, 0, len(arr) - 1)) # Output: 8
      
      ```
- Complexity
    - Time complexity:
        - Build the tree: $O(n)$
        - Query: $O(log_2{n})$
        - Update: $O(log_2{n})$
    - Space complexity: $O(n)$
        - More specifically, at most $4 * n - 1$ nodes allocation.
        - `n` is the number of leaf nodes.
- ---
- [[Binary Indexed Tree]]
    - they're both used for range querying and updating. But BIT is more memory efficient.