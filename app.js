let friendsArray = ["Camille", "Barcley", "Ben", "Morgan", "Nick"];

//Goes through each name in the array friends and console.log a song inputting each name in the song
for (let i = 0; i < friendsArray.length; i++) {
    console.log(friendsArray[i] + ":")

    for(let j = 99; j >= 1; j--){
        if (j == 2){
            console.log("2 lines of code on the file, 2 lines of code; " + friendsArray[i] + " strikes one out, clears it all out, 1 line of code in the file");
        } else if (j== 1){
            console.log("1 line of code in the file, 1 line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
        } else {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
        }
    }
}
