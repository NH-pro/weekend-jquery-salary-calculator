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
    // When 'delete_button' is clicked, execute 'deleteEmployee function.
    // ---> This also keeps track of the element that started the event? <---
}
// END 'onReady' function.


function addEmployee() {
    console.log('In addEmployee funciton');
    // TEST if button is connected

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
           <td class="salary">${annualSalary}</td>
           <td> <button id="delete_button" >Delete</button> </td>
        </tr>
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
    console.log('In calculateMonthly function');
    // TEST if function is connected

    let empMonthly = Math.round($('#input_annual_salary').val() / 12);
    // Var to store the annual salary divided by 12.

    monthlyCost += empMonthly;
    // Sum of emp monthly cost and total monthly costs.

    if (monthlyCost > 20000) {
        $('#monthly_cost').css('background-color', 'red');
        // If 'monthlyCost' is greater than 20k, back
    }

    $('#monthly_cost').empty();
    // Empty the value of 'monthly_cost'.

    $('#monthly_cost').append(`Total Monthly Cost: $${monthlyCost}`);
    // Append 'monthly_cost' with new value of 'monthlyCost' var.   
}
// END 'calculateMonthly' function.


function deleteEmployee() {
    console.log('In deleteEmployee function');
    // TEST if function is connected

    console.log($(this).parent().siblings('.salary').text());
    // TEST to see what on earth I'm selecting.

    let negMonthly = $(this).parent().siblings('.salary').text() / 12;
    // This traversing is getting wild.
    // Var = to the delete button's parent ---> the <td> tag's sibling class ---> 'salary' class <td> tag.
    // Here we select the salary by using .text(), divide it by 12, and assign it to the var.

    console.log(Math.round(negMonthly));
    // TEST to see if the 'negMonthly' var works.

    monthlyCost -= Math.round(negMonthly);
    // Subract the removed emp monthly salary from the global monthly cost var.

    $('#monthly_cost').empty();
    // Empty the value of 'monthly_cost'.

    $('#monthly_cost').append(`Total Monthly Cost: ${monthlyCost}`);
    // Append 'monthly_cost' with new the new value of 'monthlyCost'.

    $(this).parentsUntil('table').remove();
    // Selecting the delete button that was clicked and removing everything up till the parent 'table'.

    if (monthlyCost < 20000) {
        $('#monthly_cost').css('background-color', 'khaki');
        // If monthlyCost is less than 20k, change background-color to white.
    }
}
// END 'deleteEmployee' function.