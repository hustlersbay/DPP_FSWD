// Office Supplies Inventory Management

// Initialize an inventory array with some items
let inventory = ['Pencil', 'Sketchbook', 'Whiteboard Marker', 'Glue Stick', 'Tape'];

// Function to display the current inventory
const displayInventory = (items) => {
    console.log('Current Inventory:');
    if (items.length === 0) {
        console.log('The inventory is currently empty.');
    } else {
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
};

// Function to add items to the inventory
const addItem = (items, newItem) => {
    items.push(newItem);
    console.log(`${newItem} has been successfully added to the inventory.`);
};

// Function to remove the last item from the inventory
const removeLastItem = (items) => {
    if (items.length > 0) {
        const removedItem = items.pop();
        console.log(`${removedItem} has been removed from the inventory.`);
    } else {
        console.log('There are no items left to remove.');
    }
};

// Function to remove the first item from the inventory
const removeFirstItem = (items) => {
    if (items.length > 0) {
        const removedItem = items.shift();
        console.log(`${removedItem} has been removed from the inventory.`);
    } else {
        console.log('There are no items left to remove.');
    }
};

// Function to add items to the beginning of the inventory
const addItemToBeginning = (items, newItem) => {
    items.unshift(newItem);
    console.log(`${newItem} has been successfully added to the beginning of the inventory.`);
};

// Function to reverse the inventory order
const reverseInventory = (items) => {
    items.reverse();
    console.log('The inventory has been reversed successfully.');
};

// Function to join all inventory items into a string
const joinInventory = (items, separator = ', ') => {
    const inventoryString = items.join(separator);
    console.log('All inventory items joined into a string:', inventoryString);
    return inventoryString;
};

// Function to convert inventory to a string
const inventoryToString = (items) => {
    const inventoryString = items.toString();
    console.log('Inventory converted to string:', inventoryString);
    return inventoryString;
};

// Function to remove an item from the inventory by index
const removeItem = (items, index) => {
    if (index >= 0 && index < items.length) {
        const removedItem = items.splice(index, 1)[0];
        console.log(`${removedItem} at index ${index} has been successfully removed.`);
    } else {
        console.log('Invalid index provided. No item was removed.');
    }
};

// Function to search for an item in the inventory
const searchItem = (items, item) => {
    const index = items.indexOf(item);
    if (index !== -1) {
        console.log(`${item} is located at index ${index}.`);
    } else {
        console.log(`${item} is not found in the inventory.`);
    }
    return index;
};

// Function to sort the inventory alphabetically
const sortInventory = (items) => {
    items.sort();
    console.log('The inventory has been sorted alphabetically.');
};

// Function to get a slice of the inventory
const getInventorySlice = (items, start, end) => {
    const slice = items.slice(start, end);
    console.log(`Slice of inventory from index ${start} to ${end}:`, slice);
    return slice;
};

// Function to delete an item from the inventory using delete operator
const deleteItem = (items, index) => {
    if (index >= 0 && index < items.length) {
        delete items[index];
        console.log(`Item at index ${index} has been deleted from the inventory.`);
    } else {
        console.log('Invalid index provided. No item was deleted.');
    }
};

// Usage example
console.log('Initial inventory:');
displayInventory(inventory);

addItem(inventory, 'Coloring Book');
removeLastItem(inventory);
removeFirstItem(inventory);
addItemToBeginning(inventory, 'Ruler');
reverseInventory(inventory);

console.log('\nUpdated inventory:');
displayInventory(inventory);

joinInventory(inventory);
inventoryToString(inventory);
removeItem(inventory, 1);

console.log('\nInventory after removal:');
displayInventory(inventory);

searchItem(inventory, 'Sketchbook');
sortInventory(inventory);

console.log('\nSorted inventory:');
displayInventory(inventory);

getInventorySlice(inventory, 0, 2);

deleteItem(inventory, 0);

console.log('\nFinal inventory:');
displayInventory(inventory);
