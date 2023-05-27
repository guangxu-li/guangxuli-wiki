alias:: ACL, Access Control List

- Access control similar to UNIX file access permissions
    - Example: `(ip: 19.22.0.0/16, READ)` gives the `READ` permission to any clients with an IP address prefix `19.22`.
    - No notion of an owner of a znode. But set the permissions to a group of IDs.
    - Not recursively apply to children.
- Permissions
    - CREATE: create node
    - READ: read note
    - WRITE: change node
    - DELETE: delete node
    - ADMIN: set permission