const index = require('./index');

test('Should generate a random int', () => {
    let randomInt = index.getRandomInt(10);
    expect(randomInt).toBeLessThanOrEqual(10);
    expect(randomInt).toBeGreaterThanOrEqual(0);
    randomInt = index.getRandomInt(1000);
    expect(randomInt).toBeLessThanOrEqual(1000);
    expect(randomInt).toBeGreaterThanOrEqual(0);
});

test('Should load a list', () => {
    let list = index.loadList('names.list');
    expect(list).not.toBeNull();
    list = index.loadList('invalidlist.list');
    expect(list).toBeNull();
});

test('Should check if a name is valid', () => {
    expect(index.isValidCandidateName('Invalid name')).toBeFalsy();
    expect(index.isValidCandidateName('Published name')).toBeFalsy();
    expect(index.isValidCandidateName('')).toBeFalsy();
    expect(index.isValidCandidateName('Valid application name')).toBeFalsy();
});


