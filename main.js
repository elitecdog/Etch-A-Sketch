let globalColor = "red";
let globalSize=0;
const container = document.querySelector(".container");

function makeRows(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (c = 0; c < (rows * rows); c++) {
      globalSize = rows*rows;
      let cell = document.createElement("div");
      cell.setAttribute('id',c);
      /*cell.innerText = (c);*/
      cell.addEventListener('mouseover',colorUpdater);
      container.appendChild(cell).className = "grid-item";
    };
  };
  makeRows(16,16);

function colorUpdater(){
    this.style.backgroundColor = globalColor;
}
 
const generateGrid = document.getElementById('resize');
generateGrid.addEventListener('click', newGrid)
function newGrid() {
  let size = prompt('Enter a size (numbers only)')
  if(size>50) {
    size = prompt('Enter A Smaller Number (Less than 50)');
    while(container.childNodes[0] !== undefined) {
      container.childNodes[0].remove();
    }
    makeRows(size);
  }
  else {
  while(container.childNodes[0] !== undefined) {
    container.childNodes[0].remove();
  }
  makeRows(size);
}
}

const resetDoc = document.getElementById('reset');
resetDoc.addEventListener('click', resetToWhite);

function resetToWhite() {
  for(let i = 1; i<=globalSize; i++)
  container.childNodes[i].style.backgroundColor = 'white';
}

const chooseColor = document.getElementById('chooseColor');
chooseColor.addEventListener('click', updateGlobalColor);

function updateGlobalColor() {
  let newColor = prompt("Enter either 'red', 'blue', 'black', 'green', or 'yellow'")
  globalColor = newColor;
}

const eraser = document.getElementById('erase');
eraser.addEventListener('click', setColorWhite)

function setColorWhite() {
  globalColor = 'white';
}