/*

Challenge question:
          In a 5 match series Sachin made 15, 19, 45, 90, 65. Virat made 44, 23, 75, 0, 11.
          Use for loop to calculate total runs made by Sachin and total runs made by Virat.
          If Sachin made more runs than Virat then print sachin was man of the series. Else print Virat was man of the series
          
*/



// Method 1: Using 1 for loop


sachin = [15,19,45,90,65];
virat = [44,23,75,0,11];
totalSachin = 0;
totalVirat = 0;

for (let x = 0; x < sachin.length ; x = x + 1)
{
    totalSachin = totalSachin + sachin[x];
    totalVirat = totalVirat + virat[x];
}

if (totalSachin > totalVirat)
{
    console.log("Sachin was man of the series");
}
else
{
    console.log("Virat was man of the series");
}




//METHOD 2: Using 2 for loops

sachin = [15,19,45,90,65];
virat = [44,23,75,0,11];
totalSachin = 0;
totalVirat = 0;

for (let x = 0; x < sachin.length ; x = x + 1)
{
    totalSachin = totalSachin + sachin[x];
}


for (let y = 0; y < virat.length; y=y+1)
{
    totalVirat = totalVirat + virat[y];
}


if (totalSachin > totalVirat)
{
    console.log("Sachin was man of the series");
}
else
{
    console.log("Virat was man of the series");
}
