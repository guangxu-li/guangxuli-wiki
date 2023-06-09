- Type
	- [[Sequential Consistency]]
	- [[Ordered Sequential Consistency]]
	- [[Linearizability]]
- Comparison
	- Sequential consistency
		- Cares about the program order.
		- Guarantee the linearizability for ops inside the same machine/CPU.
		- <mark style="background: #CACFD9A6;">Free to reorder ops from **different clients** as long as the ordering from each client is preserved.</mark>
	- Ordered sequential consistency
		- Lies between in sequential consistency and linearizability
	- Linearizability
		- Cares about the time order.
		- Guarantee the strong consistency regardless of the clients.
		- <mark style="background: #CACFD9A6;">The interleaving across all clients is determined already base on the time.</mark>
- id:: 63de4934-5ba9-4a30-a9b6-34163bea285d
  ---
- [CSE 486/586 Distributed Systems Consistency --- 2](https://github.com/guangxu-li/the-sky-below/raw/main/assets/Consistency.pdf)