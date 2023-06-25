//list Favourite subjects with reduce
// assign to survey and log
{english:1
 history:1 
 maths :3
}

const students = [
    { id: 1, name: "Peter", score: 80, favSubject: "Maths", },
    { id: 2, name: "Jordan", score: 75, favSubject: "Chemistry", },
    { id: 3, name: "Bobo", score: 90, favSubject: "Maths", },
    { id: 4, name: "Anna", score: 85, favSubject: "Physics", },
    { id: 5, name: "Susy", score: 70, favSubject: "Maths", },
];

const survey = students.reduce(function(survey,student){
    // console.log(student.favSubject);

    const favSub = student.favSubject;
    if (survey[favSub]) {
        survey[favSub] =  survey[favSub] +1
    } else {
        survey[favSub] = 1 ;
    }
    return survey;
},{});
console.log(survey);
