const form = document.getElementById("itemform");


Form.addEventListener("submit",function(event) {
event.preventDefault();


const name = document.getElementById("itemName").Value;
const type = document.getElementById("itemType").Value;
const location = document.getElementById("location").Value;

alert(
    "Report received!\n" +
    "Item: " + name +
    "\nType: " + type +
    "\nlocation: " + location

);

form.reset();
});
