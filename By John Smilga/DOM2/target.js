// currentTarget - always refers to the element to which the event handler has been attached to
// target - indentifies the element on which the event occured

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // console.log(e.currentTarget);
        // e.currentTarget.style.color = "blue";
        console.log("target", e.target);
        e.target.style.color = "yellow";
    });
});