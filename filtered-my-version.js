

var searchValue = document.querySelector("#search-value");
var moneyList = document.querySelector("#money-list");

var money = [
  "flurbo",
  "schmeckle",
  "brapple",
  "smidgen",
  "blemflarck"
];

// first function - creating the list items in the ul //
function createListItems(list) {
  for (var item of list) {
    var li = document.createElement("li");
    li.textContent = item;
    moneyList.appendChild(li);
  }
}

createListItems(money); //call function

// second function - what happens when letter is entered in query//
 //creating filtered list //
function keyHappened(evt) {
  var query = searchValue.value;
  var filteredMoney = [];
  for (var item of money) {
    if(item.indexOf(query) > -1) { //tries to match letter entered to index//
      filteredMoney.push(item)
    }
  }
  moneyList.innerHTML = '';
  createListItems(filteredMoney); //call function passing in filtered array
}

searchValue.addEventListener("keyup", keyHappened);
