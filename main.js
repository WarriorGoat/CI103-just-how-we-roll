/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * SET VARIABLES *
********************/
let dice6 = document.querySelector("#d6-roll");
let mean6 = document.querySelector("#d6-rolls-mean");
let dice61of2 = document.querySelector("#double-d6-roll-1");
let dice62of2 = document.querySelector("#double-d6-roll-2");
let meanDouble6 = document.querySelector("#double-d6-rolls-mean"); 
let dice12 = document.querySelector("#d12-roll");
let mean12 = document.querySelector("#d12-rolls-mean");
let dice20 = document.querySelector("#d20-roll");
let mean20 = document.querySelector("#d20-rolls-mean");
/********************
 * HELPER FUNCTIONS *
********************/

function startD6(){
    dice6.src = "/images/start/d6.png";
    dice6.alt = "six sided die";
    mean6.innerText = "NA";
}

function start2D6(){
    dice61of2.src = "/images/start/d6.png";
    dice61of2.alt = "six sided die";
    dice62of2.src = "/images/start/d6.png";
    dice62of2.alt = "six sided die";
    meanDouble6.innerText = "NA";
}

function startD12(){
    dice12.src = "/images/start/d12.jpeg";
    dice12.alt = "twelve sided die";
    mean12.innerText = "NA" 
}

function startD20(){
    dice20.src = "/images/start/d20.jpg";
    dice20.alt = "twenty sided die";
    mean20.innerText = "NA" 
}

function resetAll(){
    startD6();
    start2D6();
    startD12();
    startD20();
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
}


/*******************
 * YOUR CODE BELOW *
 *******************/
//Set initial values
resetAll();


 


/*******************
 * EVENT LISTENERS *
 *******************/
//Six Side Die 
dice6.addEventListener("click", function(){
    let roll = getRandomNumber(6);
    dice6.src = `/images/d6/${roll}.png`;
    sixes.push(roll);
    // console.log(sixes);  
    mean6.innerText = meanOfArray(sixes) +"\n" + medianOfArray(sixes) + modeOfArray(sixes);
})

//Two Six Sided Dice
dice61of2.addEventListener("click", function(){
    let roll1 = getRandomNumber(6);
    let roll2 = getRandomNumber(6);
    dice61of2.src = `/images/d6/${roll1}.png`;
    dice62of2.src = `/images/d6/${roll2}.png`;
    doubleSixes.push(roll1+roll2); 
    meanDouble6.innerText = meanOfArray(doubleSixes) +"\n" + medianOfArray(doubleSixes) + modeOfArray(doubleSixes);
})

dice62of2.addEventListener("click", function(){
    let roll1 = getRandomNumber(6);
    let roll2 = getRandomNumber(6);
    dice61of2.src = `/images/d6/${roll1}.png`;
    dice62of2.src = `/images/d6/${roll2}.png`;
    doubleSixes.push(roll1+roll2);
    meanDouble6.innerText = meanOfArray(doubleSixes) +"\n" + medianOfArray(doubleSixes) + modeOfArray(doubleSixes);
})


//12 Sided Die
dice12.addEventListener("click", function(){
    let roll = getRandomNumber(12);
    dice12.src = `/images/numbers/${roll}.png`;
    twelves.push(roll);
    mean12.innerText = meanOfArray(twelves) +"\n" + medianOfArray(twelves)+ modeOfArray(twelves);   
})


//20 Sided Die
dice20.addEventListener("click", function(){
    let roll = getRandomNumber(20);
    dice20.src = `/images/numbers/${roll}.png`;
    twenties.push(roll);  
    mean20.innerText = meanOfArray(twenties) +"\n" + medianOfArray(twenties)+ modeOfArray(twenties); 
})

/******************
 * RESET FUNCTION *
 ******************/
 let reset = document.querySelector("#reset-button");
 reset.addEventListener("click", function(){
    resetAll();
 })



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

function meanOfArray(array){
    let sum = 0
    for (i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return Math.round(sum/array.length);
}

function medianOfArray(array){
    array.sort(function(a, b){return a - b})
    // console.log(array)
    if (array.length<1){
        median = "NA"
    }else if(array.length===1){
        median = array[0]
    }else if (array.length%2===0) {
    median = (array[(array.length/2)-1] + array[(array.length/2)])/2
    }else {median = array[Math.floor((array.length)/2)]}
    return `\nMedian: ${median}`
}

function modeOfArray(array){
    let results = {}
    for (let i = 0; i<array.length; i++){
        if (results.hasOwnProperty(array[i])){
            results[array[i]] +=1;
            }
        else {
            results[array[i]]=1 
        }}
    let entries = Object.entries(results);
    let sorted = entries.sort((a,b)=>b[1]-a[1]);
    return `\nMode: rolled ${sorted[0]} times`
    } 
    
