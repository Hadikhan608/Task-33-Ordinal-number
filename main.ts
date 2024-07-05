//Ordinal num, ordinal number indicates their position in an array such as 1st or 2nd,
//Most ordinal numbers end in th, execpt 1,2 & 3,
//1) store the number 1 to 9 in an array
//2) Loop through the array
//3) use an if else chain inside the loop to print the proper ordinal endng for each number. your output 
//should read 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th and each result should be on a separate line.

let myNum:number []= [1,2,3,4,5,6,7,8,9];
for (let i =0; i< myNum.length; i++ ){

    if (myNum[i]===1){
        console.log(`${myNum[i]}st`);
    }
    else if(myNum[i]===2){
        console.log(`${myNum[i]}nd`);
    }
    else if(myNum[i]===3){
        console.log(`${myNum[i]}rd`);
    }
    else if(myNum[i]>=4 && myNum[i]<=9){
        console.log(`${myNum[i]}th`);
    }

}