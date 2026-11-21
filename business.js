export const business = {
  "name": "Флаер-онлайн",
  "slug": "flyer-online",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Визитки",
      "detail": "Калькулятор для тиражей от 100 до 5 000 экземпляров. Варианты исполнения зависят от размеров, цветности и дополнительной отделки.",
      "group": "Листовая полиграфия",
      "photo": "assets/cacb568e578efdc9737c5a02.webp",
      "url": "https://flyer-online.ru/visitki/vizitka",
      "imageAlt": "Визитки"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Листовки и буклеты",
      "detail": "Рекламная полиграфия для рассылок и акций",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Листовки и буклеты"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Наклейки",
      "detail": "Круглые и прямоугольные форматы",
      "group": "Наклейки и плёнки",
      "photo": "",
      "url": "",
      "imageAlt": "Наклейки"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Брошюры и каталоги",
      "detail": "Многостраничная рекламная продукция",
      "group": "Книги и брошюры",
      "photo": "",
      "url": "",
      "imageAlt": "Брошюры и каталоги"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Приглашения",
      "detail": "Полиграфия для свадеб и мероприятий",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Приглашения"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Ролл-апы",
      "detail": "Мобильные выставочные стенды",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Ролл-апы"
    }
  ],
  "tariffs": [],
  "fields": [
    {
      "key": "format",
      "label": "Формат и размер",
      "type": "text",
      "applies": null
    },
    {
      "key": "quantity",
      "label": "Тираж, шт.",
      "type": "number",
      "applies": null
    },
    {
      "key": "paper",
      "label": "Бумага или материал",
      "type": "text",
      "applies": null
    },
    {
      "key": "artworkPlan",
      "label": "Работа с макетом",
      "type": "select",
      "options": [
        "Файл готов",
        "Нужна проверка",
        "Нужно разработать макет"
      ],
      "applies": null
    },
    {
      "key": "deadline",
      "label": "Желаемая дата",
      "type": "date",
      "applies": null
    }
  ],
  "fileLabel": "Макет в PDF или другом формате"
};
