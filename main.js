

//recovering all the input from the html code

let budget = document.getElementById("budgetInput");
let calculateButton = document.getElementById("calculate");
let expenseTitle = document.getElementById("expenseTitleInput");
let expenseAmount = document.getElementById("expenseAmountInput");
let addExpenseButton = document.getElementById("addExpense");
let balance = document.getElementById("balanceValue");
let deleteAllButton = document.getElementById("deleteAll");


//These are the <p></p> in which we are going to display the budget, the total expenses
// and the balance

var budgetValueP = document.getElementById("budgetValue");
var expenseValueP = document.getElementById("expenseValue");
var balanceValueP = document.getElementById("balanceValue")

// I initialise them at 0$. 

var actualExpenseValue = 0;
var actualBudgetValue = 0;
var actualBalanceValue = 0;


budgetValueP.innerText = "0 $";
expenseValueP.innerText = "0 $";
balanceValueP.innerText = "0 $";


calculateButton.addEventListener("click", function(){

    if (budget.value != ""){
        actualBudgetValue = budget.value;
        actualBudget = actualBudgetValue + " $";
        budgetValueP.innerText = actualBudget;

        balance = actualBudgetValue - totalExpense;
        actualBalance = balance.toString() + " $";
        balanceValueP.innerText = actualBalance;
    }
})

var totalExpense = 0;

addExpenseButton.addEventListener("click", function(){
    
    if (expenseAmount.value != ""  &&  expenseTitle.value != "" ){

        totalExpense += parseFloat(expenseAmount.value);

        balance = actualBudgetValue - totalExpense;

        actualExpense = totalExpense.toString() + " $";
        actualBalance = balance.toString() + " $";

        expenseValueP.innerText = actualExpense;
        balanceValueP.innerText = actualBalance;
        
        var expenseTitleParagraph = document.createElement("p");
        var expenseAmountParagraph = document.createElement("p");
        var deleteButton = document.createElement("button");

        

        expenseTitleParagraph.classList.add("paragraph-styling");
        expenseAmountParagraph.classList.add("paragraph-styling");
        deleteButton.classList.add("button-styling");

        expenseTitleSection.appendChild(expenseTitleParagraph);
        expenseValueSection.appendChild(expenseAmountParagraph);
        deleteButtonSection.appendChild(deleteButton);

        expenseTitleParagraph.innerText = expenseTitle.value ;
        expenseAmountParagraph.innerText = expenseAmount.value + " $";
        deleteButton.innerText = "delete";

        expenseTitle.value = "";
        expenseAmount.value = "";
        
        deleteButton.addEventListener("click",function(){
            expenseTitleSection.removeChild(expenseTitleParagraph);
            expenseValueSection.removeChild(expenseAmountParagraph);
            deleteButtonSection.removeChild(deleteButton);

            let valueToDeduct = expenseAmountParagraph.innerText;

            totalExpense -= valueToDeduct.slice(0,-1);
            actualExpense = totalExpense.toString() + " $"; 
            expenseValueP.innerText = actualExpense;

            balance =actualBudgetValue - totalExpense
            actualBalance = balance.toString() + " $";
            balanceValueP.innerText = actualBalance;

        })
       
    }
    
    
   
})

deleteAllButton.addEventListener("click", function(){

    expenseTitleSection.innerHTML = "<h1>Expense title</h1>";

    expenseValueSection.innerHTML = "<h1>Expense value</h1>";
    deleteButtonSection.innerHTML = "";

    totalExpense =0 ;
    actualExpense = totalExpense.toString() + " $"; 
    expenseValueP.innerText = actualExpense;

    balance = actualBudgetValue;
    actualBalance = balance.toString() + " $";
    balanceValueP.innerText = actualBalance;
})