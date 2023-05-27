- Introduction
	- It's a special [[Primary-Backup Replication]] system.
	- All servers are linearly ordered to form a chain with the primary at the end.
	- In "classic" primary backup systems, the topology resembles a start with the primary  at the center.
	- <mark style="background: #FF5582A6;">The goal is to achieve high throughput and availability without sacrificing strong consistency.</mark>
- Protocol
	- All read requests are sent to the tail (primary) of the chain.
	- All write requests are sent to the head (backup), which then passes the update along the chain.
		- Only the write requests are passed down the chain to avoid unnecessary work.
		- The tail acks requests and passed up the chain.
	- All requests are ordered by the primary at the tail of the chain.
- Failure Cases
	- The protocol considers only three failure cases, all of which are fail-stop failures:
	- Fail-stop of the head (backup)
		- The next server in the chain takes over as head.
	- Fail-stop of the tail (primary)
		- The previous server in the chain takes over as tail.
	- Fail-stop of a middle server
		- Its two neighbors bypass it  and connect.
		- The later server sends the other one the list of requests it has seen
			- To help the other server forward any requests that were dropped when the middle server failed.
			  
			  Failures are detected by a Paxos-service.
- Reference
	- [Chain Replication](https://dsrg.pdos.csail.mit.edu/2013/08/08/chain-replication/)