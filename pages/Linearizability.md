alias:: Linearizable

- Protocol
	- A system need to guarantee the following to guarantee linearizability :
	- A read operation returns **the most recent** write, **regardless of the clients**.
	- **All subsequent** read ops should return the same result until the next write, **regardless of the clients**.
	- `the most recent` and `all subsequent` are both determined by time.
- Models
	- [[Primary-Backup Replication]]
	- [[Chain Replication]]