subjectList = ["Math", "English", "Science", "SST", "Hindi", "Telegu"];
pavani = [75, 89, 91, 83, 88, 67];
gaurav = [76, 82, 94, 78, 90, 93];

console.log("I AM GOING TO START A FOR LOOP NOW");

for (let counter = 0; counter <= 5; counter=counter+1)
{
    console.log("Loop number: ", counter);
    console.log("Subject", subjectList[counter]);
    console.log("Pavani's score:", pavani[counter]);
    console.log("Gaurav's score: ", gaurav[counter]);
}

console.log(" I AM OUT OF LOOP NOW");
