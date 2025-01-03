console.log("SCRIPT LOADED");
alert("SCRIPT LOADED");

const handleMouseOver = (e) => {
  const target = e.target;
  if (!target) return;

  // document
  //   .querySelectorAll(".inspector-highlight")
  //   .forEach((el) => el.classList.remove("inspector-highlight"));
  // target.classList.add("inspector-highlight");

  target.classList.add("inspector-highlight");

  console.log("added classs");
};

const handleClick = (e) => {
  e.preventDefault();
  const target = e.target;
  if (!target) return;
  // handleElementSelect(target);
  //   target.classList.add("inspector-highlight");

  //   console.log("added classs");
};

const rootComponentElement = document.querySelector(
  ".craft-space-ai-component-root"
);

console.log("Root component element ==> ", rootComponentElement);
setTimeout(() => {
  const rootComponentElement = document.querySelector(
    ".craft-space-ai-component-root"
  );

  console.log("Root component element ==> ", rootComponentElement);

  if (rootComponentElement) {
    rootComponentElement.addEventListener("mouseover", handleMouseOver);
    rootComponentElement.addEventListener("click", handleClick);

    console.log("Event listeners added");
    alert("WORKED");
  } else {
    alert("DID NOT WORK");
    console.log("DID NOT WORK");
  }
}, 5000);
