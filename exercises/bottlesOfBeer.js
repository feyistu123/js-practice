var numberOfBottles = 99;
while (numberOfBottles > 0) {
    var bottlesLeft = numberOfBottles - 1;
    var bottleWord1 = "bottles";
    var bottleWord2 = "bottles";
    if (numberOfBottles === 1) {
        bottleWord1 = "bottle";
    }
    if (bottlesLeft === 1) {
        bottleWord2 = "bottle";
    }
    console.log(numberOfBottles + " " + bottleWord1 + " of beer on the wall, " + numberOfBottles + " " + bottleWord1 + " of beer. Take one down pass it around, " + bottlesLeft + " " + bottleWord2 + " of beer on the wall.");
    numberOfBottles--
}
