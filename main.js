// 7.1
/* const months = {
  იანვარი: 1,
  თებერვალი: 2,
  მარტი: 3,
  აპრილი: 4,
  მაისი: 5,
  ივნისი: 6,
  ივლისი: 7,
  აგვისტო: 8,
  სექტემბერი: 9,
  ოქტომბერი: 10,
  ნოემბერი: 11,
  დეკემბერი: 12,
};

console.log(months);
 */

// 7.2
/* const person = {
  firstName: "ნატო ",
  lastName: "შონია ",
  gender: "(მდედრობითი)",
};

console.log(person.firstName + person.lastName + person.gender); */

// 7.3
/* const today = new Date();
const data = {
  day: today.getDate(),
  month: today.getMonth() + 1,
  year: today.getFullYear(),
};
console.log(data);
 */

// 7.4
// let obj = {'11key': 'მნიშვნელობა1', 'key-8': 'მნიშვნელობა2', 'key4': 'მნიშვნელობა3'};

// 7.5
// let obj = { "9name": 10, key7: 20, "a-b": 30, "city 10": 40, city10: 50 };

// 7.6
/* let products = {
  pr1: "ბანანი",
  pr2: "მარწყვი",
  pr3: "მსხალი",
  pr4: "მარწყვი",
  pr5: "ატამი",
  pr6: "საზამთრო",
  pr7: "მარწყვი",
};

products.pr2 = "ალუბალი";
products.pr4 = "ალუბალი";
products.pr7 = "ალუბალი";

console.log(products); */

// 7.7
/* const car = {
  model: { manufacturer: "BMW", mark: "X6" },
  color: "black",
  is_left_hand_drive: false,
  number_of_doors: 5,
};

console.log(car.model.manufacturer, car.color); */

// 7.8
/* const car = {
  model: { manufacturer: "BMW", mark: "X6" },
  color: "black",
  is_left_hand_drive: false,
  number_of_doors: 5,
};

car.color = "white";
car.is_left_hand_drive = true;
console.log(car);
 */

// 7.9
/* let obj = { a: 7, b: 8, c: 9 };

for (let x in obj) {
  obj[x] = obj[x] ** 2;
}

console.log(obj); */

// 7.10
/* const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publisher: "O'Reilly Media",
  year_of_publication: 2011,
};

const keysArray = Object.keys(book);
console.log(keysArray);

const valuesArray = Object.values(book);
console.log(valuesArray); */

// 7.11
/* const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
};

const year = {
  year_of_publication: 2011,
};
const mergeBook = { ...book, ...year };

console.log(mergeBook); */

// 7.12
/* const user = {
  userName: "superadmin",
  password: "Godzilla",
};

const { userName, password } = user;

console.log("Username:", userName);
console.log("Password:", password); */

// 7.13
/* const student = {
  studentName: "პეტრემგელაძე",
  paydVolum: 700,
};

function canEnrollToCourse(student) {
  if (student.paydVolum >= 1125) {
    return true;
  } else {
    return false;
  }
}

console.log(canEnrollToCourse(student)); */

// 7.14
/* const purchases = {
  foods: ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
  amountPaid: [4, 6, 4, 12, 15],
  date: "27/11/2021",
};

function getTotalAmount(purchases) {
  let total = 0;
  for (let i of purchases) {
    total += i;
  }
  return total;
}

console.log(getTotalAmount(purchases.amountPaid)); */

// 7.15
/* const car = {
  manufacturer: {
    name: "BMW",
    location: "Munich, Germany",
    year_of_establish: 1916,
  },
  model: "X6",
  color: "black",
  is_left_hand_drive: false,
};

function getFullModelOfCar(car) {
  return car.manufacturer.name + " " + car.model;
}

console.log(getFullModelOfCar(car)); */

// 7.16
/* const purchases = [
  { item: "hammer", price: 22 },
  { item: "screwdriver", price: 17 },
  { item: "nails", price: 8 },
];

function getTotalPrice(purchases) {
  let totalPrice = 0;
  for (let x of purchases) {
    totalPrice += x.price;
  }
  return totalPrice;
}

console.log("Total price:", getTotalPrice(purchases)); */

// 7.17
/* const purchases = [
  { item: "hammer", price: 22 },
  { item: "screwdriver", price: 17 },
  { item: "nails", price: 8 },
];

function getTotalPrice(purchases) {
  let totalPrice = 0;
  for (let x of purchases) {
    totalPrice += x.price;
  }
  return totalPrice;
}

function getAveragePrice(purchases) {
  const total = getTotalPrice(purchases);
  const average = total / purchases.length;
  return average;
}

console.log("Average price:", getAveragePrice(purchases)); */

// 7.18
/* const product = {
  weight: "1kg",
  quantity: 5,
  price: "$10",
  photo: "product.jpg",
};

const keysContainer = document.getElementById("keys");
const valuesContainer = document.getElementById("values");
const keyValuePairsContainer = document.getElementById("keyValuePairs");

keysContainer.innerHTML = "<b>Keys:</b> " + Object.keys(product).join(", ");

valuesContainer.innerHTML =
  "<b>Values:</b> " + Object.values(product).join(", ");

keyValuePairsContainer.innerHTML = "<b>Key-Value:</b> ";
for (const key in product) {
  keyValuePairsContainer.innerHTML += `<br>${key}: ${product[key]}`;
} */

// 7.19
/* let person = {
  firstName: "Natia",
  age: 30,
  sayHello: function () {
    console.log("Hello " + person.firstName);
  },
};

person.sayHello(); */

// 7.20
/* const product = {
  weight: "1kg",
  quantity: 5,
  price: "10 lari",
  photo: "product.jpg",
  onStock: function () {
    if (this.quantity === 0) {
      return "მარაგი ამოიწურა";
    } else {
      return "მარაგშია " + this.quantity + " რაოდენობა";
    }
  },
};

document.getElementById("weight").innerText = "Weight: " + product.weight;
document.getElementById("price").innerText = "Price: " + product.price;
document.getElementById("quantity").innerText = "Quantity: " + product.quantity;
document.getElementById("stock").innerText = product.onStock();

document.getElementById("photo").src = product.photo; */

// 7.21
/* const student = {
  studentName: "Petremgeladze",
  paydVolum: 700,
};

function changeProperty(key, value, obj) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = value;
    console.log(`Property '${key}' updated to '${value}'.`);
  } else {
    console.log(`Property '${key}' does not exist.`);
  }
}

changeProperty("studentName", "Roini vekua", student);
changeProperty("paydVolum", 900, student);

console.log(student); */
