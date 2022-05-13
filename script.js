$(document).ready(onReady);

let monthlyCost = 0;

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
           <td> <button id="delete_emp" >Delete</button> </td>
        `);
    // Select 'employee_table' and append employee info vars in a new <tr> tag.
    
    $('#input_first_name').val(null);
    $('#input_last_name').val(null);
    $('#input_id_number').val(null);
    $('#input_job_title').val(null);
    $('#input_annual_salary').val(null);
    // Set input field values to null.

    calculateMonthly();
}
// END 'addEmployee' function.

function calculateMonthly() {

    let empMonthly = ($('#input_annual_salary').val()) / 12;

    monthlyCost += empMonthly;

    $('#monthly_cost').empty();
    $('#monthly_cost').append(`Total Monthly: ${monthlyCost}`);
    



}