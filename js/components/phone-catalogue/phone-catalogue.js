'use strict';
// ts-check

class PhoneCatalogue {
  /**
   * @param {{ element: HTMLElement, phones: [] }} options
   */
  constructor(options) {
    this._element = options.element;
    this._phones = options.phones;
    this._template = document.getElementById('template-phone-catalogue').content;

    this._render();
  }

  _getElementToCopy(selector, deep=true) {
    return this._template.querySelector(selector).cloneNode(deep)
  }

  _render() {
    const ul = this._getElementToCopy('.phones', false);
  
    this._phones.forEach((phone) => {
      const li = this._getElementToCopy('.thumbnail');

      const thumb = li.querySelector('.thumb');
      const href = `#!${phone.id}`;
      thumb.href = href;
      
      const img = thumb.querySelector('img');
      img.src = phone.imageUrl;
      img.alt = phone.name;

      const title = li.querySelectorAll('a')[1];
      title.href = href;
      title.textContent = phone.name;

      const desc = li.querySelector('p');
      desc.textContent = phone.snippet;

      ul.appendChild(li);
    })

    this._element.appendChild(ul);
  }
}