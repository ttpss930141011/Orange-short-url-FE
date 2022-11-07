// @see: https://stylelint.io

module.exports = {
	extends: [
		"stylelint-config-standard", // 配置stylelint拓展插件
		"stylelint-config-prettier", // 配置stylelint和prettier兼容
		"stylelint-config-recess-order" // 配置stylelint css屬性書寫順序插件,
	],
	plugins: ["stylelint-less"], // 配置stylelint less拓展插件
	rules: {
		indentation: null, // 指定縮進空格
		"no-descending-specificity": null, // 禁止在具有較高優先級的選擇器後出現被其覆蓋的較低優先級的選擇器
		"function-url-quotes": "always", // 要求或禁止 URL 的引號 "always(必須加上引號)"|"never(沒有引號)"
		"string-quotes": "double", // 指定字符串使用單引號或雙引號
		"unit-case": null, // 指定單位的大小寫 "lower(全小寫)"|"upper(全大寫)"
		"color-hex-case": "lower", // 指定 16 進制顏色的大小寫 "lower(全小寫)"|"upper(全大寫)"
		"color-hex-length": "long", // 指定 16 進制顏色的簡寫或擴寫 "short(16進制簡寫)"|"long(16進制擴寫)"
		"rule-empty-line-before": "never", // 要求或禁止在規則之前的空行 "always(規則之前必須始終有一個空行)"|"never(規則前絕不能有空行)"|"always-multi-line(多行規則之前必須始終有一個空行)"|"never-multi-line(多行規則之前絕不能有空行。)"
		"font-family-no-missing-generic-family-keyword": null, // 禁止在字體族名稱列表中缺少通用字體族關鍵字
		"block-opening-brace-space-before": "always", // 要求在塊的開大括號之前必須有一個空格或不能有空白符 "always(大括號前必須始終有一個空格)"|"never(左大括號之前絕不能有空格)"|"always-single-line(在單行塊中的左大括號之前必須始終有一個空格)"|"never-single-line(在單行塊中的左大括號之前絕不能有空格)"|"always-multi-line(在多行塊中，左大括號之前必須始終有一個空格)"|"never-multi-line(多行塊中的左大括號之前絕不能有空格)"
		"property-no-unknown": null, // 禁止未知的屬性(true 為不允許)
		"no-empty-source": null, // 禁止空源碼
		"declaration-block-trailing-semicolon": null, // 要求或不允許在聲明塊中使用尾隨分號 string："always(必須始終有一個尾隨分號)"|"never(不得有尾隨分號)"
		"selector-class-pattern": null, // 強制選擇器類名的格式
		"value-no-vendor-prefix": null, // 關閉 vendor-prefix(為了解決多行省略 -webkit-box)
		"at-rule-no-unknown": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global", "v-deep", "deep"]
			}
		]
	}
};
