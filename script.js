"use strict";

const destination = document.querySelector(".grid");
const redBtn = document.querySelector(".redBtn");
const greenBtn = document.querySelector(".greenBtn");
const blueBtn = document.querySelector  (".blueBtn");

// let clickedRed = false;
// let clickedGreen = false;
// let clickedBlue = false;
let selectedColor = "";
// const grid = document.querySelector(".grid");

for (let i = 0; i < 100; i++){
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "cell");
    destination.append(newLi);
}


// select nodeList after cells are added to HTML:
const allOfTheListItems = document.querySelectorAll(".cell");
console.dir(allOfTheListItems);

redBtn.addEventListener("click", ()=>{
    // clickedRed = true;
    // clickedGreen = false;
    // clickedBlue = false;
    selectedColor = "red";
    console.log(selectedColor);
});

greenBtn.addEventListener("click", ()=>{
    // clickedGreen = true;
    // clickedRed = false;
    // clickedBlue = false;
    selectedColor = "green";
    console.log(selectedColor);
});

blueBtn.addEventListener("click", ()=>{
    // clickedBlue= true;
    // clickedRed = false;
    // clickedGreen = false;
    selectedColor = "blue";
    console.log(selectedColor);
});

// nodeList is treated like an array: 
// we can loop through it with an array method 
allOfTheListItems.forEach((listItem)=>{
    listItem.addEventListener("click", ()=>{
        listItem.style.backgroundColor = selectedColor;
    });
});


// ---want to avoid putting loop inside loop bc it hurts performance 
// for(let i = 0; i < 10; i++){
//     const row = document.createElement("div");
//     grid.append(row);
//     row.classList.add("row");
//     for(let j = 0; j < 10; j++){
//         const cell = document.createElement("div");
          //add event listener here 
//         cell.classList.add("cell");
//         row.appendChild(cell);
//     }
// }