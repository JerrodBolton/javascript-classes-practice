// alert(" What if can do this really fast");

// Create a class Product that represents a product sold online. A product has a price, quantity and name.

class ProductInfoBlueprint{
 constructor(price, quantity,name){
     this.price = price;
     this.quantity = quantity;
     this.name = name;
 };

// The class should have a method that prints a product's information in the following format:
// ``` Banana, price 1.1, amount 13```.  
 print(){
    //  I want this the to print in the console the following text...
    // ``` Banana, price 1.1, amount 13```. 
     console.log(`I have some ${this.name} and there $${this.price} I have ${this.quantity} of them.`);
 };
};


// I need to put something in the this.(variables)

let ProductInfo =[
    new ProductInfoBlueprint(1.1, 13, 'Bananas')
];

// Create two instances of the class and call the method created to print the product's details.
// ProductInfo[0].print(); // this is going to print things out that I need. 



// Review 2

// Define a class called Pet with three properties, type, breed and age. 

class PetInfoBlueprint{
 constructor( name, breed , age, type){
     this.name = name;
     this.breed = breed; 
     this.age = age;
     this.type = type;
 }

// Create a method called formatProperties that prints all object properties using string templating. 
    print(){
        //  for the years part you may want to add a if statement
        console.log( `Hey my name is ${this.name}, and am a ${this.breed}; I'm ${this.age} years old`);
    };

    // Create a method called changeAge that takes a number and updates the age property of an object.

    ageChanger(newAge){
            //  I want to change the info about my age.
         newAge = prompt("what is your age");
         this.age = newAge; // by putting this like this I written the age a different number .
        console.log( `Hey my name is ${this.name}, and am a ${this.breed}; I'm ${this.age} years old`);
         
    };
    // Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!". 
    // maybe I should do a foreach in this one 
    checkForDog(){
        if(this.type === "DOG"){
             this.age = this.age + 7 
             console.log( `Hey my name is ${this.name}, and am a ${this.breed}; I'm ${this.age} years old`);
        }
       else{
        console.log( `Hey my name is ${this.name}, and am a ${this.breed}; I'm ${this.age} years old`);
        alert("not a dog"); 
        };
    };
};

this.age = parseFloat(this.age);// I want to make this a number a number not a string 




let PetInfo = [
 new PetInfoBlueprint( "Tim","Western Harvest Mouse" , 5 ,"Mouse"),
 new PetInfoBlueprint("Jame","Alaskan Malamute", 6 , "DOG"),
 new PetInfoBlueprint("Tom","American Bulldogs", 9, "DOG" )

]

// I can add a for each
// Create an instance of the Pet Class called pet1. Print all property values of the object using the class method. 
// Create another instance of the Pet Class with diffrent property values called pet2. 
// PetInfo[0].print(); //this is going to print the information above
// PetInfo[1].print();// this is a Dog 
// PetInfo[2].print();// this is a Dog
// PetInfo[1].ageChanger();// Print all property values of the object using the class method. Change the age grade of pet1. 



// // Print the age of pet1 in dog years using the class method. Print the age of pet2 in dog years using the class method
// PetInfo[0].checkForDog();
// PetInfo[1].checkForDog();
// PetInfo[2].checkForDog();






