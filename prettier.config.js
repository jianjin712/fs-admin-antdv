module.exports = {
  embeddedLanguageFormatting: "auto",
  // vue 编码风格, 靠边会缩进两个空格
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: "lf",
  // 每个缩进级别的空格数
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 单行输出（不折行）的（最大）长度
  printWidth: 100,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 去除对象最末尾元素跟随的逗号
  trailingComma: "es5",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  /* jsx 标签的反尖括号需要换行, 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）
      ,默认false,这里选择>不另起一行 */
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准 never | preserve
  proseWrap: "preserve",
  //proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  //htmlWhitespaceSensitivity: 'css',
  htmlWhitespaceSensitivity: "strict"
};
