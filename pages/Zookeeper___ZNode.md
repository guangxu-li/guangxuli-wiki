alias:: znodes, ZNode
title:: Zookeeper/ZNode

- Watches
    - Clients can set [watches]([[ZooKeeper/Watch]]) on znodes and receive a notification when the watches are triggered.
        - Changes to the node trigger the watch and then clear the watch.
- Data Access
    - Read and write to a znode is atomically.
    - Each node has an [[access control list]] that restricts who can do what.
    - Not designed to be a general or large object store.
        - It's designed to manage coordination data which is typically small: measured in kilobytes.
            - The ZooKeeper client and server implementations have sanity checks to ensure that znodes have less than 1M of data.
        - A workaround:
            - Store the data on a bulk storage system, such as [[NFS]] or [[HDFS]].
            - Store the pointers to the storage locations in ZooKeeper.
- Node Type
    - Persistent Nodes
      id:: bdc0f5e3-7761-47b4-88fe-2e07e686497a
        - ZNode is not deleted when the [[ZooKeeper/Session]] ends.
    - Ephemeral Nodes
        - ZNode is deleted when the [[ZooKeeper/Session]] ends.
            - Not allow to have children nodes because of this
            - `getEphemerals()` retrieves the list of ephemeral nodes created by the session for the given path.
                - If the path is empty, it will list all ephemeral nodes for the session.
    - Sequence Nodes
      id:: 27d0d05b-65d1-4e46-bdc1-515cae03904e
        - Append a monotonically increasing counter to the end of the path.
            - signed int32 type
                - Possible to overflow: -2147483648
            - The counter is unique to the parent node.
            - The counter has a format example: `00000012345`
    - Container Nodes
        - *Added in v3.6.0*
        - When the last child of a container is deleted, the container becomes a candidate to be deleted by the server at some point in the future.
            - Prepare to get `KeeperException.NoNodeException` when creating children inside of container znodes.
    - TTL Nodes
      id:: ba52b71f-84d0-49ab-86ca-164ff2695b3c
        - *Added in v3.6.0*
        - When creating [persistent](((bdc0f5e3-7761-47b4-88fe-2e07e686497a))) or persistent [sequential](((27d0d05b-65d1-4e46-bdc1-515cae03904e))) znodes, it's optionally to set a a TTL in milliseconds for the znode.
            - If the znode without any children is not modified with in the TTL, it will become a candidate to be deleted by the server at some point in the future.
- [[Zookeeper/ZNode]] maintains a stat structure. ``And it includes the following info:
  id:: b2870e0b-d7fd-4be5-b8ba-d451d506e20e
    - **czxid** The zxid of the change that caused this znode to be created.
    - **mzxid** The zxid of the change that last modified this znode.
    - **pzxid** The zxid of the change that last modified children of this znode.
    - **ctime** The time in milliseconds from epoch when this znode was created.
    - **mtime** The time in milliseconds from epoch when this znode was last modified.
    - **version** The number of changes to the data of this znode.
        - For a write operation, if the version it supplies doesn't match the actual version of the data, the option will fail.
            - [[Optimistic Locking]]
    - **cversion** The number of changes to the children of this znode.
    - **aversion** The number of changes to the [[ACL]] of this znode.
    - **ephemeralOwner**
        - The session id of the owner of this znode if the znode is an ephemeral node.
        - If it is not an ephemeral node, it will be zero.
    - **dataLength** The length of the data field of this znode.
    - **numChildren** The number of children of this znode.