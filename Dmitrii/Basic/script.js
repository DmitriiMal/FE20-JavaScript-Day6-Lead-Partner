// ////////////////// //
// /// Basic Ex 1 /// //
// ////////////////// //

let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let sandwichesObj = JSON.parse(sandwiches);
console.log(sandwichesObj);

let friesObj = JSON.parse(fries);
console.log(friesObj);

const result = (document.querySelector('#result').innerHTML = `
<p>My favorite sandwich is a ${sandwichesObj.sandwich} which has approximately ${sandwichesObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories.</p>
`);

// for (let i = 0; i < sandwichesObj; i++) {}
