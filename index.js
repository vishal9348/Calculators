let equal_pressed=0;
let button_input=document.querySelectorAll(".input-button");

let input=document.getElementById("input");
let equal=document.getElementById("equal");
let clear=document.getElementById("clear");

// window.onload = () =>{
//     input.value = "";
// };

button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equal_pressed == 1)
        {
            input.value = "";
            equal_pressed = 0;
        }
        input.value += button_class.value;
    });
});

equal.addEventListener("click", () => {
    equal_pressed = 1;

        let solution = eval(input.value);

            input.value = solution;
      
    
});

clear.addEventListener("click", () =>{
    input.value="";
})
