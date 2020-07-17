// 1st problem : feetToMile

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile (84480);
console.log(result);





// 2nd problem : woodCalculator


function woodCalculator (chair, table, bed){
    chairCount = chair * 1;
    tableCount = table * 3;
    bedCount = bed * 5;
    var totalCount = chairCount + tableCount + bedCount;
    return totalCount;
}
var woodResult = woodCalculator(14, 5, 12);
console.log(woodResult);



// 3rd problem : brickCalculator


function brickCalculator(ten, nextten, nextseven){
    firstToTenTolaCount = ten * 10 * 1000
    elevenToTwentyTolaCount = nextten * 10 * 1000
    twentyoneToTwentysevenCount = nextseven *  7 * 1000
    var totalBrick = firstToTenTolaCount + elevenToTwentyTolaCount + twentyoneToTwentysevenCount;

    return totalBrick;
}
var brickResult = brickCalculator(15, 12, 7);
console.log(brickResult);




// 4th problem : tinyFriend


function tinyFriend(names){

    var shortName = names[0];
    for (var i=0; i<names.length; i++){
        var currentName = names[i];
        if(shortName.length > currentName.length){
            shortName = currentName;
        }
    }
    return shortName;
}
var myFriendsName = tinyFriend(["Alifa", "Adib", "Mim", "Mishu"]);
console.log("tinyFriend is "+ myFriendsName);