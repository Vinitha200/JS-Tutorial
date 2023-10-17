//1.Even or odd

function evenOrOdd(n){
    return n%2===0 ? "even":"odd"
    //return ((n/2)*2)===n ?"even":"odd"
}
console.log(evenOrOdd(2))
evenOrOdd(3)

//2.sum of +ve
//input [1,-4,7,12] --> 1+7+12=20
function sumOfpostive(arr){
     return arr.filter((item)=>item >0).reduce((acc,item)=> acc+item ,0)
}
console.log(sumOfpostive([1,-4,7,12]))
console.log(sumOfpostive([-1,-4,-7,-12]))

//3.sum without largest and smallest of ana array
//input [6,2,1,8,10]-->8+2+6
function sumwithoutBuiltinFunction (arr) {
   let max=0
   let min=arr[0]
   for(let i = 0;i< arr.length ;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(min>arr[i]){
        min=arr[i]
    }
   }
   arr.splice(arr.indexOf(max),1)
   arr.splice(arr.indexOf(min),1)
   console.log(arr.reduce((acc,item)=>acc+item,0))
}

//Math Max,Min method
function sumMath(arr){
    const max= Math.max(...arr);
    const min= Math.min (...arr );
    const filtered = arr.filter((item)=>item!=max && item!=min).reduce((acc,cur)=> acc+cur,0)
    console.log(filtered)
}
sumwithoutBuiltinFunction([6,2,1,8,10])
sumMath([6,2,1,8,10])

//4.String Repeats n times
//input hello,5 hellohellohellohellohello
function repeatStr(str,n){
    const res = str.repeat(n)    //ES6 string method
    console.log(res)
    let newStr = ""
    for(let i=0;i<n;i++){
       newStr=newStr+str
    }
    console.log(newStr)
}
const result = repeatStr('hello',5)   

//5.convert number to reversed array
/* input:987-->[7,8,9];*/
function reverseNum(numb){
    if(numb>0){
        let str = numb.toString()
        let res = str.split("").reverse().join("")
        return res.split("")
    }
    
}
console.log(reverseNum(987))
console.log(reverseNum(654321))

//6.count no of sheep in an array
//i/p [true,true,true,false]-->3
function noOfSheep(arr){
    return arr.filter((item)=>item==true).length
}
console.log(noOfSheep([true, true, false]));

//7.Opposite Number
/*Input:-  -1 --> output :  1 */
function oppositeNumber (number){
    return number*-1
}
console.log(oppositeNumber(-1))//+1
console.log(oppositeNumber(2))

//8.Returning negative value
//i/p -1 ---> -1
//     5 --->-5

function returnNegative (n){
    // if(n<=0){
    //     return n
    // }
    // else {
    //     return n*-1
    // }
    return n>0 ? -n : n
}

console.log(returnNegative(-1))
console.log(returnNegative(5))
console.log(returnNegative(0))
console.log(returnNegative(0.12))

//9.Jenery secret (if name is john the hello my love)

function JenerySecret (name){
    return name==="john" ? "Hello,My Love":"Hello"+" "+name
}
console.log(JenerySecret('john'))
console.log(JenerySecret('ram'))

//10.which place Needle present
//i/p ["hat","bat","secreat","window","needle"] 

function Needle (arr){
     for(let i=0;i<arr.length;i++){
        if(arr[i].toLowerCase() === "needle"){
            return "Found the needle at "+i
        }
     }
 
}

console.log(Needle(["hat","bat","secreat","window","needle","hello","needle"] ))

//11.return count for +ve and sum of -ve
function CountSum (arr){
    let first = arr.filter((item)=>item>0)
    let secound = arr.filter((item)=>item<0)
    const count = first.length
    const sum = secound.reduce((acc,curr)=> acc+curr,0)
    return [count,sum]
}

console.log(CountSum([1,2,3,4,-5,-6,-7]))
console.log(CountSum([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]))

//12.Repet each character 2 time
//ip hello --> hheelllloo
function repeatEachChar (str){
    const strToArr = str.split("")
    const repeat__arr = strToArr.map((item)=>item.repeat(2))
    return repeat__arr.join("")
}

console.log(repeatEachChar("hello"))

//13.Basic Math operation

function MathOperation (a,b,op) {
    switch(op){
        case "+":
            return a+b
            break;
        case "-":
            return a-b
            break;  
        case "*":
            return a*b
            break;
        case "/":
            return a/b
        default:
            return "Enter Operator"  
    }
}
console.log(MathOperation(2,4,"-"))

//14.To Square Root or not 
function SqtRoot (arr){
    let new_arr = []
    for(let i=0;i<arr.length;i++){
      if(Number.isInteger(Math.sqrt(arr[i]))){
        new_arr.push(Math.sqrt(arr[i]))
      }
      else{
        new_arr.push(arr[i]*arr[i])
      }
       
    }
    return new_arr
}

console.log(SqtRoot([4,9,3,5]))

//15.Count by X

//16.Remove the Space
function remove_space(str){
return str.split(" ").join("")
}

console.log(remove_space("   s   pg  hju  "))

//17.Invert Values
function Invert (arr){
  const res = arr.map((item)=>item*-1)
  return res
}

console.log(Invert([1,2,3,4,5,-6,-7]))

//18.convert boolean to yes and no
function yesOrno (x){
     return x?"Yes":"No"
}

console.log(yesOrno(true))
console.log(yesOrno(false))

//19.reverse the string and word:
//for String
function reverseStr (str){
    let new_str=""
    for(let i=str.length-1;i>=0;i--){
        
        new_str=new_str+str[i]
    }
    return new_str
}
//Word
function reverseWord (word){
    return word.split(" ").reverse().join(" ")
}

console.log(reverseStr("Hello"))
console.log(reverseWord("hello world how are you doing today"))

//20.time given find liter of water
function liter (t){
    return Math.floor(t/2)
}

console.log(liter(3))
console.log(liter(6.7))

//21.Convert number to string
function noTostr(num){
   return typeof(num.toString())
}
console.log(noTostr(-12));

//22.averge of array

function averge (arr){
    return  (arr.reduce((acc,i)=>acc+i,0))/arr.length
}
console.log(averge([1,2,3]))

//23.convert string to number
function strTonum(n){
    return typeof(JSON.parse(n))
      // or
    //return Number(n)
}
console.log(strTonum("12"))

//24.return an array with number till value n
//i/p monkeyCount(10)-->[1,2,3,4,5,6,7,8,9.10]
function monkeyCount (n){
    let new_str = []
    for(let i=1;i<=n;i++){
         new_str.push(i)
    }
    return new_str
}
console.log(monkeyCount(1))

//25.Welcome with there own language
function welcome(language){
    const languageDB ={
        "en":"welcome", 
        "ar":'مرحبا', 
        'fr':'bonjour',
        "es":"hola",
        "tr":"mer",
        "tamil":"nalvaravu",

    }
    if(language in languageDB){
        let key_name = language
        return languageDB[language]
    }

}

console.log(welcome("en"))
console.log(welcome('tamil'))

//26.sentence make sentence from array of element
function smash (arr){
    return arr.join(" ")
}

console.log(smash(['hello','world','it','is','a','great','evening']))

//27.switch-it-up
function switchUp (n) {
    switch(n){
        case 0:
            return "Zero"
            break;
        case 1:
            return "One"
            break;  
        case 2:
            return "Two"
            break;
        case 3:
            return "Three"
        default:
            return "Enter Operator"  
    }
}
console.log(switchUp(2))

//28.Do I grt bonus
function Bonus(salary,bool){
  return bool ? salary*9 : salary
}
console.log(Bonus(10000,true))
console.log(Bonus(10000,false))

//29.remove ! only from end
//read abt regular expression


//30.Ary u playing banjo
//i/p name start with R r playing else not playing
function banjo (name){
    return name[0].toLowerCase() === "r" ? "Playinr bango":"Not playing"
}

console.log(banjo("Ram"))
console.log(banjo("Vini"))

//31.remove every 2nd element 
function remove_2nele (arr){
   let new_arr = []
   for(let i=0 ; i<arr.length ; i++ ){
    if(i%2===0){
        new_arr.push(arr[i])
    }
   }
   return new_arr
}
console.log(remove_2nele(["keep","remove","keep","remove"]))

//32.bug fix


//33.Transportation on vacation
//everyday cost 40 ,if 7 or more thn 7 days 50 off from totoal
//if  more thn 3 days 20 off from totoal

function vacation (d){
    let price = d*40
  if(d<3){
    return price
  }
  else if(d>=7){
    return price-50
  }
  else{
    return price-20
  }
}

console.log(vacation(2))
console.log(vacation(8))
console.log(vacation(4))

//34.Custome xor function 
function Xor (a,b){
    return (a==true && b==true)||(a==false && b==false) ? "false":"true"
    //or a==b ? "false":"true"
}

console.log(Xor(true,false))
console.log(Xor(false,true))
console.log(Xor(true,true))
console.log(Xor(false,false))


//35.

//36.find cuboid
function cuboid (l,w,h){
    return l * w * h
}

console.log(2,3,4)

//37.formatting decimal places
function format (n){
    return n.toFixed(2)
}

console.log(format(4.56890))

//38.float to Dollar 
function format (amt){
    return  `$${amt.toFixed(2)}`
}

console.log(format(4.56))

//39.Find position of ip in alphabet
function alphabet (x){
let arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for(let i=0;i<arr.length;i++){
    if(x.toUpperCase()==arr[i]){
        return i+1
    }
}
 }

 console.log(alphabet("a"))
 console.log(alphabet("z"))

 //40.Opposite Attracts
 function Attracts (f1,f2){
    if((f1%2 == 0 && f2%2!=0) || (f1%2 != 0 && f2%2==0)){
        return  true 
    }
    else{
        return false
    }
 }

 console.log(Attracts(2,3))
 console.log(Attracts(3,2))
 console.log(Attracts(2,2))

//41.
//42.no zero 
// function NoZero(str){
//     for(let i=0;i<str.length;i++){
//         if(str.endsWith("0")){
//             str.splice(i,1)
//         }
//     }
//     return str
// }

//console.log("Zero",NoZero("1230"))
//43.Vowles Remover
function Vowles_Remover(str){
    let vowels = "aeiou"
    return str.split('').filter(char => !vowels.includes(char)).join('')
}

console.log(Vowles_Remover("Hello"))

//44.Remove ! mark
function Remove_Ex(str){
     return str.split("").filter(char=> char != "!").join("")
  
}

console.log(Remove_Ex("!!!Hello!"))
console.log(Remove_Ex("!!!Hello! !World!!!!"))

//45.Reverse String
function reve_str (str){
    let new_str = ""
    for(let i=str.length-1;i>=0;i--){
        new_str+=str[i]
    }
    return new_str
}

console.log(reve_str("World"))

//46.Array of integer ,return multiply of array
function multi (arr){
    return arr.reduce((acc,curr)=>acc*curr)
}
console.log(multi([1,2,3,4]))

//47.Is palindrome
function palin (str){
    let rev = str.split("").reverse().join("").toLowerCase()
    console.log(rev)
    return rev == str.toLowerCase() ? true : false    
}

console.log(palin("MAm"))
console.log(palin("BOb"))

//48.Grasshopper Summation
function summation (n){
    if(!Number.isInteger(n)){
        throw Error ("Not a number")
    }
    let newarr=[]
    for(let i=1;i<=n;i++){
      newarr.push(i)
    }
    return newarr.reduce((acc,curr)=> acc+curr,0)
}
console.log(summation(8))

//49.Print array element with comma 
function Comma(arr){
    return arr.join(",")
}
console.log(Comma(["h","e","l","a"]))

//50.Find estimation for 20 year
function estimation(...arrs){
    return arrs.flat().reduce((acc,curr)=> acc+curr)*20
}
console.log(estimation([1234,3456],[5667,56],[35454]))

//51.Remove 1st and last element from Srting 
function removeFirstLastChar(str){
    // let arr = str.split("")
    // arr.shift()
    // arr.pop()
    // return arr.join('') OR
    return str.slice(1,-1)
}

console.log(removeFirstLastChar("Hello"))

//52.Square and sum of arr of integer
function squareSum(arr){
     return arr.map((i)=>i**2).reduce((acc,curr)=>acc+curr)
}
console.log(squareSum([1,2,2]))

//53.Find Smallest integer(-ve)
function Smallest(arr){
    return Math.min(...arr);
      or
    let min = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min
}

console.log(Smallest([34,-345,1,2]))

//54.Is n is divisable by x & y
function divisable(n,x,y){
    return (n%x==0 && n%y ==0)?true:false   ;
}
console.log(divisable(12,2,6))
console.log(divisable(100,5,3))

//55.Double each item in array
function double(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2
    }
    return arr
}
console.log(double([1,2,3]))

//56.Fake Binary
function Fake(str){
    let arr = str.split("")
    return arr.map((i)=> i<5 ?"0":"1").join("")
    
}
console.log(Fake("453855"))

//57.Sum of Array
function SumArray(arr){
   
    return arr.length<0 ? 0 : arr.reduce((acc,curr)=> acc+curr,0)
}
console.log(SumArray([1,5.2,4,0,-1]))
console.log(SumArray([]))

//58.
function SimplyMulti (n){
    return n%2==0 ? n*8 :n*9
}

console.log(SimplyMulti(2))
console.log(SimplyMulti(1))

//59.Make UpperCase
function Upper (str){
    return str.toUpperCase()
}
console.log(Upper("hello"))

//60.Sum of elements of 2 array
function SumOf2 (a1,a2){
   return a1.concat(a2).reduce((acc,curr)=> acc+curr,0)
}
console.log(SumOf2([1,2,3],[4,5,6]))

//61 Sum of Mixed array
function SumMixed(arr){
    return arr.map((i)=>typeof(i)=="string"?Number(i):i).reduce((acc,curr)=> acc+curr,0)
} 

console.log(SumMixed(['9',3,'7','3']))

//62.beast namd and dish name starting and ending character shld b same.
function StartEnd(beast,dish){
    return beast[0]==dish[0] && beast.slice(-1)==dish.slice(-1) ? true :false
   
}

console.log(StartEnd("great blue heron","garlic nan"))
console.log(StartEnd("chickadee","yho cake"))

//63.chagnge trafic light
//g-y y-r r-g
function trafic (curr){
    let case_insenstive = curr.toLowerCase()
    let res = ""
    switch(case_insenstive){
        case "green":
            res = "Yellow"
            break;
        case "yellow":
            res="Red"
            break;
        case "red":
            res="green"
            break;
        default:
            res=null     
    }
    return res
}

console.log(trafic("YELLOW"))

//64.set alaram 
function alaram(employed,vacation){
    return employed && !vacation
}
console.log(alaram(true,true))

//65.Quarter of year
function Quarter(month){
 return month <=3 ?"1st Quarter":month>3 && month <=6?"2n Quarter":month>6 && month<=9 ?"3rd Quarter":"4th Quater"   
}
console.log(Quarter(5))

//66.Add length to string
//ip "apple ban" --> ["apple 5","ban 3"]
function len(str){
    let arr=str.split(" ")
    return arr.map((i)=> i+" "+i.length)
}

console.log(len("apple ban"))
console.log(len("you will win"))

//67.how many lightbears (only zach has it 18)
//your function should have default parameter-->null 
function lightbears (name){
    return name === 'zach' ?  20 : null
}
console.log(lightbears("zach"))

//68.
function father (dad,son){
    return Math.abs(dad-(son*2))
}
console.log(father(36,7))

//69.hoops
function hoops (n){
    return n>=10?"Great":"Keep it "
}

//70.Charater Recogination : $-->5,0-->o,I-->1
//L0ND0N --> LONDON
function Recogination (str){
   return str.replace(/$/g,"5").replace(/0/g,"o").replace(/1/g,"i")
}
console.log(Recogination("RF$01"))

//71. How good you are?
function avg(arr,n){
    let res = arr.reduce((acc,cur)=> acc+cur)/arr.length
    return n>res ? true:false
}

console.log(avg([100,40,34,57,29,72,57,88],75))

//72. reverse word 
// split("").reverse().join()

//73.calculate bmi
function bmi(w,h){
    let res = w/(h**2)
    return res <18.5 ?"Underweight":res<25.0 ?"Normal":res<30.0 ?"Over":"obesses"
}

console.log(bmi(80,1.80))

//74.Divide by n
function divide (arr,n){
    return arr.filter((i)=> i%n == 0 )
}
console.log(divide([1,2,3,4,5,6],2))

//75.Power of 2
function powerOf2(n){
    let new_arr =[]
    for(let i=0;i<=n;i++){
        new_arr.push((Math.pow(2,(i))))
    }
    return new_arr
}
console.log(powerOf2(4))

//76.Sum the string 
function sumString(x,y){
    return parseInt(x)+parseInt(y);
}

console.log(sumString("5","4"))

//77. Sort and star
function SortStar (arr){
    return arr.sort()[0].split("").join("***");
}

console.log(SortStar(["bich","jaoin"]))

//78. pips problem
//ip [1,3,5,6,7,8] --> [1,2,3,4,5,6,7,8]

function pips(numbers){
    let arr = []
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    for(let i=min;i<=max;i++){
        arr.push(i)
    }
    return arr.join(" ")
}

console.log(pips([1,3,5,6,7,8]))

//79.Remove first and last character from string
function firstandlast(str){
    let arr = str.split(',')
    if(arr.length <1) return null
    for(let i=0;i<arr.length;i++){
        if(i==0 || i==(arr.length-1)){
            arr.splice(i,1)
        }
    }
    return arr.join(" ")
}

console.log(firstandlast("A1,B2,C3,D4,E5"))

//80.Welcome City
//ip [vinitha,shanmugam] 'bangalore' 'karanataka' -
   //- Hello  vinitha shanmugam welcome to bangalore,karanataka
function WelcomeCity(arr,state,city){
    let str = arr.join(" ")
    return `Hello ${str} Welcome come to  ${state} , ${city}  !!!`
}

console.log(WelcomeCity(["vinitha","shanmugam"], 'bangalore' ,'karanataka' ))

//81.Expressions Matter
function Expressions_Matter(a,b,c){
    return Math.max(
        a+b+c,
        a*b*c,
        a*(b+c),
        c*(a+b)    )
}

//82.Filter out the geese
function geese (arr1,arr2){
    
    let filtered = arr1.filter((i)=>{
         return !arr2.includes(i)
    })
    return filtered
}

console.log(geese(["bjhgsd","geese","Lion","Dog"],["Dog","Cat"]))

//83.What is between 
function whatBetween(num1, num2 ){
    let arr=[]
    let start = 0
    let end = 0
    if(num1<num2){
      start=num1
      end=num2
    }
    else{
        start=num2
        end=num1
    }
    console.log(start,end)
    for(let i=start;i<=end;i++){
      
        arr.push(i)
    }
    return arr
}

console.log(whatBetween(10,4))

//84. postion and roll 
//(3,6)=>15 calculate from current position and roll is dice is done 2 times

function postion (position,roll){
    return position+(roll*2)
}
console.log(postion(3,6))

//85.N th Power 
// [1,2,3,4] N=2 --> 3^2=9
function Npower(arr,N){
    if(N>=arr.length-1)
     {  
        return -1
    }
    else{
        return arr[N]**N 
    }
    
}

console.log(Npower([1,2,3,4],2))
console.log(Npower([1,2,3],3))

//86.Grasshopper Messi goals function 
function sum (a,b,c){
    return a+b+c
}
console.log(2,10,5)

//86.Stringy Strings
//6 => 101010
function Stringy(size){
    let str='1'
    for(let i=2;i<=size;i++){
        if(i%2===0){
            str+=0
        }
        else{
            str+=1
        }
    }
    return str
}
console.log(Stringy(6))
console.log(Stringy(4))

//87.
function multiplyLimit(N,Limit){
    let arr = []
    for(let i=1;i<Limit;i++){
        arr.push( i*N)
    }

    return arr.filter((i)=>i<=Limit)
}

console.log(multiplyLimit(2,6))
console.log(multiplyLimit(5,25))

//88.Remove duplicate form array or list
function Remove_duplicate(arr){
    return [...new Set(arr)]
}
console.log(Remove_duplicate([1,2,1]))

//89.Sum of Multiples 
function SumOfMulti(n,m){
    let arr = []
    for(let i=1;i<m;i++){
        arr.push( i*n)
    }

    return arr.filter((i)=>i<=m).reduce((acc,curr)=> acc+curr ,0)
}
console.log(SumOfMulti(2,9))
console.log(SumOfMulti(3,13))

//90- Name on billboard 
function billboard (name,price=30){
    let result = 0
    for(let i=0;i<name.length;i++){
        result+=price
    }
    return result
}

 //             ---------------------------x-----------------------x------------------------------