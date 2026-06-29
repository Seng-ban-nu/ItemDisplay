// Array of items
const items = [
    {
        id: 1,
        name: "Mouse",
        category: "IT",
        inventory: 200,
        price: 240,
    },
    {
        id: 2,
        name: "Keyboard",
        category: "IT",
        inventory: 150,
        price: 490,
    },
    {
        id: 3,
        name: "Monitor",
        category: "IT",
        inventory: 75,
        price: 3200,
    },
    {
        id: 4,
        name: "USB Cable",
        category: "IT",
        inventory: 350,
        price: 120,
    },
    {
        id: 5,
        name: "Notebook",
        category: "Stationery",
        inventory: 500,
        price: 55,
    },
    {
        id: 6,
        name: "Pen",
        category: "Stationery",
        inventory: 900,
        price: 15,
    },
    {
        id: 7,
        name: "Desk Lamp",
        category: "Home",
        inventory: 120,
        price: 750,
    },
    {
        id: 8,
        name: "Water Bottle",
        category: "Lifestyle",
        inventory: 260,
        price: 210,
    },
    {
        id: 9,
        name: "Backpack",
        category: "Lifestyle",
        inventory: 95,
        price: 980,
    },
    {
        id: 10,
        name: "Phone Stand",
        category: "IT",
        inventory: 180,
        price: 160,
    },
    {
        id: 11,
        name: "Headphones",
        category: "IT",
        inventory: 130,
        price: 1450,
    },
];

// Get HTML elements
const select = document.getElementById("itemSelect");
const id = document.getElementById("id");
const name = document.getElementById("name");
const category = document.getElementById("category");
const inventory = document.getElementById("inventory");
const price = document.getElementById("price");

// Add the first empty option
const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "";
select.appendChild(defaultOption);

// Create options from the items array
items.forEach(function (item) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option);
});

// Listen for selection changes
select.addEventListener("change", function () {

    // If empty option is selected, clear all fields
    if (select.value === "") {
        id.textContent = "";
        name.textContent = "";
        category.textContent = "";
        inventory.textContent = "";
        price.textContent = "";
        return;
    }

    // Find the selected item
    const selectedItem = items.find(function (item) {
        return item.id === Number(select.value);
    });

    // Display item details
    id.textContent = selectedItem.id;
    name.textContent = selectedItem.name;
    category.textContent = selectedItem.category;
    inventory.textContent = selectedItem.inventory;
    price.textContent = selectedItem.price;
});