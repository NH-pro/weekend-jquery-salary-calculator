$(document).ready(onReady);


let monthlyCost = 0;
// Var for total monthly costs.
// END global vars

function onReady() {
    console.log('jq is sourced');
    // TEST if Jquery is sourced.

    $('#submit_button').on('click', addEmployee);
    // When 'submit_button' is clicked, execute 'addEmployee' function.

    $(document).on('click', '#delete_button', deleteEmployee);

    //$('#delete_button').on('click', deleteEmployee);
    // When 'delete_button' is clicked, execute 'deleteEmployee function.

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
           <td> <button id="delete_button" >Delete</button> </td>
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

    if (monthlyCost > 20000) {
        $('#monthly_cost').css('background-color', 'red');
        // If 'monthlyCost' is greater than 20k, back
    }
    else {
        $('#monthly_cost').css('background-color', 'white');
    }

    $('#monthly_cost').empty();
    // Empty the value of 'monthly_cost'.

    $('#monthly_cost').append(`Total Monthly: ${monthlyCost}`);
    // Append 'monthly_cost' with new value of 'monthlyCost' var.   
}
// END 'calculateMonthly' function.


function deleteEmployee() {
    console.log($(this));
    // TEST to see what on earth I'm selecting.

    $(this).parentsUntil('table').remove();
    // Selecting the delete button that was clicked and removing everything up till the parent 'table'.


}