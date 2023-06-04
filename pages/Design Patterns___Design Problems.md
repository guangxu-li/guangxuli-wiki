description:: Design problems and how design patterns solve them.

- *Finding appropriate objects*
    - The hard part about object-oriented design is decomposing a system into objects
    - Design patterns help to identify less-obvious abstractions and the objects that can capture them.
        - e.g. Objects that represent a process or algorithm don't occur in nature, yet they're crucial part of flexible designs.
- *Determining Object Granularity*
- *Specifying Object Interfaces*
    - Design patterns help to define interface by identifying key elements and kinds of data that get sent across an interface.
    - Design patterns also specify relationships between interfaces.
- *Specifying Object Implementations*
- *Putting Reuse Mechanisms to Work*
- *Relating Run-Time and Compile-Time Structures*
    - Many design patterns (in particular those that have object scope) capture the distinction between compile-time and run-time structures explicity.
- *Designing for Change*
    - Creating an object by specifying a class explicitly.
      collapsed:: true
        - It commits to a particular ==implementation== instead of a particular ==interface== ==which can complicate future changes==.
        - To avoid it, create objects indirectly.
            - [[Design Patterns/Catalog/Creational/Abstract Factory]]
            - [[Design Patterns/Catalog/Creational/Factory Method]]
            - [[Design Patterns/Catalog/Creational/Prototype]]
    - Dependence an object by specifying a class explicitly.
      collapsed:: true
        - [[Design Patterns/Catalog/Behavioral/Chain of Responsibility]]
        - [[Design Patterns/Catalog/Behavioral/Command]]
    - Dependence on hardware and software platform.
      collapsed:: true
        - [[Design Patterns/Catalog/Creational/Abstract Factory]]
        - [[Design Patterns/Catalog/Structural/Bridge]]
    - Dependency on object representations or implementations.
      collapsed:: true
        - Hiding dependencies' representations or implementations from clients keeps changes from cascading.
            - [[Design Patterns/Catalog/Creational/Abstract Factory]]
            - [[Design Patterns/Catalog/Structural/Bridge]]
            - [[Design Patterns/Catalog/Behavioral/Memento]]
            - [[Design Patterns/Catalog/Behavioral/Proxy]]
    - Algorithmic dependencies.
      collapsed:: true
        - Algorithms that are likely to change should be isolated.
            - [[Design Patterns/Catalog/Creational/Builder]]
            - [[Design Patterns/Catalog/Behavioral/Iterator]]
            - [[Design Patterns/Catalog/Behavioral/Strategy]]
            - [[Design Patterns/Catalog/Behavioral/Template]]
            - [[Design Patterns/Catalog/Behavioral/Visitor]]
    - Tight coupling.
      collapsed:: true
        - Design patterns use techniques such as abstract coupling and layering to promote loosely coupled systems.
            - [[Design Patterns/Catalog/Creational/Abstract Factory]]
            - [[Design Patterns/Catalog/Structural/Bridge]]
            - [[Design Patterns/Catalog/Behavioral/Chain of Responsibility]]
            - [[Design Patterns/Catalog/Behavioral/Command]]
            - [[Design Patterns/Catalog/Structural/Facade]]
            - [[Design Patterns/Catalog/Behavioral/Mediator]]
            - [[Design Patterns/Catalog/Behavioral/Observer]]
    - Extending functionality by subclassing.
      collapsed:: true
        - ((647a075a-09d2-4fb4-ac39-4780afb344bf))
            - [[Design Patterns/Catalog/Structural/Bridge]]
            - [[Design Patterns/Catalog/Behavioral/Chain of Responsibility]]
            - [[Design Patterns/Catalog/Structural/Composite]]
            - [[Design Patterns/Catalog/Structural/Decorator]]
            - [[Design Patterns/Catalog/Behavioral/Observer]]
            - [[Design Patterns/Catalog/Behavioral/Strategy]]
    - Inability to alter classes conveniently.
      collapsed:: true
        - [[Design Patterns/Catalog/Structural/Adapter]]
        - [[Design Patterns/Catalog/Structural/Decorator]]
        - [[Design Patterns/Catalog/Behavioral/Visitor]]