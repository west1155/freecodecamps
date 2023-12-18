const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (par == 5 && strokes == 5) {return names[3]}
    strokes -= 1;
    if (strokes > names.length) {return names[names.  length-1]}
    else return names[strokes]

}

golfScore(5, 4);