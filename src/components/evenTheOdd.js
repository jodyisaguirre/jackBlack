const arr = [1,4,5,6,21,34,3,27,32]
const newArray=[]

function evenTheOdd(arr){
    for(var i =0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            if(typeof(arr[i+1]) == 'undefined'){
                arr[i+1]=1
            }
            if(typeof(arr[i-1]) == 'undefined'){
                arr[i-1]=1
            }
            newArray.push( arr[i-1] * arr[i+1])
        }
    }
    return newArray
}

console.log(evenTheOdd(arr))