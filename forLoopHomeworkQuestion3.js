//Question 3: Sachin played 3 matches against Australia. He scored 13, 17, 22 in 3 matches. Using for loop calculate his total runs after the 3 matches

scores = [13, 17, 22];
total = 0;

for (let x = 0; x < scores.length ; x = x +1)
{
    total = total + scores[x];
}

console.log(total);
