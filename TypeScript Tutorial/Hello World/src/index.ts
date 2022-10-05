let sales = 123_456_789
let course = 'TypeScript'
let is_published = true;

let level; //'any' type - do not use if possible
level = 1;
level =  'a'

function render(document: any) { // implicit any type
    console.log(document);
}

//array - values can be of any different type
let numbers: number[] = []
numbers.forEach(n => n.valueOf)

// tuples
let user: [number, string] = [1, 'Noah']
user.push(1); // not allowed, will error because it is a tuple not array

//enums
// hard-coding multiple constants
// const small = 1
// const medium = 2
// const large = 3

// PascalCase, using enums to define multiple values instead of hard coding constants
// compiler will set other values in ascending order automatically but only with numbers
// using the const keyword generates more optimized code
const enum Size {Small = 1, Medium, Large} 
let mySize: Size = Size.Medium;
console.log(mySize)

// Functions
// Typescript infers the type of the return, but best practice is to annotate the type being returned
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022)


// Objects
type Employee = {
    readonly id: number,
    name: string;
    retire: (date:Date) => void
}


let employee: Employee = {
    id: 1, 
    name: '',
    retire: (date: Date) => {
        console.log(date)
    }
};
// employee.id = 0; // not able to be modified because of readonly property

//Union Types
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2
}

//Intersection types
type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () =>{}
}

//Literal types
//Literal (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

//Nullable types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!')
}

//Optional Chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0)
// Optional property accedd operator
console.log(customer?.birthday?.getFullYear())

