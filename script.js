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

// set inner value of balance
function setInnerBalance(value){
let availableBalance = getElementWithId('balance');
availableBalance.innerText = value;
}

getElementWithId('national-call').addEventListener('click',function(){
    let cost = 20;
    let balance = parseInt(getInnerValue('balance'));
    if(balance <20){
        alert("You don't have enough coins, you need at least 20 coins to make a call.");
        return;
    }
    alert('Calling National Emergency Service 999')
    let balanceAfterCost = balance - cost ;
    setInnerBalance(balanceAfterCost);
})

