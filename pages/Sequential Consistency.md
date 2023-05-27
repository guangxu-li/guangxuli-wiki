alias:: Sequential Consistent

- Protocol
	- A system need to guarantee the following to guarantee sequential consistency:
	- A read operation returns **the most recent** write, **regardless of the clients**.
	- **All subsequent** read ops should return the same result until the next write, **regardless of the clients**.
	- `the most recent` and `all subsequent`
		- Ops within the same machine/CPU
			- Determined by time
			- Same as program order
		- Ops across machines/CPUs:
			- **Not** determined by time
- Models
	- [[Active Replication]]