const fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function loadList(file) {
    return fs.readFileSync(file, 'utf8').split('\n').filter(function (el) {
        return el != null;
    });
}

function isValidCandidateName(name) {
    const blacklist = loadList('blacklist.list');
    const published = loadList('published.list');
    return (name !== undefined && blacklist.indexOf(name) === -1 && published.indexOf(name) === -1)
}

function writeCandidateName(name) {
    let published = loadList('published.list');
    published.push(name);
    fs.writeFileSync('published.list', published.join('\n'));
}

function getRandomCompositeName() {
    const adjectives = loadList('adjectives.list');
    const names = loadList('names.list');

    let candidate;
    while (!isValidCandidateName(candidate)) {
        candidate = adjectives[getRandomInt(adjectives.length)] + ' ' + names[getRandomInt(names.length)];
    }
    writeCandidateName(candidate);
    return candidate;
}

console.log(getRandomCompositeName());
