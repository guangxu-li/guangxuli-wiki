- A graph traversal and path search algorithm.
- At each iteration of its main loop, A* needs to determine which of its paths to extend.
	- It selects the path that minimizes
		- $$f(n) = g(n) + h(n)$$
			- where $n$ is the next node on the path
			- $g(n)$ is the cost of the path from the start node to $n$
			- $h(n)$ is a heuristic function that estimates the cost of the cheapest path from $n$ to the goal.
	- If the heuristic function is admissible, meaning that it never overestimates the actual cost to get to the goal, A* is guaranteed to return a least-cost path from start to goal.
- Typical implementations of A* use a [[Priority Queue]] to perform the repeated selection of minimum (estimated) cost nodes to expand.
	- This priority queue is known as the *open set* or *fringe*
- Algorithm
	- The node with the lowest  $f(x)$ value is removed from the queue
	- The $f$ and $g$ values of its neighbors are updated accordingly
	- These neighbors are added to the queue.
	- The algorithm continues until a removed node (thus the node with the lowest $f$ value out of all fringe nodes) is a goal node. The $f$ value of that goal is then also the cost of the shortest path, since $h$ at the goal is zero in an admissible heuristic.
	- With a consistent heuristic, A* is guaranteed to find an optimal path without processing any node more than once and A* is equivalent to running [[Dijkstra's Algorithm]] with the [[reduced cost]]
		- $$d^{'}(x,y)=d(x,y)+h(y)-h(x)$$
- Implementation
	- ```python
	  from collections import defaultdict
	  import heapq
	  
	  
	  def reconstruct_path(cameFrom: dict, current) -> list:
	    total_path = [current]
	    while current in cameFrom.Keys:
	        current = cameFrom[current]
	  total_path = [current] + total_path
	  
	    return total_path
	  
	  # A* finds a path from start to goal.
	  # h is the heuristic function. h(n) estimates the cost to reach goal from node n.
	  def heuristic(cur) -> int:
	  	return "calculate the heuristic here"
	  
	  def A_Star(start, goal, h):
	    # The set of discovered nodes that may need to be (re-)expanded.
	    # Initially, only the start node is known.
	    # This is usually implemented as a min-heap or priority queue rather than a hash-set.
	    openSet = [start]
	  
	    # For node n, cameFrom[n] is the node immediately preceding it on the cheapest path from start
	    # to n currently known.
	    cameFrom = dict()
	  
	    # For node n, gScore[n] is the cost of the cheapest path from start to n currently known.
	    gScore = defaultdict(lambda: float("inf"))
	    gScore[start] = 0
	  
	    # For node n, fScore[n] := gScore[n] + h(n). fScore[n] represents our current best guess as to
	    # how short a path from start to finish can be if it goes through n.
	    fScore = defaultdict(lambda: float("inf"))
	    fScore[start] = heuristic(start)
	  
	    while not openSet:
	        current = "the node in openSet having the lowest fScore[] value, usually use min-heap"
	        if current == goal:
	            return reconstruct_path(cameFrom, current)
	  
	        openSet.remove(current)
	        for each neighbor of current:
	            # tentative_gScore is the distance from start to the neighbor through current
	            tentative_gScore = gScore[current] + distance(current, neighbor)
	            if tentative_gScore < gScore[neighbor]:
	                # This path to neighbor is better than any previous one. Record it!
	                cameFrom[neighbor] = current
	                gScore[neighbor] = tentative_gScore
	                fScore[neighbor] = gScore[neighbor] + h(neighbor)
	                if neighbor not in openSet:
	                    openSet.add(neighbor)
	  
	    return failure
	  ```