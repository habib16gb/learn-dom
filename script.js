const header = document.querySelector("header");
const title = document.querySelector(".title");

title.textContent = "new title";
title.style.color = "white";
title.style.padding = "1rem";
title.style.backgroundColor = "#333";
// console.log(header)
// console.log(header.id);
// console.log(header.classList);
// console.log(header.textContent);

// *********************************
// attributes vs properties
// *********************************

// const input_text = document.querySelector('input[type="text"]');
// console.log(input_text);

// input_text.value = "new value";
// input_text.setAttribute("value", "new value");
// const input_value = input_text.getAttribute("value");
// console.log(input_value)

// *********************************
// Selecting multiple elements
// *********************************
const liS = document.querySelectorAll("li");
const liSElement = document.getElementsByTagName("li");
// // const liS = document.getElementsByTagName("li");
// for (const li of liS) {
//   console.dir(li);
// }

// *********************************
// traversing the DOM
// parent: parentNode, parentElement, closest()
// children: firstChild, firstElementChild, lastChild, lastElementChild, childNode, children
// sibling: previousElementSibling, nextElementSibling, previousSibling, nextSibling,
// *********************************
// console.log('header', header)
// console.log('header parentNode',header.parentNode)
// console.log('header parentElement', header.parentElement)
// console.log("closest()", title.closest('.title-div'));
const body = document.querySelector("body");
// console.log("body children", body.children);
// console.log("body firstChild", body.firstChild);
// console.log("body firstElementChild", body.firstElementChild);
// console.log("body lastChild", body.lastChild);
// console.log("body lastElementChild", body.lastElementChild);
// console.log("body childNode", body.childNodes);
// console.log("body children", body.children);
// console.log(header.previousElementSibling);
// console.log(header.previousSibling);
// console.log(header.nextElementSibling);
// console.log(header.nextSibling);

// *********************************
// Styling DOM Elements
// *********************************
const ul = document.querySelector("ul");
// ul.style.backgroundColor = "green";
// ul.classList.remove("red-background");
// ul.classList.add("blue-background");
// ul.className = "";

const red_btn = document.querySelector(".btn-red");
const green_btn = document.querySelector(".btn-green");
const blue_btn = document.querySelector(".btn-blue");
const white_btn = document.querySelector(".btn-white");

red_btn.addEventListener("click", () => {
  ul.className = "list";
  ul.classList.add("red-background");
});
blue_btn.addEventListener("click", () => {
  ul.className = "list";
  ul.classList.add("blue-background");
});
green_btn.addEventListener("click", () => {
  ul.className = "list";
  ul.classList.add("green-background");
});
white_btn.addEventListener("click", () => {
  ul.className = "list";
  ul.classList.add("white-background");
});

// *********************************
// Creating instering elements
// *********************************
// ul.textContent = 'new text in ul'
// ul.innerHTML = '<h2>new title in ul</h2>'
ul.innerHTML = ul.innerHTML + "<li>new item created by javascript</li>";

const para1 = document.querySelector(".para1");
para1.insertAdjacentHTML("beforebegin", "<p>add paragraph before begin</p>");
para1.insertAdjacentHTML("afterbegin", "<p>add paragraph afterbegin</p>");
para1.insertAdjacentHTML("beforeend", "<p>add paragraph before end</p>");
para1.insertAdjacentHTML("afterend", "<p>add paragraph after end</p>");

const newLi = document.createElement("li");
const anotherLi = document.createElement("li");
const anotherLi2 = document.createElement("li");
newLi.append("new item with append");
anotherLi.append("another item add");
anotherLi2.append("another item add 2");
// ul.appendChild(newLi)
// ul.append(newLi)
ul.prepend(newLi);
ul.lastElementChild.before(anotherLi);
ul.children[3].before("before item 3");
ul.children[3].after("after item 3");
ul.children[4].before(anotherLi2);
ul.children[1].replaceWith("replaced by item 1");

console.log(liS);
console.log(liSElement);

console.log(Array.isArray(liS));
