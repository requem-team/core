# @requem-team/prettier

Общая конфигурация [Prettier](https://prettier.io/) для проектов Requem Team.

## Установка

Требуется Prettier 3.x. Установите конфигурацию и Prettier как зависимости для разработки:

```sh
npm install --save-dev @requem-team/prettier prettier@3
```

Или через Yarn:

```sh
yarn add --dev @requem-team/prettier prettier@3
```

## Подключение

Добавьте поле в `package.json` вашего проекта:

```json
{
   "prettier": "@requem-team/prettier"
}
```

Используйте один способ подключения: если конфигурация уже задана в `.prettierrc` или `prettier.config.*`, обновите существующий файл или удалите его перед подключением через `package.json`.

## Переопределение настроек

Чтобы изменить отдельные параметры, создайте `prettier.config.mjs` вместо поля `prettier` в `package.json`:

```js
import config from '@requem-team/prettier'

/** @type {import('prettier').Config} */
export default {
   ...config,
   tabWidth: 2,
   printWidth: 120
}
```

Расширение `.mjs` позволяет использовать этот пример независимо от поля `type` вашего проекта.

## Настройки

| Параметр                     | Значение      |
| ---------------------------- | ------------- |
| `printWidth`                 | `100`         |
| `tabWidth`                   | `3`           |
| `useTabs`                    | `false`       |
| `semi`                       | `false`       |
| `singleQuote`                | `true`        |
| `quoteProps`                 | `'as-needed'` |
| `jsxSingleQuote`             | `true`        |
| `trailingComma`              | `'none'`      |
| `bracketSpacing`             | `true`        |
| `bracketSameLine`            | `false`       |
| `arrowParens`                | `'always'`    |
| `htmlWhitespaceSensitivity`  | `'css'`       |
| `singleAttributePerLine`     | `false`       |
| `vueIndentScriptAndStyle`    | `false`       |
| `proseWrap`                  | `'preserve'`  |
| `endOfLine`                  | `'lf'`        |
| `embeddedLanguageFormatting` | `'auto'`      |

## Запуск

Добавьте команды в `scripts` вашего `package.json`:

```json
{
   "scripts": {
      "format": "prettier . --write",
      "format:check": "prettier . --check"
   }
}
```

Отформатировать файлы:

```sh
npm run format
```

Проверить форматирование без изменения файлов, например в CI:

```sh
npm run format:check
```

Чтобы исключить файлы и папки из форматирования, добавьте `.prettierignore` в свой проект:

```gitignore
dist/
coverage/
```

## Лицензия

ISC.
