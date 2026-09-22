let products = [
  { name: "Parfum Rose", price: 120,inStock: true},
  { name: "Parfum Lemon", price: 80, inStock: false},
  { name: "Parfum Vanilla", price: 150, inStock: true},
  { name: "Parfum Fresh", price: 60, inStock :false}
];

function checkPrise(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > 100) {
      console.log(arr[i].name, '- Дорогий продукт');
  } else {
    console.log(arr[i].name, '- Доступний продут');
  }
}
}
// checkPrise(products);

function checkInStock(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].inStock === true) {
      console.log(arr[i].name, 'Товар в наявності');
  }  else 
    console.log(arr[i].name, '- Товар не в наявності');
}
}

// checkInStock(products);

let studentClassOne = [
  {name: 'Jhon', mark: 10},
  {name: 'Vitaly', mark: 8},
  {name: 'Jesica', mark: 6},
  {name: 'Andry', mark: 5},
  {name: 'Roman', mark: 3}
]

let studentClassTwo = [
  {name: 'Anton', mark: 1},
  {name: 'Pasha', mark: 8},
  {name: 'Veronica', mark: 12},
  {name: 'Julia', mark: 8},
  {name: 'Mark', mark: 7}
]

function checkMark(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].mark >= 8) {
      console.log(arr[i].name, '- Учень молодець');
    } else {
      console.log(arr[i].name, '- Учню потрібно старатись')
    }
  }
}

checkMark(studentClassOne);
checkMark(studentClassTwo);




