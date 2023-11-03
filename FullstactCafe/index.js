












//13.For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

function reverse_Sentence(str){
    let arr = str.split(" ")
    let res = []
    for(let i=0;i<arr.length;i++){
        let newstr=""
        for(let j=arr[i].length-1;j>=0;j--){
           newstr+=arr[i][j]
        }
        res.push(newstr)
    }
    return res.join(" ")
}
console.log(reverse_Sentence('Welcome to this Javascript Guide!'))

//14.Find the missing one 
// The output of the function should be 8
// var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
// var upperBound = 9;
// var lowerBound = 1;

function missing_brute(arr,lowerBound,upperBound){
    let n = arr.length
    for(let i=lowerBound;i<=upperBound;i++){
        let flag = 0
        for(let j=0;j<n;j++){
             if(arr[j]===i){
                flag=1
                break
             }
        }
       if(flag===0){
        return i
       } 
    }
}
console.log(missing_brute([2, 5, 1, 4, 9, 6, 3, 7],1,9))

function missing_optimal(arr,lowerBound,upperBound){
       
    //here n is upperbound
    let sumation = (upperBound*(upperBound+1))/2
    let sumarr = arr.reduce((acc,curr)=> acc+curr ,0)
    return sumation-sumarr
}
console.log(missing_brute([2, 5, 1, 4, 9, 6, 3, 7],1,9))
