// addeds a rendome text if List is emplty
function displayRandomMessage() {
  const randomeTextInput = document.querySelector(".randomText").firstChild;
  const randomeText = [
    "Wow nothing to do! Awesome...", 
    "All done! Way to go", 
    "All empty here, wanna add something to do?",
    "Ready to chill? Cause there is nothing on this list"
  ];
  let randomeTextIndex = Math.floor(Math.random() * randomeText.length);

  randomeTextInput.style.display = "flex"
  randomeTextInput.innerText = randomeText[Number(randomeTextIndex)];
}

export {
  displayRandomMessage
};