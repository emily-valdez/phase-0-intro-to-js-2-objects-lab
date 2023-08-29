const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  function updateEmployeeWithKeyAndValue(obj, key, value) {
        const newEmployee = { ...employee };
        newEmployee[key] = value;
        return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee.streetAddress = "12 Broadway";
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee };
    delete newEmployee.name;
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
  }