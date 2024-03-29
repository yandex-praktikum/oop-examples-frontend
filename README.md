# Примеры кода для курса "ООП и TS"

Проект собран как библиотека и может быть использован в других проектах.

Стек и тулсет: TypeScript, SCSS, Webpack, ESLint, Prettier, Husky

## Структура проекта
src/lib - исходники библиотеки
src/examples - примеры кода
src/index.ts - точка входа для сборки примеров
src/lib/index.ts - точка входа для сборки библиотеки
src/scss - стили для библиотеки и примеров
src/vendor - сторонние библиотеки

## Использование в других проектах
1. Установить через npm или по ссылке на репозиторий
2. Импортировать в свой проект требуемые js компоненты
3. Импортировать в свой проект стили из dist/style.css

## Установка зависимостей
```
npm install
```

Или

```
yarn
```

## Сборка примеров в dist-examples
```
npm run build
```

Или

```
yarn build
```

## Сборка библиотеки в dist
```
npm run compile
```

Или

```
yarn compile
```

## Запуск примеров

```
npm run start
```

Или

```
yarn start
```
