let groceryList = [];

function createGroceryItem(name, quantity, costPerUnit, purchased = false) {
    return {
        name: name,
        quantity: quantity,
        costPerUnit: costPerUnit,
        purchased: purchased
    };
}

groceryList.push(createGroceryItem("Milk", 2, 1.5));
groceryList.push(createGroceryItem("Bread", 1, 2.0));
groceryList.push(createGroceryItem("Eggs", 12, 0.2));

function viewGroceryList() {
    console.log("Grocery List:");
    groceryList.forEach((item, index) => {
        if (item !== null) {
            console.log(`${index + 1}. Name: ${item.name}, Quantity: ${item.quantity}, Cost per Unit: $${item.costPerUnit}, Purchased: ${item.purchased}`);
        }
    });
}

function removeItem(index) {
    if (index >= 0 && index < groceryList.length) {
        groceryList[index] = null;
    }
}

function updatePurchaseStatus(index, status) {
    if (index >= 0 && index < groceryList.length && groceryList[index] !== null) {
        groceryList[index].purchased = status;
    }
}

groceryList.push(createGroceryItem("Apples", 5, 0.5));

groceryList.push(undefined);

function computeTotalCost() {
    let totalCost = 0;
    groceryList.forEach(item => {
        if (item !== null && item !== undefined) {
            totalCost += item.quantity * item.costPerUnit;
        }
    });
    return totalCost;
}

// Example of usage
viewGroceryList();
removeItem(1);
updatePurchaseStatus(2, true);
viewGroceryList();
console.log("Total Cost: $" + computeTotalCost());
