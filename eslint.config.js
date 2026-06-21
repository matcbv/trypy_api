import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

// Utilizando flat config (Forma mais moderna de trabalhar com Eslint):
export default defineConfig([
	pluginJs.configs.recommended,
	{
		// Arquivos onde o Eslint deve ser aplicado
		files: ['src/**/*.js'],
		// Propriedade da linguagem sendo utilizada
		languageOptions: {
			// Define o tipo de variáveis globais que estarão disponíveis no ambiente de programação
			globals: globals.node,
			sourceType: 'module',
			ecmaVersion: 2022,
		},
	},
	{
		rules: {
			// Garante que sejam usadas apenas operadores de comparação estrita.
			eqeqeq: ['error'],
			// Define o número máximo de linhas vazias entre códigos.
			'no-multiple-empty-lines': ['error', { max: 2 }],
			// Garante o uso de Camel Case em nosso código.
			camelcase: ['error'],
			// Regra para não uso de mensagem de alerta em geral.
			'no-alert': ['warn'],
			// Regra para alertar sobre o não uso de alguma variável.
			'no-unused-vars': ['error'],
		},
	},
	{
		// Arquivos a serem ignorados (node_modules é ignorado por padrão):
		ignores: [],
	},
	eslintConfigPrettier,
	{
		// Garante o uso de chaves em estruturas condicionais e de controle de fluxo. Com multi-line, garantimos que a regra seja aplicada a casos onde a estrutura condicional ocupe mais de uma linha.
		curly: ['error', 'multi-line'],
	},
]);
