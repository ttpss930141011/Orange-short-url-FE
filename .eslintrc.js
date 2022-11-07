// @see: http://eslint.cn

module.exports = {
	settings: {
		react: {
			version: "detect"
		}
	},
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	/* 指定如何解析語法 */
	parser: "@typescript-eslint/parser",
	/* 優先級低於 parse 的語法解析配置 */
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
	/* 繼承某些已有的規則 */
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:prettier/recommended"
	],
	/*
	 * "off" 或 0    ==>  關閉規則
	 * "warn" 或 1   ==>  打開的規則作為警告（不影響代碼執行）
	 * "error" 或 2  ==>  規則作為一個錯誤（代碼不能執行，界面報錯）
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允許多個空行
		"no-use-before-define": "off", // 禁止在 函數/類/變量 定義之前使用它們
		"prefer-const": "off", // 此規則旨在標記使用 let 關鍵字聲明但在初始分配後從未重新分配的變量，要求使用 const
		"no-irregular-whitespace": "off", // 禁止不規則的空白

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": "error", // 禁止定義未使用的變量
		"@typescript-eslint/no-inferrable-types": "off", // 可以輕鬆推斷的顯式類型可能會增加不必要的冗長
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定義 TypeScript 模塊和命名空間。
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 類型
		"@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", // 禁止使用特定類型
		"@typescript-eslint/explicit-function-return-type": "off", // 不允許對初始化為數字、字符串或布爾值的變量或參數進行顯式類型聲明
		"@typescript-eslint/no-var-requires": "off", // 不允許在 import 語句中使用 require 語句
		"@typescript-eslint/no-empty-function": "off", // 禁止空函數
		"@typescript-eslint/no-use-before-define": "off", // 禁止在變量定義之前使用它們
		"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用註釋或要求在指令後進行描述
		"@typescript-eslint/no-non-null-assertion": "off", // 不允許使用後綴運算符的非空斷言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求導出函數和類的公共類方法的顯式返回和參數類型

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		"react-hooks/rules-of-hooks": "off",
		"react-hooks/exhaustive-deps": "off"
	}
};
