const incomeValueField = getValue('income-money');
const foodValueField = getValue('food-money');
const rentValueField = getValue('rent-money');
const clothesValueField = getValue('clothes-money');
const saveMoneyValueField = getValue('save-money');

const balanceValueField = document.getElementById('balance');
const totalExpensesValueField = document.getElementById('total-expenses');

const savingAmountValueField = document.getElementById('saving-value');
const remainingBalanceValueField = document.getElementById('remaing-value');
const savingValue = document.getElementById('saving-amount');
const remainingValue = document.getElementById('remaining-balance');

const expenseMessageField = document.getElementById('expense-message');
const balanceMessageField = document.getElementById('balance-message');
const message = document.getElementById('expense-New-message');
const savemMessage = document.getElementById('save-New-message');


//input value from input box
function getValue(input) {
    const inputField = document.getElementById(input);
    return inputField;

}

function check(input) {
    const checkField = input.value;
    if (checkField.length == 0) {
        return 1;
    }

}
//calculate Button 
function calculate() {
    if (check(foodValueField) == 1 || check(rentValueField) == 1 || check(incomeValueField) == 1 || check(clothesValueField) == 1) {

        message.innerText = '*** Provide Input in all Field';
        balanceMessageField.style.display = 'none';
        expenseMessageField.style.display = 'none';
    }
    else if (isNaN(incomeValueField.value) == true || isNaN(foodValueField.value) == true || isNaN(rentValueField.value) == true || isNaN(clothesValueField.value) == true) {
        message.innerText = '*** Provide Number Type Input';
        balanceMessageField.style.display = 'none';
        expenseMessageField.style.display = 'none';

    }

    else if (foodValueField.value < 0 || rentValueField.value < 0 || clothesValueField.value < 0 || incomeValueField.value < 0) {
        message.innerText = '*** Provide Positive Number';
        balanceMessageField.style.display = 'none';
        expenseMessageField.style.display = 'none';
    }
    else {
        const totalExpense = parseFloat(foodValueField.value) + parseFloat(rentValueField.value) + parseFloat(clothesValueField.value);
        const balance = parseFloat(incomeValueField.value) - totalExpense;
        if (balance >= 0) {
            totalExpensesValueField.innerText = totalExpense;
            balanceValueField.innerText = balance;
            balanceMessageField.style.display = 'block';
            expenseMessageField.style.display = 'block';
            message.innerText = '';
        }
        else {
            message.innerText = '*** Expense Cant be more than Income';
            balanceMessageField.style.display = 'none';
            expenseMessageField.style.display = 'none';
        }
    }
}
//save Button Calculate
function saveButtonCalculate() {

    if (check(saveMoneyValueField) == 1) {

        savemMessage.innerText = '*** Provide Input Save Field';
        savingAmountValueField.style.display = 'none';
        remainingBalanceValueField.style.display = 'none';
    }
    else if (isNaN(saveMoneyValueField.value) == true)  {
        savemMessage.innerText = '*** Provide Number Type Input';
        savingAmountValueField.style.display = 'none';
        remainingBalanceValueField.style.display = 'none';

    }

    else if (saveMoneyValueField.value < 0 ) {
        savemMessage.innerText = '*** Provide Positive Number';
        savingAmountValueField.style.display = 'none';
        remainingBalanceValueField.style.display = 'none';
    }
    else {
        const savePercentage = saveMoneyValueField.value;
        const savingBalance = parseFloat(incomeValueField.value) * parseFloat(savePercentage) / 100;

        console.log(savingBalance);
        console.log(balance);

        if (savingBalance <= parseFloat(balanceValueField.innerText)) {
            savingValue.innerText = savingBalance;
            remainingValue.innerText = parseFloat(balanceValueField.innerText) - savingBalance;
            savingAmountValueField.style.display = 'block';
            remainingBalanceValueField.style.display = 'block';
            savemMessage.innerText = '';
        }
        else {
            savemMessage.innerText = '*** Saving Cant be more than Balance';
            savingAmountValueField.style.display = 'none';
            remainingBalanceValueField.style.display = 'none';
        }
    }
}

//event calculation button
document.getElementById('calculate-btn').addEventListener('click', function () {
    
    calculate(); 
})

// event on save button
document.getElementById('save-button').addEventListener('click', function () {

    saveButtonCalculate();

})