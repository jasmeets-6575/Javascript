const courses = [
    {
        name:"Complete Reactjs Course",
        price : "1.9",
    },
    {
        name:"Complete Angularjs Course",
        price : "2.3",
    },
    {
        name:"Complete MERN Course",
        price : "2.7",
    },
    {
        name:"Complete C++ Course",
        price : "2.5",
    },
    {
        name:"Django course",
        price : "4.5"
    },
    {
        name : "veuJS course",
        price : "2.9"
    },
];

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course) => {
    
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);

    });
}
// generateLIST();

window.addEventListener("load" , generateLIST);

const button = document.querySelector(".sort-btn")

addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price );
    generateLIST()
});