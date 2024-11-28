console.log(`==================== Sanity Check For about.js ====================`);
const clickMe = document.querySelector("#about-div-button");
// console.log(clickMe);
clickMe.addEventListener("click", testButton);
function testButton(e) {
  alert("You have hit your about page `target");
}
