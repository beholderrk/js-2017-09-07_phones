'use strict';

class ShopPage {
  constructor(options) {
    this._element = options.element;
    this._template = document.getElementById('template-shop-page').innerHTML;

    this._render();

    fetch('data/phones.json')
      .then(resp => resp.json())
      .then(phones => {
        new PhoneCatalogue({
          element: this._element.querySelector('[data-component="phoneCatalogue"]'),
          phones
        });
      })
  }

  _render() {
    this._element.innerHTML = this._template;
  }
}