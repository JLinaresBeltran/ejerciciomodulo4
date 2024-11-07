const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Java'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Html' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Python' },
    { id: 4, name: 'Jhonathan Linares', age: 38, department: 'Desarrollo', salary: 500000, specialization: 'JavaScript' },
    { id: 5, name: 'Camilo Cardona', age: 25, department: 'Marketing', salary: 45000, specialization: 'C++' },
  ];

  const totalemployees = employees.map((employee, index)=> `<p>${employee.id}: ${employee.name}: ${employee.age}: ${employee.department} - $${employee.salary}</p>`).join('');
  

  function displayEmployees() {
    const totalemployees = employees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalemployees;
}


  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total de los salarios: $${totalSalaries}`);
  }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'No se ha encontrado ningun empleadocon este ID';
    }
}

function findSpecialization() {
    const javaEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
    const javaEmployeesDisplay = javaEmployees.map ((employee, index)=> `<p>${employee.id}: ${employee.name}: ${employee.department} - ${employee.specialization}`);
    document.getElementById('employeesDetails').innerHTML = javaEmployeesDisplay;
}