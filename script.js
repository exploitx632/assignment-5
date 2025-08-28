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
function setInnerBalance(value) {
  let availableBalance = getElementWithId("balance");
  availableBalance.innerText = value;
}

// history data array
const callHistoryData = [];
// history data handle
function historyData(type, num) {
  let data = {
    name: type,
    number: num,
    time: new Date().toLocaleTimeString(),
  };
  callHistoryData.push(data);
}
// store data on history section
function storeData() {
  const historyContainer = getElementWithId("history-container");
  let div = document.createElement("div");
  for (let data of callHistoryData) {
    div.innerHTML = `<div class='flex justify-between mt-3 bg-gray-100 p-[15px] w-auto rounded-2xl items-center'>
                <div>
                    <h1 class='text-xl'>${data.name}</h1>
                    <p>${data.number}</p>
                </div>
                <div>${data.time}</div>
            </div>`;
  }
  historyContainer.appendChild(div);
}
// call service function for each button
function callService(service, number) {
  let cost = 20;
  let balance = parseInt(getInnerValue("balance"));
  if (balance < 20) {
    alert(
      "You don't have enough coins, you need at least 20 coins to make a call."
    );
    return;
  }
  alert(`Calling ${service} ${number}`);
  let balanceAfterCost = balance - cost;
  setInnerBalance(balanceAfterCost);
  historyData(service, number);
  storeData();
}

// national emergency service button
getElementWithId("national-call").addEventListener("click", function () {
  callService("National Emergency Service", "999");
});

// emergency police section 
getElementWithId('police-call').addEventListener('click',function(){
    callService('Police Helpline','999');
});


