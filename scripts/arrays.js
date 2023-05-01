employees = ["Ahmed Hamidi", "Jawad Safi", "Ent Mohammed", "Steve Jobless", "Neil Armstrong", "Nabeel Khan", "John Walker"];
salary = [10000, 12000, 5000, 3000, 7000, 12000, 3000];

function addSalary() {""
    let input_name = document.getElementById("input_name").value;
    let input_salary = document.getElementById("input_salary").value;

    if (input_name == "") {
        alert("Invalid Name! Please enter a name");

    }
    else if (input_salary == "" || input_salary < 0) {
        alert("Invalid Salary! Please enter a valid number > 0");

    }
    else {
        employees.push(input_name);
        salary.push(input_salary);
        alert("The Information has been added successfully!");

    }
}

function displayResults() {
    var salary_total = 0;
    for (var i = 0; i < salary.length; i++)
    {
        salary_total += salary[i];
    }

    var salary_average = salary_total / salary.length;

    var salary_highest = 0;
    salary.forEach((element) => 
    {
        if (salary_highest < element) 
        {
            salary_highest = element;
        }
    });

    document.getElementById("results_text").innerHTML = "<h2>Average Salary: </h2>" + salary_average + "<h2>Highest Salary: </h2>" + salary_highest;

}

function displaySalary()
{
    var sal_results = "<tr><td colspan='2'></td></tr><tr><td><b>Employee</b></td><td><b>Salary</b></td></tr>";

    for (var i = 0; i < employees.length; i++)
    {
    sal_results = sal_results + "<tr><td>" + employees[i] + "</td><td>" + salary[i] + "</td></tr>"
    }
    document.getElementById("results_table").innerHTML = sal_results;
}
    
function employeeName() 
{
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
}