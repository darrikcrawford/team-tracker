const { test } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('create Manager object', () => {
    const manager = new Manager('Darrik', 1,'darrik@email.com', 101);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String)); 
    expect(manager.officeNumber).toEqual(expect.any(Number)); 
});

test('get role of manager object', () => {
    const manager = new Manager('Darrik', 1,'darrik@email.com', 101);

    expect(manager.getRole()).toBe('Manager');
});

test('get manager office number', () => {
    const manager = new Manager('Darrik', 1,'darrik@email.com', 101);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString())); 
});