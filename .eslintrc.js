module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/script-setup-uses-vars': 2,
        'vue/valid-template-root': 0,
        'vue/no-unused-vars': 0,
        'no-unused-vars': 0,
        'vue/require-default-prop': 0,
        'no-console': 0,
        'arrow-body-style': 0,
        'prefer-arrow-callback': 0,
        'import/no-unresolved': 0,
    },
}
