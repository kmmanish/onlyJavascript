/*

Question 2: Akira likes to dance. She practices everyday except Sundays. Her practice routine starts on Monday (day 1) and ends on Saturday.
            On even days she practices for 2 hours. On odd days she practices for 1 hour. Using for loop, print her practice hours each day of week.
            hint: take two lists. One is list of days and another is list of danceHours. In for loop, print both
            
*/

listOfDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
danceHours = [1,2,1,2,1,2];

for (let x = 0 ; x <= 5; x = x + 1)
{
    console.log(listOfDays[x]);
    console.log(danceHours[x]);
}
