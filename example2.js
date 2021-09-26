// Manish has 15 mangoes, Saurabh has 7 mangoes.
// Saurabh gives 3 mangoes to Mohit.
// Manish gives 6 mangoes to Mohit.
// If manish and Mohit have same number of mangoes
// then Mohit gives one mango back to Manish.
// Find total mangoes each have.

Manish = 15;
Saurabh = 7;
Mohit = 0;

Mohit = 3;
Saurabh = Saurabh - 3;
Mohit = Mohit + 6;
Manish = Manish - 6;

if (Manish == Mohit)
{
    console.log("Both Manish and Mohit have same mangoes");
    Mohit = Mohit-1;
    Manish = Manish+1;
}


console.log(Manish);
console.log(Saurabh);
console.log(Mohit);
