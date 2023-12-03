// Mock user authentication status
let isAuthenticated = false;

function loginWithGoogle() {
    // Implement Google login functionality
    isAuthenticated = true;
    showApp();
}

function loginWithApple() {
    // Implement Apple login functionality
    isAuthenticated = true;
    showApp();
}

function showApp() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    // Fetch and display inventory items
    fetchInventory();
}

function fetchInventory() {
    // Mock data for demonstration purposes
    // const inventoryData = [
    //     { name: 'Item 1', installmentDate: '2023-01-01', maintenanceDate: '2023-02-01', photo: './images/item1.jpg' },
    //     { name: 'Item 2', installmentDate: '2023-02-01', maintenanceDate: '2023-03-01', photo: 'item2.jpg' },
    // ];

    const inventoryList = document.getElementById('inventory-list');

    inventoryData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${item.name}</strong> - Installment Date: ${item.installmentDate}, Maintenance Date: ${item.maintenanceDate}`;
        inventoryList.appendChild(listItem);
    });
}

function addItem() {
    if (!isAuthenticated) {
        alert('Please log in first.');
        return;
    }

    const itemName = document.getElementById('itemName').value;
    const installmentDate = document.getElementById('installmentDate').value;
    const maintenanceDate = document.getElementById('maintenanceDate').value;

    // Upload photo logic here (you can use FormData for handling file uploads)

    // Mock success message
    alert(`Item "${itemName}" added to the inventory.`);
}
