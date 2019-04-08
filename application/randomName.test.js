const fs = jest.mock('fs');
const app = require('./randomName');

describe('application', () => {
    fs.readFileSync.mockReturnValue('123456\n123456');
    it('Should load a list', () => {
        app.loadList('test.list');
        expect(fs.readFileSync).toHaveBeenCalledWith('test.list', 'utf8');
    });

    it('Should check if a name is valid', () => {
        expect(app.isValidCandidateName('Invalid name')).toBeFalsy();
        expect(app.isValidCandidateName('Published name')).toBeFalsy();
        expect(app.isValidCandidateName('')).toBeFalsy();
        expect(app.isValidCandidateName(undefined)).toBeFalsy();
        expect(app.isValidCandidateName('Valid application name')).toBeTruthy();
    });
});
