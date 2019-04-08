const fs = require('fs');

module.exports = {
    getRandomInt: function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },

    loadList: function(file) {
        return fs.readFileSync(file, 'utf8').split('\n').filter(function (el) {
            return el != false;
        });
    },

    isValidCandidateName: function(name) {
        const blacklist = this.loadList('blacklist.list');
        const published = this.loadList('published.list');
        return (name !== undefined && blacklist.indexOf(name) === -1 && published.indexOf(name) === -1 && name.length > 0)
    },

    writeCandidateName: function(name) {
        let published = this.loadList('published.list');
        published.push(name);
        fs.writeFileSync('published.list', published.join('\n'));
    },

    getRandomCompositeName: function() {
        const adjectives = this.loadList('adjectives.list');
        const names = this.loadList('names.list');

        let candidate;
        while (!this.isValidCandidateName(candidate)) {
            candidate = adjectives[this.getRandomInt(adjectives.length)] + ' ' + names[this.getRandomInt(names.length)];
        }
        this.writeCandidateName(candidate);
        return candidate;
    },
};
