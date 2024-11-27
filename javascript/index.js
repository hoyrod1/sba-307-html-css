console.log(`==================== Sanity Check For index.js ====================`);
const clickMe = document.querySelector("#div-button");
// console.log(clickMe);
clickMe.addEventListener("click", testButton);
function testButton(e) {
  alert("You have hit your target");
}
