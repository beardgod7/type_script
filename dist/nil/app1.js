"use strict";
class animal {
    constructor(fullname) {
        this.fullname = fullname;
    }
}
class dog extends animal {
    constructor(fullname, age) {
        super(fullname);
        this.age = age;
    }
    speak() {
        return `my name is ${this.fullname} and am ${this.age}`;
    }
}
const bull = new dog('pitbul', 4);
const tee = bull.speak();
const lab = new dog('labadodo', 8);
console.log(tee);
console.log(lab.speak());
const to = {
    height: 57,
    pix: 'hdm'
};
const mee = {
    name: 'john',
    age: 34,
    image: to
};
const heee = mee.image;
console.log(heee);
class SavingsAccount1 {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        const interestRate = 0.05;
        const amountWithInterest = amount * (1 + interestRate);
        this.balance += amountWithInterest;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class CurrentAccount1 {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class FixedDepositAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        // Additional logic for FixedDepositAccount deposit
        this.balance += amount;
    }
    withdraw(amount) {
        // Additional logic for FixedDepositAccount withdrawal
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
// Client code
let savingsAccount2 = new SavingsAccount1(100);
let currentAccount2 = new CurrentAccount1(7000);
savingsAccount2.deposit(500);
currentAccount2.withdraw(1000);
console.log(savingsAccount2.getBalance()); // Output: 1500
console.log(currentAccount2.getBalance()); // Output: 1000
class SavingsAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        const interestRate = 0.05;
        const amountWithInterest = amount * (1 + interestRate);
        this.balance += amountWithInterest;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class CurrentAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
// Usage
let savingsAccount = new SavingsAccount(10);
let currentAccount = new CurrentAccount(2000);
savingsAccount.deposit(500);
currentAccount.withdraw(1000);
console.log(savingsAccount.getBalance()); // Output: 1500
console.log(currentAccount.getBalance()); // Output: 1000
class MyBaseClass {
    constructor() {
        this.myProtectedProperty = 20;
    }
}
class MyDerivedClass extends MyBaseClass {
    myMethod() {
        console.log(this.myProtectedProperty); // Can access myProtectedProperty within the subclass
    }
}
let obj = new MyBaseClass();
//console.log(obj.myProtectedProperty); // Error: Property 'myProtectedProperty' is protected and only accessible within class 'MyBaseClass' and its subclasses.
class BankAccount {
    constructor(initialBalance = 10000) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
let myAccount = new BankAccount();
// Try to access balance directly
// This will result in a compilation error because balance is private
//console.log(myAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// Accessing balance indirectly through getBalance method
console.log(myAccount.getBalance()); // Output: 1000
// Depositing money
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
// Withdrawing money
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // Output: 1300
class admin {
    constructor(name, age, office) {
        this.name = name;
        this.age = age;
        this.office = office;
    }
    register() {
        return (`${this.name} is an admin`);
    }
}
class vp extends admin {
    constructor(name, age, office, role) {
        super(name, age, office);
        this.role = role;
    }
    register() {
        return (`${this.name} is an admin and ${this.role}`);
    }
}
const me = new admin('john', 12, "no 9 okuala street");
const hi = new vp('ada', 43, 'irawo', 'sec');
const y = hi.register();
console.log(y);
