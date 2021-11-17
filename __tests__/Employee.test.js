const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Darrik');

    expect(employee.name).toEqual(expect.any(String));
});