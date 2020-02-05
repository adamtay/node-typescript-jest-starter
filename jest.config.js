module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testRegex: '(/src/.*\\.(test|spec))\\.(js|ts)$',
    testEnvironment: 'node'
};
