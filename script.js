$(document).ready(onReady);

function onReady() {
    console.log('jq is sourced');

    $('#submit_button').on('click', addEmployee);
}
// END 'onReady' function.

function addEmployee() {
    let firstName = $('#input_first_name').val();
    let lastName = $('#input_last_name').val();
    let idNumber = $('#input_id_number').val();
    let jobTitle = $('#input_job_title').val();
    let annualSalary = $('#input_annual_salary').val();
    // Create employee info vars and set their value = to their employee input field value.

    $('#employee_table').append(`
        <tr>
           <td>${firstName}</td>
           <td>${lastName}</td>
           <td>${idNumber}</td>
           <td>${jobTitle}</td>
           <td>${annualSalary}</td>
        `);
    // Select 'employee_table' and append employee info vars in a new <tr> tag.
    
    $('#input_first_name').val(null);
    $('#input_last_name').val(null);
    $('#input_id_number').val(null);
    $('#input_job_title').val(null);
    $('#input_annual_salary').val(null);
    // Set input field values to null.
}
// END 'addEmployee' function.