//Object

//Create Object
let studentname = "window_name"
let course = "window_course"

const obj = {
    id:1,
    studentname:"rave",
    collage:"BIT",
    //normal function
    enroll(){
        console.log(`${this.studentname} is enrolled in ${this.collage}`);
    },
    //arrow function
    study:()=>{
        console.log(`${this.studentname} is studying ${course}`);
    }
     
}

//Access object
console.log("Dot operator",obj?.id) 
console.log("square operator",obj["studentname"])
//Calling method
obj.enroll();
obj.study();

//Destructuring assignment
const {collage} = obj
console.log(collage)

//check key value present 
let obj2 = {
    name:'Rave',
    age:30,
    city:'London'
}
if('city' in obj2){
    console.log(obj2?.city)
}

//get value with key 
console.log(obj2['name'])
console.log(obj2.age)

//Add a new property to a object
obj2.country='UK';
console.log(obj2)

//delete property from an object
delete obj2.age;
console.log(obj2)

// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Sample Output: name,sclass,rollno

let arr = []
for(let key in student ){
    arr.push(key)
}
console.log(arr);

// 2. Write a JavaScript program to delete the 
// rollno property from the following object. Also print the object before or after deleting the property.

delete student.rollno
console.log(student)

// 3. Write a JavaScript program to get the length of a JavaScript object.
let count =0
for(let key in student ){
    if(student.hasOwnProperty(key)){
        count++
    }
    
}
console.log(count);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   library.map((item)=>{
    console.log("The book"+item?.title + "Written by" +item?.author +"Status is "+item?.readingStatus)
   })

//    5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
//    Volume of a cylinder : V = πr2h
//    where r is the radius and h is the height of the cylinder.

const volume  = (r,h)=>{
    return 3.14*r*r*h
}
console.log(volume(5,6))

// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
// Click me to see the solution
// DSA notes

// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function getSubstring(arr){
    let n = arr.length
    let newarr=[];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
           newarr.push(arr.slice(i,j))
        }
    }
    return newarr
}
console.log(getSubstring('dog'))

console.log(library.sort((a,b)=>a-b))
console.log(library.sort((a,b)=>a.title.localeCompare(b.title)))
// 11. Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

//13.Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
function retreive (object){
    return Object.getOwnPropertyNames(object)
}
library?.map((item)=>{
    console.log(retreive(item))
})

console.log(retreive({a:1,b:2}))

//14. Write a JavaScript function to retrieve all the values of an object's properties.
function getValues (obj){
   return Object.values(obj);
}
console.log(getValues({a:1,b:2}))

//15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
console.log(Object?.entries({a:1,b:2,c:[4,5]}))

//16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.


//17. Write a JavaScript function to check whether an object contains a given property.
let check={
    id:1,
    name:"ravi"
}

console.log('id' in check)

//20 add new object in array of object
let arr1 = [
    {
    id:1,
    name:'ravi',
},
{
    id:2,
    name:"ram"
}
]

let newobj = {id:3,name:"surya"}
arr1.push(newobj)
console.log(arr1)

const address = "bangalre"

const modify = arr1.map((item)=>({
    ...item,
    address
}))
console.log(modify)

//dynamic modification
function modify1 (arr,city){
    const modification = arr.map((item)=>({
        ...item,
        city:city
    }))
    return modification
}
console.log(modify1(arr1,"chennai"))



//ARRAY OF OBJECT:
//1.Filtering objects based on a condition: age < 30
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
]

let res= data.filter((item)=>item?.age<30)
console.log(res)

//2.Sorting objects by a property:
data.sort((a,b)=>a.age - b.age)//ascending order
data.sort((a,b)=>a.age - b.age).reverse() //descending order
console.log(data)

const data1 = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 20, gender: 'male' }
  ];
  
  const groupedByGender = data1.reduce((acc, obj) => {
    const key = obj.gender;
    console.log(key)
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
  
  console.log(groupedByGender);
  

  const data3 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }
  ];

  const uniqueid = data3.map(({id})=>id) //destructor
  const id  = data3.map((item)=>{
    return item?.id})
  console.log(id)
  const remove_dup = data3?.filter((item,index)=>{
    return !uniqueid.includes(item?.id,index+1)})
  console.log(remove_dup)