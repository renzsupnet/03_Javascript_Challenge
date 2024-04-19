// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  // Initial empty array where employee objects will be stored.
  const employees = [];

  // Initial repeat state that determines if the loop continues or not
  let repeat = true;

  // This loop allows the user to add employees as often as needed.
  while(repeat){

    //The prompts are initialized and checks whether there is an input if not then cancels the prompt when the cancel button is pressed.
    let firstNameInput = prompt("Enter first name");
    if(!firstNameInput){
      return;
    }
    let lastNameInput = prompt("Enter last name");
    if(!lastNameInput){
      return;
    }
    let salaryInput = prompt("Enter salary");
    if(!salaryInput){
      return;
    }
    // This creates the employee object.
    const employee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: salaryInput
    }

    //This pushes the employee object into the array.
    employees.push(employee);

    //This is the loop conditional input as to whether to add more employees or not.
    repeat = prompt("Add another Employee?\n[Y] Yes\n[N] No");
    if(!repeat){
      return;
    }
    // Input syntax checker to lessen user error.
    const acceptableInputs = ['Y', 'y', 'N', 'n'];
    if (!acceptableInputs.includes(repeat)){
      alert("Invalid Input please input Y/y for Yes and N/n for No.");
      repeat = prompt("Add another Employee?\n[Y] Yes\n[N] No");
    }

    // Stops the loop if the user inputs n or N.
    if (repeat === "N" || repeat === "n"){
      repeat = false;
    }
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    // The Number function converts the input from a string to a number.
    totalSalary+= Number(currentEmployee.salary);
  }

  // Average is calculated by dividing the total salary with the number of employees which is then logged into the console with 2 decimal points.
  let aveSalary = totalSalary/ employeesArray.length;
  console.log(`The average salary between our ${employeesArray.length} employee(s) is $${aveSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Math.random and Math.floor is used to randomly select an employee.
  let randEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randEmployee.firstName} ${randEmployee.lastName}, our random drawing winner!`); 
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
