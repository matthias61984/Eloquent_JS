function countBs(word) {
    numberOfBs = 0;
    for (i = 0; i <= word.length; i++) {
        if (word.charAt([i]).toUpperCase() === "B") {
            numberOfBs++;
        };
    }

    if (numberOfBs == 1) {
        console.log('There is ' + numberOfBs + ' b in ' + word);
    } else {
        console.log('There are ' + numberOfBs + ' b\'s in ' + word);
    }
};
countBs("Bumble Bee");
countBs("Donald Trump");
countBs("BbbBbbbBBBBBbB");

console.log("------------");

function countChar(word, x) {
    numberOfXs = 0;
    for (i=0; i <= word.length; i++) {
        if (word.charAt([i]).toLowerCase() === x) {
            numberOfXs++;
        };
    }

    if (numberOfXs == 1) {
        console.log('There is ' + numberOfXs + ' ' + x + ' in ' + word);
    } else {
        console.log('There are ' + numberOfXs + ' ' + x + '\'s in ' + word);
    }
};
countChar("Bumble Bee", "m");
countChar("Donald Trump", "z");
countChar("BbbBBbbbBBbBbb", "b");