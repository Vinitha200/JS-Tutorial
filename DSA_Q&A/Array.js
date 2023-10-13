// function RotateArray (arr,k){
//  let new_arr = []
//  let reverse_arr =[]
//  while(arr.length){
//    reverse_arr.push(arr.pop())
//  }
//  for(let i=0;i<k;i++){
//     new_arr.push(reverse_arr[i])
//  }
//  return 
// }
// console.log(RotateArray([1,2,3,4,5,6,7],3))
const list1 = [1,2,4] 
const list2 = [1,3,4]
console.log(list1.concat(list2).sort((a,b)=>a-b))

function buy (arr){
    let newarr = []
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            newarr.push(arr[i]-arr[j])
        }
    }
let res = Math.max(...newarr)
return arr.indexOf(res)+1
}
console.log(buy([7,1,5,3,6,4]))
console.log(buy([7,6,4,3,1]))

// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the
//  integers in the range [1, n] that do not appear in nums.
// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums){
    let newarr=[]
   for(let i=1;i<nums.length;i++){
    if(!nums.includes(i))
      newarr.push(i)
   }
   return newarr
}
console.log("Find",findDisappearedNumbers([4,3,2,7,8,2,3,1]))

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function plus(arr){
    let num = arr.join("")
    return typeof(num)
}

console.log(plus([9]))


// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
function singel(arr){
    let new_arr =[]
   arr.sort((a,b)=>a-b)
   for(let i=0;i<arr.length;i++){
     if(arr.indexOf(arr[i]).length >1){
        new_arr.push(arr[i])
     }
   }
   return new_arr
}

console.log(singel([4,1,2,1,2]))