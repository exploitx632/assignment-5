// get element with id and class

function getElementWithId(id) {
  const element = document.getElementById(id);
  return element;
}
function getElementWithClass(Class) {
  const element = document.getElementsByClassName(Class);
  return element;
}

// get inner text value
function getInnerValue(element) {
  const text = getElementWithId(element).innerText;
  return text;
}

// set inner text value

function setInnerValue(id, value) {
  let heart = getElementWithId(id);
  heart.innerText = value;
}

// heart count btn
const heartBtn = getElementWithClass("heart");
for (let heart of heartBtn) {
  heart.addEventListener("click", function () {
   const heart = parseInt(getInnerValue("heart-count"));
    let heartCount = heart + 1;
    setInnerValue("heart-count", heartCount);
  });
}
