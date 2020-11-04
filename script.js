// queryselector

const showMe = document.querySelector("#showMeButton");
const refreshData = document.querySelector("#deleteButton");
const friends = document.querySelector("#friends");


// global location objetcs o addEventListener
showMe.addEventListener("click", (event) => {
  event.preventDefault();

  document.getElementById("pageLocation").innerHTML =
    "Page location is " + window.location.href;
  console.log(window.location.href);

  document.getElementById("hostname").innerHTML =
    "Page hostname is " + window.location.hostname;
  console.log(window.location.hostname);

  document.getElementById("path").innerHTML =
    "Page path is " + window.location.pathname;
  console.log(window.location.pathname);

  document.getElementById("protocol").innerHTML =
    "Page protocol is " + window.location.protocol;
  console.log(window.location.protocol);

  document.getElementById("number").innerHTML =
    "Port number is " + window.location.port;
  console.log(window.location.port);
});

// queryselectorAll o arrow function o console log
refreshData.addEventListener("click", (event) => {
  event.preventDefault();
  let oldData = document.querySelectorAll(".data");
  console.log(oldData);
  for (let i = 0; i < oldData.length; i++) {
    oldData[i].innerHTML = "";
  }
});

// function o createElemnt o appendChild
function createButton() {
  const btn = document.createElement("BUTTON");
  btn.innerHTML = "Good";
  document.getElementById("appended").appendChild(btn);
  event.preventDefault();
}

// Map function o filter
const persons = [
  { firstname: "Malcom", lastname: "Reynolds", age: 10 },
  { firstname: "Kaylee", lastname: "Frye", age: 20 },
  { firstname: "Jayne", lastname: "Cobb", age: 30 },
];

function getFullName(person) {
  var fullname = [person.firstname, person.lastname].join(" ");
  console.log(fullname);
  return fullname;
}

friends.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("friendList").innerHTML = persons.map(getFullName);
});

function checkAage(personage) {
  let oldEnoughFriend = personage.age;
  console.log(oldEnoughFriend);
  return oldEnoughFriend > 19;
}

oldEnough.addEventListener("click", (event) => {
  event.preventDefault();
  let listOfOldEnough = persons.filter(checkAage).map(getFullName);

  document.getElementById("oldEnoughList").innerHTML = listOfOldEnough;
});
