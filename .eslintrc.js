export default {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Para suporte ao React
        },
    },
    settings: {
        react: {
            version: 'detect', // Detecta automaticamente a versão do React
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Para TypeScript
        'plugin:react/recommended', // Para React
        'plugin:prettier/recommended', // Integração com Prettier
        'plugin:react/jsx-runtime', // Adicione esta linha para reconhecer o novo transformador JSX
    ],
    plugins: ['prettier', 'react'],
    rules: {
        'prettier/prettier': ['error'],
        'react/react-in-jsx-scope': 'off', // Caso use React 17+
        '@typescript-eslint/explicit-function-return-type': 'off', // Opcional
        'react/jsx-no-target-blank': ['error', { allowReferrer: true }], // Evita alertas para links externos
    },
};