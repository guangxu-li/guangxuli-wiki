alias:: zab, ZAB, ZAB protocol, ZooKeeper Atomic Broadcast
title:: ZooKeeper/ZAB Protocol

- It's an atomic messaging system that keeps all of the servers in sync.
- Notions
    - [[ZooKeeper/Characters]]
    - [[ZooKeeper/Quorum]]
- Guarantees, Properties, and Definitions
    - **Reliable delivery** : If a message `m`, is delivered by one server, message `m` will be eventually delivered by all servers.
    - **Total order** : If a message `a` is delivered before message `b` by one server, message `a` will be delivered before `b` by all servers.
    - **Causal order** : If a message `b` is sent after a message `a` has been delivered by the sender of `b`, message `a` must be ordered before `b`. If a sender sends `c` after sending `b`, `c` must be ordered after `b`.
- Phases:
    - ZooKeeper messaging
      		1. [[ZooKeeper/ZAB Protocol/Leader Activation]]
      		2. [[ZooKeeper/ZAB Protocol/Active Messaging]]
    - Failure Recovery
        - Follower down:
            - Clients detect the failure via [heartbeat](((c4610b5d-51d1-4847-ba1b-9fb856826d80))) and switched to other followers
        - Leader down:
            - Enter [[ZooKeeper/ZAB Protocol/Leader Activation]]