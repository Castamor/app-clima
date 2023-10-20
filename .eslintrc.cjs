const RULES = {
    OFF: 'off',
    WARN: 'warn',
    ERROR: 'error'
}

module.exports = {
    env: {
        browser: true,
        es2021: true
    },

    extends: [
        'standard',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/prop-types': RULES.OFF,
        'react/react-in-jsx-scope': RULES.OFF,
        'no-unused-vars': RULES.WARN,
        camelcase: RULES.OFF,
        indent: ['error', 4]
    }
}
