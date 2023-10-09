/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Austin Jones",
  photo: `cse121b/images/placeholder.jpeg`,
  favoriteFoods: ["Tacos", "Burritos", "Home Made Cake", "Burgers", "Ribs"],
  hobbies: ["Animating", "Doodling", "Reading", "Eating", "Sleeping"],
  placesLived: [],
};
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
  {
    place: "Sugar Hill, Ga",
    length: "5 years",
  },
  {
    place: "Henderson, Nv",
    length: "5 years",
  },
  {
    place: "Battle Ground, Wa",
    length: "3 years",
  },
  {
    place: "Rexburg, Id",
    length: "2 years",
  }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute(`src`, myProfile.photo);

document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobbies) => {
  let ul = document.createElement("ul");
  ul.textContent = hobbies;
  document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
  let dt = document.createElement("dt");
  dt.textContent = placeLived.place;
  let dd = document.createElement("dd");
  dd.textContent = placeLived.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
