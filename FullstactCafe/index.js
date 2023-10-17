












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