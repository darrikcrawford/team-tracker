const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Darrik',1,'darrik@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
});

test("gets employee's name", () => {
    const employee = new Employee('Darrik',1,'darrik@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name)); 
});

test("gets employee's id value", () => {
    const employee = new Employee('Darrik',1,'darrik@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email address", () => {
    const employee = new Employee('Darrik',1,'darrik@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email)); 
});

test("gets employee's role", () => {
    const employee = new Employee('Darrik',1,'darrik@email.com');

    expect(employee.getRole()).toEqual('Employee'); 
});