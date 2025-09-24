export default {
  nameFlags: [
    {
      name: "США",
      flag: "usa",
      link: "usa",
    },
    {
      name: "Іспанія",
      flag: "spain",
      link: "spain",
    },
    {
      name: "Кюракао",
      flag: "curacao",
      link: "curacao",
    },
    {
      name: "Чехія",
      flag: "czech",
      link: "czechia",
    },
    {
      name: "Канада",
      flag: "canada",
      link: "canada",
    },
    {
      name: "Панама",
      flag: "panama",
      link: "panama",
    },
    {
      name: "Беліз",
      flag: "belize",
      link: "belize",
    },
    {
      name: "Мауріцій",
      flag: "mauritius",
      link: "mauritius",
    },
    {
      name: "Сейшели",
      flag: "seychelles",
      link: "seychelles",
    },
    {
      name: "Бельгія",
      flag: "belgium",
      link: "belgium",
    },
    {
      name: "Щотландія",
      flag: "scotland",
      link: "scotland",
    },
    {
      name: "Англія",
      flag: "uk",
      link: "england",
    },
  ],
  tariffPlanOptions: {
    free: ["plan_start_item_1","plan_start_item_2","plan_start_item_3","plan_start_item_4","plan_start_item_5"],
    prof: ["plan_business_item_1","plan_business_item_2","plan_business_item_3","plan_business_item_4","plan_business_item_5","plan_business_item_6"
    ],
    enterprise: ["plan_vip_item_1","plan_vip_item_2","plan_vip_item_3","plan_vip_item_4","plan_vip_item_5","plan_vip_item_6","plan_vip_item_7"],
    options:["additional_options_item_1","additional_options_item_2","additional_options_item_3","additional_options_item_4","additional_options_item_5","additional_options_item_6","additional_options_item_7","additional_options_item_8","additional_options_item_9"]
  },
  contactPhones: [
    {
      phone: "+1 406 800 6228",
      name: "United States",
      flag: "usa",
    },
    {
      phone: "+48 453 193 540 ",
      name: "Poland",
      flag: "poland",
    },
  ],
  emailRegex:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  jurisdictionsRegions: [
    {
      value: "europe",
      label: "Європейський регіон",
      translationValue: "jurisdictions_5"
    },
    {
      value: "america",
      label: "Американський регіон",
      translationValue: "jurisdictions_6"
    },
    {
      value: "asia",
      label: "Азійській регіон",
      translationValue: "jurisdictions_7"
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
    mauritius: "Мауріціо",
    canada: "Канаді",
    belgium: "Бельгії",
    seychelles: "Сейшели",
  },
  regionsList: [
    {
      language: "en",
    },
    {
      language: "ua",
    },
    {
      language: "es",
    },
    {
      language: "it",
    },
    {
      language: "ru",
    },
  ],
};
