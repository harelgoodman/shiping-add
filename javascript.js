document.addEventListener("DOMContentLoaded", function () {
    loadShoppingList();
});

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const newItem = itemInput.value.trim();

    if (newItem !== "") {
        saveItem(newItem);
        itemInput.value = "";
        loadShoppingList();
    }
}

function saveItem(item) {
    // For simplicity, you can use localStorage here.
    // In a real application, you would use an API to store data on the server.
    let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    shoppingList.push(item);
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

function loadShoppingList() {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    const shoppingListElement = document.getElementById("shoppingList");

    // Clear the current list
    shoppingListElement.innerHTML = "";

    // Display the updated list
    shoppingList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        shoppingListElement.appendChild(li);
    });
}
