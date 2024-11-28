console.log(`==================== Sanity Check For about.js ====================`);
const clickMe = document.querySelector("#contact-div-button");
// console.log(clickMe);
clickMe.addEventListener("click", testButton);
function testButton(e) {
  alert("You have hit your Contact page target");
}
