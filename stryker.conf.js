module.exports = function (config) {
  config.set({
    mutate: [
      'application/**/*.js',
      '!application/**/*.test.js',
    ],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    jest: {
      // eslint-disable-next-line global-require
      enableFindRelatedTests: true,
    },
    // transpilers: ['babel', 'webpack'],
    transpilers: [],
  });
};
