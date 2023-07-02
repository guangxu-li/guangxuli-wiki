- Intent
    - Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
- Also known as `Kit`
- Motivation
    - Consider a user interface toolkit that supports multiple look-and-feel standards such as Motif and Presentation Manager.
    - To be portable across look-and-feel standards, an application should not hard-code its widgets for a particular look and feel.
    - Instantiating look-and-feel-specific classes of widgets throughout the application makes it hard to change the look and feel later.
      background-color:: yellow
- Applicability
    - Use the Abstract Factory pattern when
        - a system should be independent of how its products are created, composed, and represented.
        - a system should be configured with one of multiple families of products.
        - a family of related product is designed to be used together, and you need to enforce this constraint.
        - you want to provide a class library of products, and you want to reveal just their interfaces, not their implementations.
- Structure
    - Based on [[Design Patterns/Catalog/Creational/Factory Method]]
        - ![Abstract Factory - Factory Method](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/guangxu-li/design-patterns-in-java/main/src/designpatterns/creational/abstractfactory/uml/abstract_factory_factory_method.puml)
    - Based on [[Design Patterns/Catalog/Creational/Prototype]]
        - ![Abstract Factory - Prototype](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/guangxu-li/design-patterns-in-java/main/src/designpatterns/creational/abstractfactory/uml/abstract_factory_prototype.puml)
- Collaborations
    - Normally a [singleton]([[Design Patterns/Catalog/Creational/Singleton]]) of a concrete factory is created at run-time.
    - Abstract factory defers creation of product objects to its concrete factory subclass.
- Consequences
    - collapsed:: true
      + It isolates concrete classes.
        - Product class names are isolated in the implementation of the concrete factory; they do not appear in client code.
    - collapsed:: true
      + It makes exchanging product families easy.
        - Concrete factory class appears only once in an application where it's instantiated.
    - collapsed:: true
      + It promotes consistency among products.
        - Abstract factory forces an application use objects from only one family at a time.
    - - Supporting new kinds of products is difficult.
        - Requires extending the factory interface, which involves changing the abstract factory interface and all of its implementations.
- [Example](https://github.com/guangxu-li/design-patterns-in-java/tree/main/src/designpatterns/creational/abstractfactory)
- Related Patterns
    - Abstract factory interfaces are often implemented with [factory methods]([[Design Patterns/Catalog/Creational/Factory Method]]), but they can also be implemented using [prototype]([[Design Patterns/Catalog/Creational/Prototype]])
    - A concrete factory is often a [singleton]([[Design Patterns/Catalog/Creational/Singleton]]).