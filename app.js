// factory pattern 
// a factory is just an object that creates or manufactures
// different objects

// example i own a software buisness and i have employess
// i have 2 types of employess...developer who write code and tester who test code
// i want to set a database so i can keep track of all employees

console.log("start factory design pattern");

function Developer(name){
    this.name = name;
    this.type = "developer";
}

function Tester(name){
    this.name = name;
    this.type = "tester";
}

function EmployessFactory(){
    this.create = (name,type) => {
        switch (type){
            case "developer":
                return new Developer(name)
                break;
            case "tester":
                return new Tester(name)
                break;    
        }
    }
}

function called(){
    console.log(`Hi!,I am ${this.name} and I am a ${this.type}`)
}

const employessFactory = new EmployessFactory();

const employess = [];

employess.push(employessFactory.create("Ali","developer"));
employess.push(employessFactory.create("Haseeb","tester"));

employess.forEach((emp)=>{called.call(emp)});

console.log("end factory design pattern");

console.log("start singleton design pattern");


//Singleton design pattern

// it comes in handy when you want to limit the number of instances of 
// an object to atmost 1...usefull when only one object is needed.

// example i want to write a program that manages  process and the two  main components of this program 
// is going to be your process and your process PushManager.but you only want to have one process manager


function Process(state){
    this.state = state;
}

const Singleton  = (function(){
    function ProcessManager(){
        this.numProcess = 0;
    }

    let pManager 

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }

    return{
        getProcessManager:()=>{
            if(!pManager){
                pManager = createProcessManager()
                return pManager
            }
        }
    }
})()

const processManager = Singleton.getProcessManager();
console.log(processManager);

console.log("end singleton design pattern");

console.log("start builder design pattern");


// Builder pattern 

// Builder pattern is a design pattern to provide a flexible solution for creating objects. Builder pattern separates the construction of a complex object from its representation.

// Builder pattern builds a complex object using simple objects by providing a step by step approach. It belongs to the creational patterns.

let Employee =  function(name,age,city,position) {
    this.name=name;
    this.age=age;
    this.city=city;
    this.position=position;
}

let EmployeeBuilder = function () {
    let name;
    let age;
    let city;
    let position;

    return{
        setName: function (name) {
            this.name=name;
            return this;
        },

        setAge: function (age) {
            this.age=age;
            return this;
        },

        setCity: function (city) {
            this.city=city;
            return this;
        },

        setPosition: function (position) {
            this.position=position;
            return this;
        },

        build:function() {
            return new Employee(name,age,city,position);
        }
    };
};

let employee=new EmployeeBuilder().setName("Imran").setAge(30).setCity("karachi").setPosition("Senior Software Engineer");
console.log(employee);

let employee2=new EmployeeBuilder().setName("Ali").setAge(23).setCity("karachi").setPosition("Intern Software Engineer");
console.log(employee2);

console.log("end builder design pattern");

console.log("start strategy design pattern");


//Strategy design pattern

// The strategy pattern is a behavioral design pattern that enables selecting an
// algorithm at runtime 

// The main feature of this pattern is that the client have a set of algorithms in
// which a specific algorithm will be selected for use during runtime. This
// algorithms are interchangeable between them.

// In this example we have a product order that needs to be shipped from a warehouse to a customer. Different shipping companies are evaluated to determine the best price. This can be useful with shopping carts where customers select their shipping preferences and the selected Strategy returns the estimated cost.

function Fedex() {
    this.calculate = package => {
        //price
        return `$43.20`;
    }
}

function UPS() {
    this.calculate = package => {
        //price
        return `$45.95`;
    }
}

function USPS() {
    this.calculate = package => {
        //price
        return `$39.40`;
    }
}

function Shipping() {
    this.company = "";
    this.setStrategy = (company) => {
        this.company = company
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(`Fedex ${shipping.calculate(fedex)}`)

shipping.setStrategy(ups);
console.log(`UPS ${shipping.calculate(ups)}`)

shipping.setStrategy(usps);
console.log(`USPS ${shipping.calculate(usps)}`)

console.log("end strategy design pattern");

console.log("start prototype design pattern");


//prototype pattern

// fully initialized instance tobe copied or cloned

// prototype pattern is creation pattern based on clonning a preconfigured objects
// ideas that you pick an object that is configured already created.


function Movies (title,times,series) {
    this.title = title;
    this.series = series;
    this.times = times; 
}

Movies.prototype.toString = function(){
    return `I saw ${this.title} movie ${this.times} times.`
} 

let movie1 = new Movies("Harry Potter",2,"novel");
let movie2 = new Movies("Despicable Me 3",3,"comedy");


console.log(movie1);
console.log(movie2);
console.log(movie1.toString());
console.log(movie2.toString());

console.log("end prototype design pattern");


// ******************END*************************