module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
        // This should be the last configuration in the extends array.
        'plugin:prettier/recommended'
    ],
    rules: {},
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true
    }
};
