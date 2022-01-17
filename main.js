

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

// calculation and display of the budget, the expenses and the balance
//when the user click on the button "calculate"

function display(budget,Expenses){ // we will use this function to change the budget, the total expenses and the balance
    
    actualBudget = budget + " $";

    balance = actualBudgetValue - Expenses; // calculate tha balance
    
    actualBalance = balance.toString() + " $";
    actualExpense = totalExpense.toString() + " $";

    //change the values of the inner paragraphs

    budgetValueP.innerText = actualBudget;
    balanceValueP.innerText = actualBalance;
    expenseValueP.innerText = actualExpense;
}

calculateButton.addEventListener("click", function(){

    if (budget.value != ""){ // We verify that the input is not empty
        actualBudgetValue = budget.value;

        display(actualBudgetValue,totalExpense);
    }
})

var totalExpense = 0; // initialise the total expense

addExpenseButton.addEventListener("click", function(){
    
    if (expenseAmount.value != ""  &&  expenseTitle.value != "" ){ // verify that no input is blank

        // Add the new expense value to the total

        totalExpense += parseFloat(expenseAmount.value); 

        display(actualBudgetValue,totalExpense);

    
        //create new paragraph to display the expense title and cost + a button to delete it
        
        var expenseTitleParagraph = document.createElement("p");
        var expenseAmountParagraph = document.createElement("p");
        var deleteButton = document.createElement("button");

        // Add the styling to the paragraph and the delete button
        
        expenseTitleParagraph.classList.add("paragraph-styling");
        expenseAmountParagraph.classList.add("paragraph-styling");
        deleteButton.classList.add("button-styling");
        
        //Add the paragraphs and button to the correct html sections

        expenseTitleSection.appendChild(expenseTitleParagraph);
        expenseValueSection.appendChild(expenseAmountParagraph);
        deleteButtonSection.appendChild(deleteButton);

        //indicate the innerText of each paragraph and button

        expenseTitleParagraph.innerText = expenseTitle.value ;
        expenseAmountParagraph.innerText = expenseAmount.value + " $";
        deleteButton.innerText = "delete";

        //clear the two intput bars
        
        expenseTitle.value = "";
        expenseAmount.value = "";

        //deleting the explenses :
        
        deleteButton.addEventListener("click",function(){

            // use removeChild to remove the paragraphs and buttons of the html section

            expenseTitleSection.removeChild(expenseTitleParagraph);
            expenseValueSection.removeChild(expenseAmountParagraph);
            deleteButtonSection.removeChild(deleteButton);

            //calculation of the new total expense :

            let valueToDeduct = expenseAmountParagraph.innerText; // collecting the cost of the deleted expense

            totalExpense -= valueToDeduct.slice(0,-1); // deleting the "$" att the end of the cost and substracting it from the previous total expense
           
            display(actualBudgetValue,totalExpense);


        })
       
    }
    
    
   
})

deleteAllButton.addEventListener("click", function(){ // if the user want to delete all the expenses

    // the sections will only contain their titles :

    expenseTitleSection.innerHTML = "<h1>Expense title</h1>";
    expenseValueSection.innerHTML = "<h1>Expense value</h1>";
    deleteButtonSection.innerHTML = "";

    // Display of the new expenses and balance :
    totalExpense = 0 ;

    display(actualBudgetValue,totalExpense);

})