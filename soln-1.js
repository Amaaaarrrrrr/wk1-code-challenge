studentGrades();

function studentGrades(){
    const input = prompt('enter Student marks (0-100):') //prompts the user to enter number 
    const marks = Number(input); //ensures the marks entered is a number



// validate marks
    if (isNaN(marks) || marks < 0 || marks > 100)   //ensures marks entered should not be more than 100 or less than 0
        {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }


// determine grades
    let grade;
    if(marks>=79){
        grade= 'A';
    }else if (marks>=60){
       grade= 'B';
    }else if (marks>=50){
        grade=  'C';
    }else if (marks>=40){
        grade= 'D';
    }else {
        grade=  'E';
    }

    
// output
console.log("Marks: " + marks + ", Grade: " + grade);
}