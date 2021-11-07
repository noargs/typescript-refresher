// tsc --init
// tsc --build --clean

class Customer {

    // by default access modifier is "public"
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Alpha", "Bravo");

// myCustomer.firstName = "Alpha";
// myCustomer.lastName = "Brvo";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);