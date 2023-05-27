alias:: quorum

- [[ZooKeeper/ZAB Protocol]] and [ZooKeeper leader election](((ac1c1f9d-71bd-4966-b7c0-7d4b4c337806))) use quorums to guarantee a consistent view of the system.
- By default, ZooKeeper uses majority quorums.
- Other ways to construct quorums:
    - Weight:
        - Some servers' vote may be more important than the others.
    - Hierarchy of groups:
        - To form a quorum, we have to get a hold of enough servers from a majority of groups G
        - For each group g in G, the sum of votes from g is larger than half of the sum of weights in g.