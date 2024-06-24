const users = [
  {
    id: "88e037fd-949e-45b7-af69-d527d4260890",
    firstName: "Ivan",
    lastName: "Stanojevic",
    profileImage:
      "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F740%2Fpicture%2Foptimized%2Fhuge_ca63a1c988587f1a0b1c8dc2f3a6d1c9-a1f1477a2af546b84d3d4416cc7dbbcf.jpg&width=480",
    age: 37,
  },
  {
    id: "c3029b9b-7c67-49ed-bc23-8637737c89a4",
    firstName: "Valentina",
    lastName: "Jovic",
    profileImage:
      "https://media.licdn.com/dms/image/C4D03AQENGTpCmq4ysA/profile-displayphoto-shrink_200_200/0/1596395204480?e=2147483647&v=beta&t=vk37zscbwElLtIcCO-iqq_z5suDNdDoHYa03nB04JGE",
    age: 34,
  },
  {
    id: "ba833545-3d52-447b-9879-fe5e27fbf594",
    firstName: "Nikola",
    lastName: "Stankovic",
    profileImage:
      "https://media.licdn.com/dms/image/D4E03AQHxSwr07IbdpQ/profile-displayphoto-shrink_200_200/0/1669307005142?e=2147483647&v=beta&t=uxK5fXiS37D4FPbU9yg0t_CiZQS4OWGm-OxHvuPz0h8",
    age: 35,
  },
];

const cardsList = document.getElementById("cardsList");

function createCard(user) {
  cardsList.innerHTML += `
    <div class="cardsDiv">
      <img class="usersImg" src="${user.profileImage}">
      <div class="txtDiv">
        <h1 class="usersFirstName">${user.firstName || "N/A"}</h1>
        <h1 class="usersLastName">${user.lastName || "N/A"}</h2>
        <p class="age">${user.age || ""}</p>
        <div>
    </div>
    `;
}
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  createCard(user);
}
const circleCardImg = document.getElementById("circleCard");

function circleCard(user) {
  circleCardImg.innerHTML += `<div class="circleDiv">
      <img class="usersImg2" src="${user.profileImage}">
    </div>
    `;
}
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  circleCard(user);
}

const corporateCardDiv = document.getElementById("corporateCard");
function corporateCard(user) {
  corporateCardDiv.innerHTML += `
    <div class="cardsDiv3">
      <img class="usersImg3" src="${user.profileImage}">
      <div class="txtDiv3">
        <h1 class="usersFirstName3">${user.firstName || "N/A"}</h1>
        <h1 class="usersLastName3">${user.lastName || "N/A"}</h2>
        <div>
    </div>
    `;
}
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  corporateCard(user);
}
/*
createCard({
  profileImage:
    "https://media.licdn.com/dms/image/C5603AQHI3TIiG4ER1g/profile-displayphoto-shrink_200_200/0/1602864458459?e=2147483647&v=beta&t=6cwDKCoBGyypyG07mAwKttv2tWgAR4GYwgNZjsP9Ynk",
  firstName: "Slavoljub",
  lastName: "Popovic",
  age: 56,
});
*/

// create 3 functions
//first function just style this one
//second function only image displayed in a circle
//third border radius img and only name and last name in bottom left corner on img
/*
const result = [];
for (let i = 0; i < users.length; i++) {
  result[i] =
    (users[i].firstName || "").toLowerCase() +
    " " +
    (users[i].lastName || "").toLowerCase() +
    ": " +
    (users[i].age || "");
}

console.log(result.join("#"));

const arr = [
  56,
  null,
  undefined,
  false,
  "Valentina",
  { bla: { foo: "bar" } },
  [1, 2, 3],
];
console.log(arr[5].bla.foo[0]);
*/
