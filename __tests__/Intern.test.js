const { test } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('create intern object', () => {
    const intern = new Intern('Darrik', 1,'darrik@email.com', 'School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String)); 
    expect(intern.school).toEqual(expect.any(String)); 
});

test("get intern's school", () => {
    const intern = new Intern('Darrik', 1,'darrik@email.com', 'School');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get intern's role", () => {
    const intern = new Intern('Darrik', 1,'darrik@email.com', 'School');

    expect(intern.getRole()).toBe('Intern'); 
});