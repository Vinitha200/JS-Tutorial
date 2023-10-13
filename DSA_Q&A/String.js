const atr = "hello"
console.log(atr.includes("e"))

//1.Truncate Function 
function Truncate (str,max){
    let substr=""
    if(str.length <= max){
        return str
    }
    else{
        substr =  str.slice(0,max)
    }
    return substr+"..."
}

console.log(Truncate("RoadSideCoder",9))
console.log(Truncate("Road",9))

//2.Palindrome 
function Palindrome (s){
    let remove_specialChar = s.replace("[\^a-z0-9]gi","")
    return s<0?false:remove_specialChar==remove_specialChar.split("").reverse().join("")?true:false
}

console.log(Palindrome("121"))

//3.Hamming Distance
//i/p x=hello y=hwllr => 2 e --> w , 0 --> r
function Hamming (x,y){
    var maching = ""
    if(x.length != y.length){
        return false
    }
    else{
      for(let i=0;i<x.length;i++){
        if(!y.includes(x[i])){
           maching=maching+x[i]
        }
      }
    }
    return {character:maching,count:maching.length}
}

console.log(Hamming('hello','hwllr'))
//for Binary
function HammingBinary (x,y){
    x=x.toString(2)
    y=y.toString(2)

    if(x.length < y.length){
       while(x.length!==y.length) x="0"+x
    }
    else{
        while(x.length!==y.length) y="0"+y  
    }
    let count = 0
      for(let i=0;i<x.length;i++){
        if(x[i]!==y[i]){
          count++
        }
      
    }
    return count
}

console.log(HammingBinary(1,9))


//4.Anagram 
function Anagram (x,y){
    let x_arr = x.split("").sort().join("")
    let y_arr = y.split("").sort().join("")
    console.log( x_arr,y_arr)
    return x_arr === y_arr
}

console.log(Anagram("pot","top"))

//5.Reverse String
//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]
function Reverse (str){
    let new_str = ""
    for(let i=str.length-1;i>=0;i--){
        new_str+=str[i]
    }
    return new_str.split("")
}
console.log(Reverse( ["h","e","l","l","o"]))

//6.Longest common prefix:
//["flower","flow","flight"] --> fl
function common_prefix(str){
    let res=""
    for(let i=0;i<str[0].length;i++){
        //console.log("ivalue",str[0][i])
        for(let j=i;j<str.length;j++ ){
           if(str[0][i]===str[j]) return res=res+str[0][i]
           //console.log("jvalue",str[j][i])
        }
    }
}
 console.log(common_prefix(["flower","flow","flight"]))

 //7.Roman Integer
 //s = "LVIII" ---> L = 50, V= 5, III = 3 -->58
//  Symbol       Value
//  I             1
//  V             5
//  X             10
//  L             50
//  C             100
//  D             500
//  M             1000

function Roman (s){
    let new_str = []
    let arr = s.split("")
    for(let i=0;i<arr.length;i++){
        switch(arr[i]){
           // case 'I':new_str=[...new_str,"1"];break
           case 'I':
               new_str.push(1);
               break
            case 'V':
                new_str.push(5);
                break
            case 'X':
                    new_str.push(10);
                    break
            case 'L':
                new_str.push(50);
                break
            case 'C':
                new_str.push(100);
                break
            case 'D':
            new_str.push(500);
            break
            case 'M':
                new_str.push(1000);
                break
            default:
                new_str = ""
        }
    }
    return new_str.reduce((acc,cur)=> acc+cur)
}
console.log(Roman("LVIII"))
console.log(Roman("MCMXCIV"))

//7.Reverese String II
// Given a string s and an integer k, reverse the first k characters for every 
// 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. 
// If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

function ReveseII (s,k){
 if(k>s.length) return s.split("").reverse().join("")
  let split = s.split("")
for(let i=0;i<=split.length;i=i+2*k){
    const rev = split.splice(i,k).reverse()
    split.splice(i,0,...rev)
 
} 
return split.join("")
}

console.log(ReveseII("abcdefg",2))


//8.longest palindromic 
// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// 9. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word 
// or phrase, typically using all the original letters exactly once.
function GroupAnagrams(arr){
    let arr_new ={}
 for(let i=0;i<arr.length;i++){
    for(let j=i+1 ;j<arr.length ;j++){
        if(arr[i].split("").sort().join("")===arr[j].split("").sort().join("")){
            arr_new.push(arr[i])
            arr_new.push(arr[j])
           
        }
    }
 }
 
 return [...new Set(arr_new.concat(arr))] 

}
console.log(GroupAnagrams(["eat","tea","tan","ate","nat","bat"]))

function groupAnagrams(strs) {
    let map = {}

    for(let str of strs){
        let s = str.split('').sort().join('')
       
        if(!map[s]) map[s] = []
        map[s].push(str)
    }
    return Object.values(map)
    
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))