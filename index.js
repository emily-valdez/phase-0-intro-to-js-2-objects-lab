// To start, assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like. Use literal syntax to create your Object. 

const employee = {name: "Sam", streetAddress: "Swamp Avenue"}

//updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};
  newEmployee.name = 'Sam';
  newEmployee.streetAddress = '11 Broadway'
  return newEmployee;
  }
updateEmployeeWithKeyAndValue();

//destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = '12 Broadway'
  return employee
}
destructivelyUpdateEmployeeWithKeyAndValue();

// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!

function deleteFromEmployeeByKey(employee, name) {
  const clone = {...employee};
  delete clone.name;
  return clone
}
deleteFromEmployeeByKey();

//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

function destructivelyDeleteFromEmployeeByKey() {
delete employee.name
return employee
}
destructivelyDeleteFromEmployeeByKey();