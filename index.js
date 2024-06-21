function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use spread operator to create a new object with updated value
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the property directly (mutates the object)
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Use spread operator to create a new object without the key
    const { [key]: deletedKey, ...rest } = employee;
    return rest;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the property directly (mutates the object)
    delete employee[key];
    return employee;
  }
  
  // Example usage (assuming you have an employee object defined)
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'department', 'Engineering');
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'salary', 80000);
  const newEmployeeWithoutKey = deleteFromEmployeeByKey(employee, 'phone');
  destructivelyDeleteFromEmployeeByKey(employee, 'email'); // This mutates the original employee object
  