// data score 1
var scoreDolphins1 =[96,108,89];
var scoreKoalas1 = [88,91,110];

// data score 2
var scoreDolphins2 =[97,112,101];
var scoreKoalas2 = [109, 95,123];

// data score 3
var scoreDolphins3 =[97, 112, 101];
var scoreKoalas3 = [109, 95, 106];


//1. Calculate the average score for each team, using the test data below
// average score
function calculateAvg(score){
    var sum=0;
    for(var i=0;i<score.length;i++){
        sum+=score[i];
    }
    return sum/score.length;
}
// dt1
var avgDolphins1 = calculateAvg(scoreDolphins1);
var avgKoalas1 = calculateAvg(scoreKoalas1);


//2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
function compareAVG(avgDolphins,avgKoalas){
    if(avgDolphins>avgKoalas){
        return "Dolphins win";
    }else if(avgKoalas>avgDolphins){
        return "Koalas win";
    }else{
        return "two team draw";
    }
}

console.log("request 2");

console.log("result 1");
//result 1
console.log(`avg Dopphins 1: ${avgDolphins1.toFixed(2)}`);
console.log(`avg Koalas 1: ${avgKoalas1.toFixed(2)}`);
console.log(compareAVG(avgDolphins1,avgKoalas1));


console.log("result 2");
// dt2
var avgDolphins2 = calculateAvg(scoreDolphins2);
var avgKoalas2 = calculateAvg(scoreKoalas2);

//result 2
console.log(`avg Dopphins 2: ${avgDolphins2.toFixed(2)}`);
console.log(`avg Koalas 2: ${avgKoalas2.toFixed(2)}`);
console.log(compareAVG(avgDolphins2,avgKoalas2));

console.log("result 3");
// dt3
var avgDolphins3 = calculateAvg(scoreDolphins3);
var avgKoalas3 = calculateAvg(scoreKoalas3);

//result 3
console.log(`avg Dopphins 3: ${avgDolphins3.toFixed(2)}`);
console.log(`avg Koalas 3: ${avgKoalas3.toFixed(2)}`);
console.log(compareAVG(avgDolphins3,avgKoalas3));



// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks


function compareAVGWithMin(avgDolphins,avgKoalas){
    if(avgDolphins>=100 && avgDolphins>avgKoalas){
        return "Dolphins win";
    }else if(avgKoalas>=100 && avgKoalas>avgDolphins){
        return "Koalas win";
    }else if(avgDolphins>=100 && avgKoalas>=100 && avgDolphins==avgKoalas){
        return "two team draw";
    }else{
        return "no team win";
    }
}
console.log("request 3");
//dt 2
console.log(compareAVGWithMin(avgDolphins2,avgKoalas2));


// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

console.log("request 4");
//dt 3
console.log(compareAVGWithMin(avgDolphins3,avgKoalas3));