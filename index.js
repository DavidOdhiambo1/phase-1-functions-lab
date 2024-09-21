// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLoc){
    if(pickUpLoc>42){
        return pickUpLoc - 42
    } else {
        return 42 - pickUpLoc
    }
}
//console.log(distanceFromHqInBlocks(50))

function distanceFromHqInFeet(pickUpLoc){
    return distanceFromHqInBlocks(pickUpLoc)*264
}
//console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(startBlock, endBlock){
    if (endBlock>startBlock){
        return (endBlock - startBlock)*264
    }else {
        return (startBlock-endBlock)*264
    } 
}
console.log(distanceTravelledInFeet(34, 24))

function calculatesFarePrice(startBlock, endBlock){
    if ((distanceTravelledInFeet(startBlock, endBlock)) <= 400){
        return 0
    } else if((distanceTravelledInFeet(startBlock, endBlock)) <= 2000){
        return ((distanceTravelledInFeet(startBlock, endBlock)) -400)*0.02
    } else if((distanceTravelledInFeet(startBlock, endBlock)) >2000 && (distanceTravelledInFeet(startBlock, endBlock)) <2500 ){
        return 25
    } else {
        return 'cannot travel that far'
    }
}
console.log (calculatesFarePrice(34, 24))