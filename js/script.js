// Setting up pre-conditions for accounts
let userOneAccountBalance = [["01/20/2020", "deposit", 200.00, "", 0.00, 200.00],
["01/21/2020", "", 0.00, "withdraw", 20.00, 180.00]];

let userTwoAccountBalance = [["08/20/2020", "deposit", 500.00, "", 0.00, 500.00],
["08/21/2020", "", 0.00, "withdraw", 200.00, 300.00]];


// User account names to display
let user1 = "John Doe";
let user2 = "Jane Doe";
let userSelection = sessionStorage.getItem("userChoice");
let tr;
let idNum;
let userArr = [];
let arr;
let size;
let updatedBalance;

// Set the select
let $ = (id) => {
    return window.document.getElementById(id);
}


// Run the program---
window.addEventListener('load', () => {
    console.log(userSelection)
    if (userSelection === "user1") {
        $('userName').innerHTML = "John Doe";
    } else {
        $('userName').innerHTML = "Jane Doe";
    }
getUserAccountInfo();

    createRows(arr);



});

// Creates programmtic approach to rows 
function createRows(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Create the row element
        let tr = document.createElement('tr');
        console.log("in create rows "+i)
        //set tr id with iterated number/use as a reference 
        tr.id = "row" + i;

        // Insert row in 'myTable' on document
        myTable.appendChild(tr);

        createTableData(tr.id, i, arr);

    }


}

// function createTableData(inventory, idNum) {
function createTableData(tr, idNum, arr) {

    // Setup Table Data
    let date = document.createElement('td');
    let deposit = document.createElement('td');
    let amount1 = document.createElement('td');
    let withdraw = document.createElement('td');
    let amount2 = document.createElement('td');
    let balance = document.createElement('td');

    // Get the specific table row
    tr = document.getElementById(tr);

    // Add the html from the inventory array

    date.innerHTML = arr[idNum][0];
    deposit.innerHTML = arr[idNum][1];
    amount1.innerHTML = arr[idNum][2].toFixed(2);
    withdraw.innerHTML = arr[idNum][3];
    amount2.innerHTML = arr[idNum][4].toFixed(2);
    balance.innerHTML = arr[idNum][5].toFixed(2);

    // Append the 'myTable'-->Row with populated TDs
    tr.appendChild(date);
    tr.appendChild(deposit);
    tr.appendChild(amount1);
    tr.appendChild(withdraw);
    tr.appendChild(amount2);
    tr.appendChild(balance);

}

// The date function
function getToday() {
    let d = new Date();
    let year = d.getFullYear();
    let day = d.getDay();
    let month = d.getMonth() + 1;
    let today = month + "/" + day + "/" + year;
    return today;
}

function getUserAccountInfo() {
    //Determine which user account and how big the array is
    if (userSelection === "user1") {
        arr = userOneAccountBalance;
        size = userOneAccountBalance.length;
    } else {
        arr = userTwoAccountBalance;
        size = userTwoAccountBalance.length;
    }

}

function calculateBalance(amount) {
    console.log("This is size "+size)
    console.log(arr)
    console.log("This is the arr "+ arr[size - 1])
    updatedBalance = arr[size -1][5] + amount;
    console.log("This is it " + updatedBalance.toFixed(2));
}

// Event listeners for the Manage account feature

$('userDeposit').addEventListener("click", function () {

    getUserAccountInfo();
    // Get the ammoun that the user inputed in the text box
    let depAmount = parseFloat($('amount').value);
    console.log(depAmount)
    calculateBalance(depAmount);


    userArr.push(getToday(), "Deposit", depAmount, "", "", updatedBalance)
    arr.push(userArr);
    

})

$('userWithdraw').addEventListener("click", function () {
    console.log("withdraw")
})

