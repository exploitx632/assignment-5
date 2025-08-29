// get element with id and class

function getElementWithId(id) {
  const element = document.getElementById(id);
  return element;
}
function getElementsWithClass(className) {
  const element = document.querySelectorAll(className);
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
const heartBtn = getElementsWithClass(".heart");
for (let heart of heartBtn) {
  heart.addEventListener("click", function () {
    const heartValue = parseInt(getInnerValue("heart-count"));
    let heartCount = heartValue + 1;
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
  historyContainer.innerHTML = '';
  for (let data of callHistoryData) {
    let div = document.createElement("div");
    div.innerHTML = `<div class='flex justify-between mt-3 bg-gray-100 p-[15px] w-auto rounded-2xl items-center'>
                <div>
                    <h1 class='text-xl'>${data.name}</h1>
                    <p>${data.number}</p>
                </div>
                <div>${data.time}</div>
            </div>`;
    historyContainer.appendChild(div);
  }
}
// call service function for each button
function callService(service, number) {
  let cost = 20;
  let balance = parseInt(getInnerValue("balance"));
  if (balance < cost) {
    alert(
      "You don't have enough coins, you need at least 20 coins to make a call."
    );
    return;
  }
  alert(`📞 Calling ${service} ${number}...`);
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
getElementWithId("police-call").addEventListener("click", function () {
  callService("Police Helpline", "999");
});

// fire service section
getElementWithId("fire-call").addEventListener("click", function () {
  callService("Fire Service", "999");
});

// ambulance service section
getElementWithId("ambulance-call").addEventListener("click", function () {
  callService("Ambulance Service", "1994-999999");
});

// woman and child helpline section
getElementWithId("help-call").addEventListener("click", function () {
  callService("Woman & Child Helpline", "109");
});

// anti corruption section
getElementWithId("govt-call").addEventListener("click", function () {
  callService("Anti-Corruption Helpline", "106");
});

// electricity helpline section
getElementWithId("electricity-call").addEventListener("click", function () {
  callService("Electricity Helpline", "16216");
});

// brac helpline section
getElementWithId("ngo-call").addEventListener("click", function () {
  callService("Brac Helpline", "16445");
});

// bangladesh railway helpline
getElementWithId("travel-call").addEventListener("click", function () {
  callService("Bangladesh Railway Helpline", "163");
});

// copy btn
let copyBtn = getElementsWithClass(".copy-btn");
for (let btn of copyBtn) {
  btn.addEventListener("click", function () {
    let value = parseInt(getInnerValue("copy-count"));
    let count = value + 1;
    setInnerValue("copy-count", count);

    // copy to clipboard
    let box = btn.closest(".box");
    let number = box.querySelector(".number").innerText;
    navigator.clipboard.writeText(number).then(function () {
      alert(`Number Copied ${number}`);
    }).catch(function(){
        alert('Number Copied Failed');
    });
  });
}
// clear btn 
getElementWithId("clear-btn").addEventListener("click", function () {
    callHistoryData.length = 0;
  getElementWithId("history-container").innerHTML = "";
  getElementWithId("balance").innerText = "100";
  getElementWithId("heart-count").innerText = "0";
  getElementWithId("copy-count").innerText = "0";
});
