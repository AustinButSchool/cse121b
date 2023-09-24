/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = `Austin Jones`;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let profilePicture = `cse121b/images/placeholder.jpeg`;

/* Step 3 - Element Variables */
const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.getElementById(`home`);

/* Step 4 - Adding Content  */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
nameElement.textContent = currentYear;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `Profile image of ${profilePicture}`);

/* Step 5 - Array */
const favFoods = ["Macaroni", "Quesodillas", "Tacos"];
foodElement.innerHTML = favFoods;
let moreFood = "Mozzerella Salad";
favFoods.push(moreFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.splice(-1);
foodElement.innerHTML += `<br>${favFoods}`;
