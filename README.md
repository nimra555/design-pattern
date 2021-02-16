**Note: I implement this task in javascript language..so that i create index.html file in which i add script source and create app.js for coding**

# What is Design pattern?
    Design pattern is a general repeatable solution to a commonly occurring problem in software design.
    
### Why we use it?
- Solutionare reuseable.
- Software Development fast
- A catalog of solution

### Types of Design Pattern?
    It has three types and all types have sub types.
1. Creational Design Pattern
2. Structural Design Pattern
3. Behavioral Design Pattern

**Factory Method**
   A factory is just an object that creates or manufactures different objects.It belongs to the creational patterns.
- In this design pattern first create developer or tester function with name parameter.In this function i write name and type.
- Employeesfactory function for creating employess.in this function first i write create function.it has two parameter name and type.
- then we add switch case for differentiate whether it is developer or tester...if it is developer then we create developer instance else tester instance.
- now we create a instance of employerfactory by new keyword.
- create a function called for employerinfo. 
- now we add a const employeess and assign a value of empty array [].
- employess.push(employessFactory.create("Ali","developer"))...in this employees.push we call employeesfactory.create.
- then apply loop on employees for show one by one employer info.

**Singleton** 
  it comes in handy when you want to limit the number of instances of an object to atmost 1...usefull when only one object is needed.It belongs to the creational patterns.
-  first we create a process  function so check status of process e.g start,stop.
- then a create singleton function inside the function it have two function one is ProcessManager in it a numprocess value is 0.
- then declared a var pManager and createProcessManager function in this function create a instance of processManager.
- return getProcessManager  and check if pManager is equal  to null pManager = createProcessManager().
- last call function and create a const processManager assign a value Singleton.getProcessManager().

**Builder**

  Builder pattern is a design pattern to provide a flexible solution for creating objects. Builder pattern separates the construction of a complex object from its                 representation.Builder pattern builds a complex object using simple objects by providing a step by step approach. It belongs to the creational patterns.
  
- first create a Cunstruction function Employer and it has four parameter.
- second create a employerBuilder function first declare four variable, in return statement create four function setName,setAge,setCity,setPosition.
- build function for  instance of employer.
- last create instance of EmployerBuilder and set all things.
  
**Strategy design pattern**  

   The strategy pattern is a behavioral design pattern that enables selecting an algorithm at runtime.The main feature of this pattern is that the client have a set of              algorithms in which a specific algorithm will be selected for use during runtime. This algorithms are interchangeable between them.
  
- It has three function fedex,ups,usps and inside it calculate function which return shipping value.
- shipping function has two  function setStrategy and company  parameter and calculate for company calculate pkg.
- now create fedex,ups and usps instance.
- then create shipping instance.last call shipping.setStrategy("fedex").

**Prototype Design Pattern**

   Fully initialized instance to be copied or cloned prototype pattern is creation pattern based on clonning a preconfigured objects ideas that you pick an object that is          configured already created.
   
- In movies function three parameter title,times,series.
- then movies.prototype.toString  function  for movie name and title.
- then createinstance of Movies.
- last console it.

  **Check the output on console**
  
  
  
  
