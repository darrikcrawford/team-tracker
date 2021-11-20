const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Darrik', 1,'darrik@email.com', 'School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String)); 
    expect(intern.school).toEqual(expect.any(String)); 
});

test("gets intern's school", () => {
    const intern = new Intern('Darrik', 1,'darrik@email.com', 'School');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets intern's role", () => {
    const intern = new Intern('Darrik', 1,'darrik@email.com', 'School');

    expect(intern.getRole()).toBe('Intern'); 
});