- ```python
  from collections import defaultdict
  from functools import reduce
  - Trie = lambda: defaultdict(Trie)
  root = Trie()
  - words = ["word", "weak", "week", "for", "four"]
  for w in words:
  	reduce(dict.__getitem__, w, root)["END"] = w
  ```