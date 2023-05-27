alias:: zxid

- Use Case
    - ZooKeeper exposes the total ordering using a ZooKeeper transaction id (_zxid_).
        - All proposals will be stamped with a zxid when it is proposed and exactly reflects the total ordering.
- Definition
    - Representation:
        - `(epoch, counter)`
        - the epoch: 32-bits
        - the counter: 32-bits
    - 2.1. Epoch
        - It represents a change in leadership.
        - each new leader will have its own new epoch number.
- Counter
    - The leader increases the zxid counter to obtain a unique zxid for each proposal.
    - [[ZooKeeper/ZAB Protocol/Leader Activation]] will ensure only one leader uses  a given epoch.
- Reference
    - [Apache ZooKeeper](https://zookeeper.apache.org/doc/current/zookeeperInternals.html#sc_consistency)