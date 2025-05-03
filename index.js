document.addEventListener("DOMContentLoaded", function(){
    let count = 0;

    const counterDisplay = document.getElementById("text");
    const counterButton = document.getElementById("btn");


    counterButton.addEventListener('click', function(){
        count++;
        counterDisplay.textContent = `You clicked ${count} times`;
    })

})