// James has 12 chocolates
// Smith has 49 chocolates
// Andy has 23 chocolates

// if James has more chocolates than Andy then James gives 4 chocolates to Andy and 2 chocolates to Smith
//else Smith gives 7 chocolates to Andy and 10 chocolates to James

//Print the number of chocolates that James, Smith, and Andy have in separate lines

james = 12;
smith = 49;
andy = 23;

if (james > andy)
{
    james = james - 4;
    andy = andy + 4;
    james = james - 2;
    smith = smith + 2;
}
else
{
    smith = smith - 7;
    andy = andy + 7;
    smith = smith - 10;
    james = james + 10;
}

console.log(james);
console.log(smith);
console.log(andy);
