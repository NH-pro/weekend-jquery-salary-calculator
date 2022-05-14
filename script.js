$(document).ready(onReady);


let monthlyCost = 0;
// Var for total monthly costs.
// END global vars

function onReady() {
    console.log('jq is sourced');
    // TEST if Jquery is sourced.

    $('#submit_button').on('click', addEmployee);
    // When 'submit_button' is clicked, execute 'addEmployee' function.
}
// END 'onReady' function.


function addEmployee() {
    let firstName = $('#input_first_name').val();
    let lastName = $('#input_last_name').val();
    let idNumber = $('#input_id_number').val();
    let jobTitle = $('#input_job_title').val();
    let annualSalary = $('#input_annual_salary').val();
    // Create employee info vars and set their value = to their employee input field value.
    console.log(`Employee added! First:${firstName} Last:${lastName} ID:${idNumber} Title:${jobTitle} Annual Salary:${annualSalary}`);
    // Test to see if input fields are being selected correctly.

    $('#employee_table').append(`
        <tr>
           <td>${firstName}</td>
           <td>${lastName}</td>
           <td>${idNumber}</td>
           <td>${jobTitle}</td>
           <td>${annualSalary}</td>
           <td> <button id="delete_emp" >Delete</button> </td>
        `);
    // Select 'employee_table' and append employee info vars in a new <tr> tag.
    
    calculateMonthly();
    // Execute 'calculateMonthly' function.

    $('#input_first_name').val(null);
    $('#input_last_name').val(null);
    $('#input_id_number').val(null);
    $('#input_job_title').val(null);
    $('#input_annual_salary').val(null);
    // Set input field values to null.
}
// END 'addEmployee' function.


function calculateMonthly() {
    let empMonthly = Math.round($('#input_annual_salary').val() / 12);
    // Var to store the annual salary divided by 12.

    monthlyCost += empMonthly;
    // Sum of emp monthly cost and total monthly costs.

    $('#monthly_cost').empty();
    // Empty the value of 'monthly_cost'.

    $('#monthly_cost').append(`Total Monthly: ${monthlyCost}`);
    // Append 'monthly_cost' with new value of 'monthlyCost' var.
    



}