const en = {
  steps: [
    { label: 'Step 1', title: 'Your info' },
    { label: 'Step 2', title: 'Select plan' },
    { label: 'Step 3', title: 'Add-ons' },
    { label: 'Step 4', title: 'Summary' },
  ],
  nav: { back: 'Go Back', next: 'Next Step', confirm: 'Confirm' },
  step1: {
    heading: 'Personal info',
    subheading: 'Please provide your name, email address, and phone number.',
    fields: {
      name:  { label: 'Name',          placeholder: 'e.g. Stephen King' },
      email: { label: 'Email Address', placeholder: 'e.g. stephen@lorem.com' },
      phone: { label: 'Phone Number',  placeholder: 'e.g. +358 234 567 890' },
    },
    errors: {
      required:     'This field is required',
      invalidName:  'Please enter a valid name',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number',
    },
  },
  step2: {
    heading:    'Select your plan',
    subheading: 'You have the option of monthly or yearly billing.',
    monthsFree: '2 months free',
    monthly:    'Monthly',
    yearly:     'Yearly',
    noplan:     'Please select a plan you want to have',
  },
  step3: {
    heading:    'Pick add-ons',
    subheading: 'Add-ons help enhance your gaming experience.',
    addons: {
      'online-service': { name: 'Online service',       description: 'Access to multiplayer games' },
      'larger-storage': { name: 'Larger storage',       description: 'Extra 1TB of cloud save' },
      'custom-profile': { name: 'Customizable Profile', description: 'Custom theme on your profile' },
    },
  },
  step4: {
    heading:    'Finishing up',
    subheading: 'Double-check everything looks OK before confirming.',
    change:     'Change',
    totalYear:  'Total (per year)',
    totalMonth: 'Total (per month)',
    yearly:     'Yearly',
    monthly:    'Monthly',
  },
  step5: {
    heading: 'Thank you!',
    body: 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@tunigaming.com.',
  },
}

const fi = {
  steps: [
    { label: 'Vaihe 1', title: 'Tietosi' },
    { label: 'Vaihe 2', title: 'Valitse paketti' },
    { label: 'Vaihe 3', title: 'Lisäosat' },
    { label: 'Vaihe 4', title: 'Yhteenveto' },
  ],
  nav: { back: 'Takaisin', next: 'Seuraava', confirm: 'Vahvista' },
  step1: {
    heading:    'Henkilötiedot',
    subheading: 'Anna nimesi, sähköpostiosoitteesi ja puhelinnumerosi.',
    fields: {
      name:  { label: 'Nimi',               placeholder: 'esim. Matti Meikäläinen' },
      email: { label: 'Sähköpostiosoite',   placeholder: 'esim. matti@esimerkki.fi' },
      phone: { label: 'Puhelinnumero',      placeholder: 'esim. +358 40 123 4567' },
    },
    errors: {
      required:     'Tämä kenttä on pakollinen',
      invalidName:  'Anna kelvollinen nimi',
      invalidEmail: 'Anna kelvollinen sähköpostiosoite',
      invalidPhone: 'Anna kelvollinen puhelinnumero',
    },
  },
  step2: {
    heading:    'Valitse pakettisi',
    subheading: 'Voit valita kuukausi- tai vuosilaskutuksen.',
    monthsFree: '2 kuukautta ilmaiseksi',
    monthly:    'Kuukausittain',
    yearly:     'Vuosittain',
    noplan:     'Valitse paketti',
  },
  step3: {
    heading:    'Valitse lisäosat',
    subheading: 'Lisäosat parantavat pelikokemustasi.',
    addons: {
      'online-service': { name: 'Verkkopalvelu',         description: 'Pääsy moninpeleihin' },
      'larger-storage': { name: 'Lisää tallennustilaa',  description: '1 TB lisää pilvitallennustilaa' },
      'custom-profile': { name: 'Mukautettava profiili', description: 'Oma teema profiilissasi' },
    },
  },
  step4: {
    heading:    'Viimeistely',
    subheading: 'Tarkista kaikki ennen vahvistamista.',
    change:     'Muuta',
    totalYear:  'Yhteensä (per vuosi)',
    totalMonth: 'Yhteensä (per kuukausi)',
    yearly:     'Vuosittain',
    monthly:    'Kuukausittain',
  },
  step5: {
    heading: 'Kiitos!',
    body: 'Kiitos tilauksesi vahvistamisesta! Toivomme sinulle hauskoja hetkiä alustamme parissa. Jos tarvitset tukea, ota yhteyttä osoitteeseen support@tunigaming.com.',
  },
}

const ru = {
  steps: [
    { label: 'Шаг 1', title: 'Ваши данные' },
    { label: 'Шаг 2', title: 'Выберите план' },
    { label: 'Шаг 3', title: 'Дополнения' },
    { label: 'Шаг 4', title: 'Итог' },
  ],
  nav: { back: 'Назад', next: 'Далее', confirm: 'Подтвердить' },
  step1: {
    heading:    'Личные данные',
    subheading: 'Укажите ваше имя, адрес электронной почты и номер телефона.',
    fields: {
      name:  { label: 'Имя',                   placeholder: 'напр. Иван Иванов' },
      email: { label: 'Электронная почта',      placeholder: 'напр. ivan@example.com' },
      phone: { label: 'Номер телефона',         placeholder: 'напр. +7 900 123 4567' },
    },
    errors: {
      required:     'Это поле обязательно',
      invalidName:  'Введите корректное имя',
      invalidEmail: 'Введите корректный адрес электронной почты',
      invalidPhone: 'Введите корректный номер телефона',
    },
  },
  step2: {
    heading:    'Выберите план',
    subheading: 'Вы можете выбрать ежемесячную или ежегодную оплату.',
    monthsFree: '2 месяца бесплатно',
    monthly:    'Ежемесячно',
    yearly:     'Ежегодно',
    noplan:     'Пожалуйста, выберите план',
  },
  step3: {
    heading:    'Выберите дополнения',
    subheading: 'Дополнения улучшат ваш игровой опыт.',
    addons: {
      'online-service': { name: 'Онлайн-сервис',         description: 'Доступ к многопользовательским играм' },
      'larger-storage': { name: 'Расширенное хранилище', description: 'Дополнительный 1 ТБ в облаке' },
      'custom-profile': { name: 'Настраиваемый профиль', description: 'Собственная тема профиля' },
    },
  },
  step4: {
    heading:    'Завершение',
    subheading: 'Проверьте всё перед подтверждением.',
    change:     'Изменить',
    totalYear:  'Итого (в год)',
    totalMonth: 'Итого (в месяц)',
    yearly:     'Ежегодно',
    monthly:    'Ежемесячно',
  },
  step5: {
    heading: 'Спасибо!',
    body: 'Спасибо за подтверждение подписки! Желаем вам приятного использования нашей платформы. Если вам понадобится поддержка, напишите нам на support@tunigaming.com.',
  },
}

export const translations = { en, fi, ru }
