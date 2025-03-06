export default {
  nameFlags: [
    "usa",
    "spain",
    "czech",
    "curacao",
    "uk",
    "hongKong",
    "canada",
    "singapore",
    "panama",
    "belize",
    "mauritius",
    "seychelles",
    "belgium",
    "scotland",
  ],
  tariffPlanOptions: {
    free: [
      { isAvailable: true, name: "Доступ до 100 мільйонів стокових зображень" },
      { isAvailable: true, name: "Понад 20 000 зображень PNG і SVG" },
      { isAvailable: false, name: "Завантажуйте власні значки та шрифти" },
      { isAvailable: false, name: "Необмежений спільний доступ" },
      {
        isAvailable: false,
        name: "Завантажуйте графіку та відео у форматі до 4k",
      },
      { isAvailable: false, name: "Необмежена кількість проектів" },
      {
        isAvailable: false,
        name: "Миттєвий доступ до нашої системи проектування",
      },
      {
        isAvailable: false,
        name: "Створюйте команди для співпраці над дизайном",
      },
    ],
    prof: [
      { isAvailable: true, name: "Понад 20 000 зображень PNG і SVG" },
      { isAvailable: true, name: "Доступ до 100 мільйонів стокових зображень" },
      { isAvailable: true, name: "Завантажуйте власні значки та шрифти" },
      { isAvailable: true, name: "Необмежений спільний доступ" },
      {
        isAvailable: true,
        name: "Завантажуйте графіку та відео у форматі до 4k",
      },
      { isAvailable: true, name: "Необмежена кількість проектів" },
      {
        isAvailable: false,
        name: "Миттєвий доступ до нашої системи проектування",
      },
      {
        isAvailable: false,
        name: "Створюйте команди для співпраці над дизайном",
      },
    ],
    enterprise: [
      { isAvailable: true, name: "Понад 20 000 зображень PNG і SVG" },
      { isAvailable: true, name: "Доступ до 100 мільйонів стокових зображень" },
      { isAvailable: true, name: "Завантажуйте власні значки та шрифти" },
      { isAvailable: true, name: "Необмежений спільний доступ" },
      {
        isAvailable: true,
        name: "Завантажуйте графіку та відео у форматі до 4k",
      },
      { isAvailable: true, name: "Необмежена кількість проектів" },
      {
        isAvailable: true,
        name: "Миттєвий доступ до нашої системи проектування",
      },
      {
        isAvailable: true,
        name: "Створюйте команди для співпраці над дизайном",
      },
    ],
  },
  contactPhones: [
    {
      phone: "+852 5804 3919",
      name: "Hong Kong",
      flag: "hongKong",
    },
    {
      phone: "+61 390 185 385",
      name: "Australia",
      flag: "australia",
    },
    {
      phone: "+44 207 193 1138",
      name: "United Kingdom",
      flag: "uk",
    },
    {
      phone: "+65 6591 9991",
      name: "Singapore",
      flag: "singapore",
    },
    {
      phone: "+1 949 524 4399",
      name: "United States",
      flag: "usa",
    },
    {
      phone: "+1 949 864 6011",
      name: "British Virgin Islands",
      flag: "bvi",
    },
    {
      phone: "+370 5266 4444",
      name: "Lithuania",
      flag: "lithuania",
    },
  ],
  emailRegex:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  jurisdictionsRegions: [
    {
      value: "europe",
      label: "Європейський регіон",
    },
    {
      value: "america",
      label: "Американський регіон",
    },
    {
      value: "asia",
      label: "Азійській регіон",
    },
  ],
  countriesList: {
    england: "Англії",
    usa: "США",
    belize: "Белізі",
    ireland: "Ірландії",
    scotland: "Шотландії",
    panama: "Панамі",
    kuracao: "Кюракао",
    spain: "Іспанії",
    poland: "Польщі",
    gibraltar: "Гібралтарі",
    isleOfMan: "Острові Мен",
    czechia: "Чехії",
  },
};
