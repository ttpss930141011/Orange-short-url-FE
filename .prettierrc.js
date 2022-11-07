// @see: https://www.prettier.cn

module.exports = {
	// 超過最大值換行
	printWidth: 130,
	// 縮進字節數
	tabWidth: 2,
	// 使用製表符而不是空格縮進行
	useTabs: true,
	// 結尾不用分號(true有，false沒有)
	semi: true,
	// 使用單引號(true單雙引號，false雙引號)
	singleQuote: false,
	// 更改引用對象屬性的時間 可選值"<as-needed|consistent|preserve>"
	quoteProps: "as-needed",
	// 在對象，數組括號與文字之間加空格 "{ foo: bar }"
	bracketSpacing: true,
	// 多行時盡可能打印尾隨逗號。 （例如，單行數組永遠不會出現逗號結尾。） 可選值"<none|es5|all>"，默認none
	trailingComma: "none",
	// 在JSX中使用單引號而不是雙引號
	jsxSingleQuote: false,
	//  (x) => {} 箭頭函數參數只有一個時是否要有小括號。 avoid：省略括號 ,always：不省略括號
	arrowParens: "avoid",
	// 如果文件頂部已經有一個 doclock，這個選項將新建一行註釋，並打上@format標記。
	insertPragma: false,
	// 指定要使用的解析器，不需要寫文件開頭的 @prettier
	requirePragma: false,
	// 默認值。因為使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本樣式進行折行
	proseWrap: "preserve",
	// 在html中空格是否是敏感的 "css" - 遵守CSS顯示屬性的默認值， "strict" - 空格被認為是敏感的 ，"ignore" - 空格被認為是不敏感的
	htmlWhitespaceSensitivity: "css",
	// 換行符使用 lf 結尾是 可選值"<auto|lf|crlf|cr>"
	endOfLine: "auto",
	// 這兩個選項可用於格式化以給定字符偏移量（分別包括和不包括）開始和結束的代碼
	rangeStart: 0,
	rangeEnd: Infinity,
	// Vue文件腳本和样式標籤縮進
	vueIndentScriptAndStyle: false
};
