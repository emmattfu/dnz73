import React from "react";

const Contacts = () => {
  return (
    <div className="contacts page-block">
      <h2 className="contacts__title page-title">Контакти</h2>
      <p className="contacts__text page-text">
        Чернігівський дошкільний навчальний заклад Чернігівської міської ради
        Чернігівської області
      </p>
      <p className="contacts__text page-text">Адреса: 14000, м. Чернігів, вул. Рокосовського, 52</p>
      <p className="contacts__text page-text">Телефони: 3-42-57, 95-37-45</p>
      <p className="contacts__text page-text">Електронна пошта: <a className="content-link" href="mailto:dnz73.d@os.chernigiv-rada.gov.ua">dnz73.d@os.chernigiv-rada.gov.ua</a></p>
    </div>
  );
};

export default Contacts;
