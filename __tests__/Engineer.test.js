const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Darrik', 1,'darrik@email.com', 'dcrawfordGitHub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String)); 
    expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer's github", () => {
    const engineer = new Engineer('Darrik', 1,'darrik@email.com', 'dcrawfordGitHub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github)); 
});

test("get engineer's role", () => {
    const engineer = new Engineer('Darrik', 1,'darrik@email.com', 'dcrawfordGitHub');

    expect(engineer.getRole()).toBe('Engineer'); 
});