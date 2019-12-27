// Your code here
function mapToNegativize(array){
    let numberArray = []
    for(let i = 0; i < array.length; i++){
        numberArray.push(array[i] * -1)
    }
    return numberArray
}

function mapToNoChange(array){
    let sameArray = []
    for(let i = 0; i < array.length; i++){
        sameArray.push(array[i])
    }
    return sameArray
}

function mapToDouble(array){
    let doubledArray = []
    for(let i = 0; i < array.length; i++){
        doubledArray.push(array[i] * 2)
    }
    return doubledArray
}

function mapToSquare(array){
    let squaredArray = []
    for(let i = 0; i < array.length; i++){
        squaredArray.push(array[i] ** 2)
    }
    return squaredArray
}

function reduceToTotal(array, num = 0){
    let number = 0 
    for (let i = 0; i < array.length; i++){
        number += array[i]
    }
    return number + num
}

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == true){
            i++
        }else{
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == true){
            return true
        }else {
            i++
        }
    }
    return false
}

