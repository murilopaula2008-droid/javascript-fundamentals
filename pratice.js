// Study variabe


// numeric variable 
const anynumber = 1;
// Text variable
const anytext = "My text";

// array and object variable
const array = ["hi", "good day", "good afternoon", 10, 20];

// Object save address
const object = {key1: "Banana", key2: "apple", key3: "melon"};

// Spread arrays

// Here, he is put array in copyarray in the index zero
const copyarray = [array];
// console.log(copyarray);
// Now, lets use the method "spread = [...copyarray]" for spread array in the copyarray
const copyarraycorrect = [...array]
// console.log(copyarraycorrect);

// Spread object
// here, we lets put object in the copyobject using last logic show
const copyobject = {...object};
copyobject.key1 = "Hello, World!"
const {key1, key2, key3} = copyobject
console.log(key1)

// Destruture Object and Array

const array_for_destruture = ["good morning", "good afternoon", "goodnight", "good luck"];
const object_for_destruture = {newkey1: "bread", newkey2: "coffe", newkey3: "milk"};

// show destruture object
const {newkey1, newkey2, newkey3} = object_for_destruture;
console.log(newkey2);

// show destruture array
const [value1, value2, value3, value4] = array_for_destruture;
console.log(value2)




// Now, lets compare value and types using "if" and "Else"

// "==" when we want to compare values.
// "===" when we want to compare values and types


if (5 == "5") {
    console.log("he is equal")
} else {
    console.log("he is different")
}

// Lets see if a number is bigger or minor 
if (5 > 0) {
    console.log("Yes, he is bigger")
} else {
    console.log("No, he is minor")
}

// Now, lets put the two together in same logic

if (5 === "5") {
    console.log("it has the equal types and egual values")
} else if (5 == "5") {
    console.log("it has same values")
} else {
    
};

// Lets made a same struture simples
// Usually we use for one line
(5 === "5") ? console.log("it has the equal types and egual values") : (5 == "5") ? console.log("it has same values") : console.log("It has different types and values");


// Function is a set of things
// We called a function to do something
// Estruture of the function
function myFunction(paramets1, paramets2) {
    const account = paramets1 + paramets2

    return account //Return a result of the function
};

const resultaccount = myFunction(40, 10);
console.log(resultaccount);

// Now, lets simples our function using a "arrowfunction"
// Basiced, lets armazening our function in a variable

const variable_of_my_function = (paramets1, paramets2) => {
    const account = paramets1 + paramets2

    return account //Return a resulted of the function
};
// We called our function by the variable

console.log(variable_of_my_function(10, 30));

// Import and Export
// Lets learn how import and export information another files

// IMPORTANT NOTE!! => We need make a file package.json using "npm init -y" and set "type" for the module
export const object_for_export = {...object};


// How, lets using o map for check a array
// ".map" => it go run all item by the item and return a modificad if needed
const mapArray = array.map((current_element) => current_element + " You are very NICE!!"); //arrowFunction dont need of {}
console.log(mapArray)


// How lets using filter for check a array
// ".filter" => it go run all item by the item and return just condition itens

const filterArray = array.filter((current_element) => typeof current_element !== "string"); //"typeof current_element !== "string")" is condition

console.log(filterArray);