# CV-JS

Краткий одностраничный CV/Portfolio проект на `Vite` (HTML/CSS/JS).

## Что внутри

- Sidebar с контактами и соцсетями
- Секции: Experience, Latest Projects, Education, Skills, Contact
- Адаптив под mobile / tablet / desktop
- Легкие анимации и интерактив (скролл, раскрытие Skills и т.д.)

## Установленные зависимости

### Dependencies

- `normalize.css` — базовый reset стилей
- `swiper` — библиотека слайдера (если используется в UI)
- `vite-plugin-full-reload` — принудительный reload при изменениях шаблонов/стилей

### Dev dependencies

- `vite` — dev server и сборка
- `vite-plugin-html-inject` — подгрузка HTML-частей
- `eslint`, `@eslint/js`, `eslint-config-prettier`, `globals` — линтинг
- `prettier` — форматирование

## Как запустить

> Рекомендуется Node.js `18+` (лучше `20+`).

1. Установить зависимости:

```bash
npm install
```

2. Запустить проект в dev-режиме:

```bash
npm run dev
```

3. Открыть локальный URL из терминала (обычно `http://localhost:5173`).

## Полезные команды

```bash
npm run build       # production build
npm run preview     # локальный preview собранной версии
npm run lint        # проверка ESLint
npm run format      # автоформатирование
npm run format:check
```

## Структура (кратко)

- `index.html` — входная страница
- `src/main.js` — общий вход JS
- `src/html/` — секции страницы
- `src/css/` — стили по секциям
- `src/js/` — интерактив и поведение UI
- `public/img/` — статические изображения

Если после запуска что-то не обновляется, перезапусти `npm run dev` и проверь, что зависимости установились без ошибок.
