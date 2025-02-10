//object is a collection of key vaue pairs
//to insert or remove a property, time complexity is constant O(1) -> no matter how many properties are in an object, it takes the same amount of time to insert or remove a property
//to access, time complexity is O(1) constant

const person = {
  firstName: "Bruce",
  lastName:"Wayne"
}

//accessing person.firstName doesn't depend on other properties in an object

//Search for a value in an object big O is O(n) linear eg searching for the value "Wayne"



// METHODS ON OBJECTS
Object.keys() //returns an array of all keys in an object -> O(n)
Object.values() //returns an array of all values -> O(n)





//ARRAYS
//an array is an ordered collection of values
const odd = [1, 3, 5, 7, 9]

//insert or remove at the END of array, time complexity is constant O(1)
//insert or rermove from BEGINING of an array, time complexity is linear O(n) because index has to be reset for every element in the array
//Access O(1) -> Constant
//Search O(n) -> Linear
//Push/Pop O(1) -> constant
//Shift/unshift/concat/slice/splice -O(n)
//forEach/map/filter/reduce -> O(n)