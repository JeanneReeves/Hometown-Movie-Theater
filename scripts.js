// A simple program for totaling and tracking ticket purchases

// Global functions inside Object Literal making them methods
const tickets = {
  multiply(a, b, c) {
    return a * b * c;
  }
};

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const operation = document.querySelector("#operation");
const select = document.querySelector("select");
const output = document.querySelector("output");
let ticketTotal = 0;

// Use an anonymous callback function as the 2nd argument
// What do we want to listen for and what do we want to do
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior - Don't submit
  event.preventDefault();

  // Form inputs have a property called value
  const ticket = tickets.multiply(num1.value, num2.value, operation.value);

  // Totaling of tickets
  ticketTotal = ticket + ticketTotal;

  output.textContent = ticketTotal;

  //w3schools.com/js/js_htmldom_nodes.asp
  // Adding receipts of transactions
  const para = document.createElement("p");
  const node = document.createTextNode(
    "Number of tickets: " +
      num1.value +
      ", Price of tickets: " +
      num2.value +
      ", Discount: " +
      operation.value +
      ", Total: " +
      tickets.multiply(num1.value, num2.value, operation.value)
  );
  para.appendChild(node);
  const element = document.getElementById("ticketHistory");
  element.appendChild(para);
});
