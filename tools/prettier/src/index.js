export const prettier = {
   // Основные настройки
   printWidth: 100, // Максимальная длина строки (по умолчанию: 80)
   tabWidth: 3, // Количество пробелов на уровень отступа (по умолчанию: 2)
   useTabs: false, // Использовать табы вместо пробелов (по умолчанию: false)
   semi: false, // Точка с запятой в конце выражений (по умолчанию: true)
   singleQuote: true, // Одинарные кавычки вместо двойных (по умолчанию: false)

   // Настройки кавычек
   quoteProps: 'as-needed', // Кавычки вокруг свойств объекта: "as-needed" | "consistent" | "preserve" (по умолчанию: "as-needed")
   jsxSingleQuote: true, // Одинарные кавычки в JSX (по умолчанию: false)

   // Запятые
   trailingComma: 'none', // Запятые в конце: "none" | "es5" | "all" (по умолчанию: "all")

   // Скобки и пробелы
   bracketSpacing: true, // Пробелы в объектных литералах: { foo: bar } (по умолчанию: true)
   bracketSameLine: false, // Закрывающая скобка JSX на той же строке (по умолчанию: false)
   arrowParens: 'always', // Скобки вокруг параметров стрелочных функций: "always" | "avoid" (по умолчанию: "always")

   // HTML/JSX
   htmlWhitespaceSensitivity: 'css', // Чувствительность к пробелам в HTML: "css" | "strict" | "ignore" (по умолчанию: "css")
   singleAttributePerLine: false, // Один атрибут HTML на строку (по умолчанию: false)

   // Vue
   vueIndentScriptAndStyle: false, // Отступы в <script> и <style> в Vue файлах (по умолчанию: false)

   // Markdown
   proseWrap: 'preserve', // Перенос прозы в markdown: "always" | "never" | "preserve" (по умолчанию: "preserve")

   // Конец строки
   endOfLine: 'lf', // Символ конца строки: "lf" | "crlf" | "cr" | "auto" (по умолчанию: "lf")

   // Встроенный код
   embeddedLanguageFormatting: 'auto' // Форматирование встроенного кода: "auto" | "off" (по умолчанию: "auto")

   // Расширенные настройки (обычно не нужны)
   // rangeStart: 0,           // Начало диапазона форматирования (по умолчанию: 0)
   // rangeEnd: Infinity,      // Конец диапазона форматирования (по умолчанию: Infinity)
   // requirePragma: false,    // Требовать /** @format */ комментарий (по умолчанию: false)
   // insertPragma: false,     // Вставлять /** @format */ комментарий (по умолчанию: false)
}
