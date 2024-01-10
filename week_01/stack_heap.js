//stack memory :- in this memory things are stored in stack
let a = "a memory"
let b = 1
let c = true
// when i assign any variable value to another variable it sends copy to another variable not a referance
let copy_a = a;
let copy_b = b;
let copy_c = c;
// print the copied values from orignal variables 
console.log("copied variable values");
console.log(copy_a);
console.log(copy_b);
console.log(copy_c);
// by chaging the value of another variable we can prove the above statement
copy_a = 'b memory'
copy_b = 30
copy_c = false
//check the orginal variables if they has change their value then it is heap memory 
console.log("orignal variable values")
console.log(a);
console.log(b);
console.log(c);
//end

// heap memory checking the array and object allocation in memory
let person = {
    name:"vishal",
    friend:"vijay kumar",
    yr: 2
}
let countries =["Akhand Bharat","USA", "Russia", "Ukaraine", "Turkey", "Saudi_arab"];

//assign these array to any varaible

let copy_person = person;
let copy_countries = countries;

person.name="Vishvambhar wazarkar"
countries.push("Indonesia");

//print the copied element 

console.log(copy_person.name);
copy_countries.forEach(element => {
    console.log(element);
});
console.log()

// the values of the elemnt has been in copied element also therefore the array and object is also stored in the heap memory






