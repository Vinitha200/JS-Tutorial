//1. Reverse each letter in the given sentence
//ex harash bhai --> hsarah iahb

function reverse_letter(str){
    let arr = str.split(" ");
    const eachWord = arr.map((item)=>{
        let temp = item.split('').reverse().join('')
        return temp
    })

    return eachWord.join(" ")
}

console.log(reverse_letter("harash bhai"))

//2.how to check object is an array
//type of([]),typeOf({}) --> both will give object

function IsArrayObject(element){
    return Array.isArray(element)
}

console.log(IsArrayObject([]))
console.log(IsArrayObject({}))

//3.Empty an array without loop, and assigin []
function emptyArr(arr){
     arr.length=0
     return arr
}
console.log(emptyArr([1,2,3,4,5]))

//4.How to check if a number is integer
function isInteger(num){
    console.log(Number.isInteger(num));   

    if(num%1===0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

isInteger(12)
isInteger(12.9)

//5.Make this : [1,2,3,4,5] --> [1,2,3,4,5,1,2,3,4,5]

let arr1=[1,2,3,4,5]
arr1=arr1+","+arr1
console.log(arr1.concat(arr1))
console.log(arr1)

//6.reverse a number
function reverse_no(num){
    let reverse_no = num.toString().split('').reverse().join('')
    return Number(reverse_no)
}

function reverse_no1(num){
    let str = num.toString()
    let reverse = []
    for(let i=str.length;i>=0;i--){
        reverse.push(str[i])
    }
    return Number(reverse.join(""))
}

function reverse_no2(num){
   
    let reverse =0
    while(num>0){
        let last = num%10
        reverse=(reverse*10)+last
        num=Math.floor(num/10)
    }
    return reverse
}

console.log(reverse_no(12))
console.log(reverse_no1(12))
console.log(reverse_no2(12))

//7.palindrome
function palindrome(str){
    let rev = str.split('').reverse().join('')
    return str===rev
}

console.log(palindrome("pop"))
console.log(palindrome("pope"))

//8.alphabetical order for the given string 
function alphabetic(str){
    return str.split('').sort().join('')
}
console.log(alphabetic("apple"))

//9.
function upper(sentence){
    let arr=sentence.split(" ")
    const upperCase = arr.map((item)=>{
        return item[0].toUpperCase()+item.slice(1)
    })
    return upperCase.join(' ')
}
console.log(upper("john how are you"))

//10 type of the argument 
function type(arg){
    return typeof(arg)
}

//11.Count occurence of letter in a word
function count_char(word){
    let arr = word.split("")
    let count = arr.reduce((acc,curr)=>{
        acc[curr] ? acc[curr]++ : (acc[curr]=1)
        return acc;
    },[])

    return count
}

function count_char1(word){
    let arr = word.split("")
    let occur = {}
    arr.forEach((element)=>{
      if(occur.hasOwnProperty(element)===false){
        occur[element]=1
      }
      else{
        occur[element]++
      }
    })
        
    return occur
}
console.log(count_char("apple"))
console.log(count_char1("apple"))

//12.Sum
function sum(arr){
    return arr.reduce((acc,curr)=>{
          return acc+curr
    },0)
}

//13.sum only the number
function sum_no(arr){
    return arr.reduce((acc,curr)=>{
        if(typeof(curr)==='number'){
           return acc+curr
        }
        else{
            return acc
        }
        
    },0)
}
console.log(sum([1,2]))
console.log(sum_no([1,2,'a','b','p']))

//14.remove the object whose gender is male

function remove(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].gender=="male"){
            arr.splice(i,1)
        }
    }
    return arr
}
console.log(remove([
    {name:"John",age:56,gender:'male'},
    {name:"Jane",age:48,gender:'female'},
    {name:"april",age:48,gender:'female'}
]))

function retervie(arr,n=1){
    if(n<=arr.length){
        for(let i=0;i<n;i++){
            console.log(arr[i])
        }
    }
}
retervie([1,2,3,4,5],3)
retervie([1,2,3,4,5])

function retervie_last(arr,n=1){
    let last = []
    if(n<=arr.length){ 
              last.push(arr.slice(arr.length-n))
  
    }
  return last
}
 console.log(retervie_last([1,2,3,4,5],2))
 console.log(retervie_last([1,2,3,4,5]))

 //18
 function frequency(arr){
   let res={}
   for(let i=0;i<arr.length;i++){
    if(!res.hasOwnProperty(arr[i])){
        res[arr[i]]=1
    }
    else{
        res[arr[i]]++
    }
   }
   console.log(res)
   let arr1 = Object.entries(res)
   let max_count = 0
   let max_char = ""
   console.log(arr1)
   for(let [char,count] of arr1){
    console.log(char,count)
     if(count>max_count){
        max_char=char
        max_count=count
     }
   }
   return {char:max_char,count:max_count}
 }

 console.log(frequency([1,2,1,3,4]))

 //19.Shuffle

 function shuffle(Arr){
    let totalShuffleLength = Arr.length

    while(totalShuffleLength>0){
        totalShuffleLength--
        //get random item from array
        let indexRandom = Math.floor(Math.random()*totalShuffleLength)
        //swap
        let temp = Arr[totalShuffleLength]
        Arr[totalShuffleLength]=Arr[indexRandom]
        Arr[indexRandom]=temp
    }

    return Arr
 }

 console.log(shuffle([1,2,3,4]))

 //20.
 function Union(arr1,arr2){
    let union =[...arr1,...arr2]
    return [...new Set(union)]
 }

 console.log(Union([1,1,1],[1,2]))